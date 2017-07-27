import { app, BrowserWindow, ipcMain, Menu, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import path from 'path';
import url from 'url';
import getMenuTemplate from './lib/getMenuTemplate';

let mainWindow;
let loginWindow;
let isLogin = false;

function onLogin() {
  if (!mainWindow) {
    return;
  }
  mainWindow.show();
  mainWindow.webContents.send('loginUser');
}

function onLogout() {
  if (!mainWindow) {
    return;
  }
  mainWindow.show();
  mainWindow.webContents.send('logoutUser');
}

function setMenu() {
  const menuTemplate = getMenuTemplate({ appName: app.getName(), onLogin, onLogout, isLogin });
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

function createMainWindow() {
  const isDev = false; //process.env.NODE_ENV === 'development';
  const height = 540;
  const width = isDev ? 950 : 300;
  mainWindow = new BrowserWindow({
    width,
    height,
    frame: false,
    // resizable: false,
    backgroundColor: '#ffffff',
    show: false,
  });
  let indexFile = process.env.ASSETS_HOST;
  if (!indexFile) {
    indexFile = url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    });
  }
  mainWindow.loadURL(indexFile);

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

function createLoginWindow(oAuthUri) {
  loginWindow = new BrowserWindow({
    width: 600,
    height: 680,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#fcfcfc',
  });
  loginWindow.loadURL(oAuthUri);
  // loginWindow.webContents.openDevTools();
  loginWindow.on('closed', () => {
    loginWindow = null;
  });
}

// auto updater
autoUpdater.autoDownload = false;
autoUpdater.on('update-available', (info) => {
  dialog.showMessageBox({
    type: 'info',
    title: 'Found Updates',
    message: 'Found updates, do you want update now?',
    buttons: ['Sure', 'No']
  }, (buttonIndex) => {
    if (buttonIndex === 0) {
      autoUpdater.downloadUpdate();
    }
  });
});
autoUpdater.on('update-downloaded', (info) => {
  dialog.showMessageBox({
    title: 'Install Updates',
    message: 'Updates downloaded, application will be quit for update...'
  }, () => {
    setImmediate(() => autoUpdater.quitAndInstall());
  });
});
app.on('ready', () => {
  autoUpdater.checkForUpdates();
});

app.on('ready', () => {
  createMainWindow();
  setMenu();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createMainWindow();
  } else {
    mainWindow.show();
  }
});

ipcMain.on('openLoginWindow', (event, { oAuthUri }) => {
  if (loginWindow) {
    loginWindow.show();
    return;
  }
  createLoginWindow(oAuthUri);
});

ipcMain.on('loginSuccess', (event, message) => {
  if (!mainWindow) {
    return;
  }
  mainWindow.show();
  if (message) {
    mainWindow.webContents.send('loginSuccess', message);
  }
  isLogin = true;
  setMenu();
});

ipcMain.on('logoutSuccess', () => {
  if (!mainWindow) {
    return;
  }
  isLogin = false;
  setMenu();
});

ipcMain.on('minimizeWindow', () => {
  if (!mainWindow) {
    return;
  }
  mainWindow.minimize();
});

ipcMain.on('closeWindow', () => {
  if (!mainWindow) {
    return;
  }
  mainWindow.hide();
});
