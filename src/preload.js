import { ipcRenderer } from 'electron';

function sendLoginSuccessMessage(callbackUri) {
  ipcRenderer.send('loginSuccess', { callbackUri });
}

window.Bridge = {
  sendLoginSuccessMessage,
};
