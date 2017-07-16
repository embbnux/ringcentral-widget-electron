import { ipcRenderer } from 'electron';

function popWindow(url, id, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  const width = screen.width || window.outerWidth;
  const height = screen.height || window.innerHeight;

  const left = ((width / 2) - (w / 2)) + dualScreenLeft;
  const top = ((height / 2) - (h / 2)) + dualScreenTop;
  const newWindow = window.open(
    url,
    id,
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`,
  );

  // Puts focus on the newWindow
  if (window.focus) {
    try {
      newWindow.focus();
    } catch (e) {
      /* falls through */
    }
  }
  return newWindow;
}

export default class ProxyWebviewController {
  constructor({
    prefix,
  } = {}) {
    // console.log('initialing webview');
    window.oAuthCallback = (callbackUri) => {
      ipcRenderer.sendToHost('message', {
        callbackUri,
      });
    };

    ipcRenderer.on('message', (event, data) => {
      if (data) {
        const {
          oAuthUri,
        } = data;
        if (oAuthUri != null) {
          console.log(oAuthUri);
          popWindow(oAuthUri, 'rc-oauth', 600, 600);
        }
      }
    });

    const key = `${prefix}-redirect-callbackUri`;
    window.addEventListener('storage', (e) => {
      if (e.key === key && e.newValue && e.newValue !== '') {
        const callbackUri = e.newValue;
        ipcRenderer.sendToHost('message', {
          callbackUri,
          fromLocalStorage: true,
        });
        localStorage.removeItem(key);
      }
    });
    // loaded
    ipcRenderer.sendToHost('message', {
      proxyLoaded: true,
    });
  }
}
