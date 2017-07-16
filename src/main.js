import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import url from 'url';

let mainWindow;
function createMainWindow() {
  const isDev = process.env.NODE_ENV === 'development';
  const height = 520;
  const width = isDev ? 950 : 300;
  mainWindow = new BrowserWindow({ width, height });
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
}

let loginWindow;
function createLoginWindow(oAuthUri) {
  loginWindow = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  loginWindow.loadURL(oAuthUri);
  loginWindow.webContents.openDevTools();
  loginWindow.on('closed', () => {
    loginWindow = null;
  });
}

app.on('ready', createMainWindow);

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
  }
});

ipcMain.on('openLoginWindow', (event, { oAuthUri }) => {
  if (loginWindow) {
    return;
  }
  createLoginWindow(oAuthUri);
});

ipcMain.on('loginSuccess', (event, message) => {
  if (!mainWindow) {
    return;
  }
  mainWindow.webContents.send('loginSuccess', message);
});
