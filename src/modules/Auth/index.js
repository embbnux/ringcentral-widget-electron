import Auth from 'ringcentral-integration/modules/Auth';
import parseCallbackUri from 'ringcentral-integration/lib/parseCallbackUri';
import authMessages from 'ringcentral-integration/modules/Auth/authMessages';

export default class ElectronAuth extends Auth {
  constructor({ ...options }) {
    super({
      ...options,
    });
    this._createProxyFrame = (onLogin) => {
      this._proxyFrame = document.createElement('webview');
      this._proxyFrame.src = this.proxyUri;
      this._proxyFrame.nodeintegration = true;
      this._proxyFrame.allowpopups = true;

      document.body.appendChild(this._proxyFrame);
      this._callbackHandler = async ({ channel, args }) => {
        if (channel !== 'message') {
          return;
        }
        const data = args[0];
        // TODO origin check
        if (data) {
          const {
            callbackUri,
            proxyLoaded,
            fromLocalStorage,
          } = data;
          if (
            callbackUri &&
            (
              fromLocalStorage !== true ||
              (!this._tabManager || this._tabManager.active)
            )
          ) {
            try {
              const code = parseCallbackUri(callbackUri);
              if (code) {
                await this.login({
                  code,
                  redirectUri: this.redirectUri,
                });
                if (typeof onLogin === 'function') {
                  onLogin();
                }
              }
            } catch (error) {
              let message;
              switch (error.message) {
                case 'invalid_request':
                case 'unauthorized_client':
                case 'access_denied':
                case 'unsupported_response_type':
                case 'invalid_scope':
                  message = authMessages.accessDenied;
                  break;
                case 'server_error':
                case 'temporarily_unavailable':
                default:
                  message = authMessages.internalError;
                  break;
              }

              this._alert.danger({
                message,
                payload: error,
              });
            }
          } else if (proxyLoaded) {
            clearTimeout(this._retryTimeoutId);
            this._retryTimeoutId = null;
            this.store.dispatch({
              type: this.actionTypes.proxyLoaded,
            });
          }
        }
      };
      this._proxyFrame.addEventListener('ipc-message', this._callbackHandler);
      this._proxyFrame.addEventListener('console-message', (e) => {
        console.log('Guest page logged a message:', e.message)
      });
      this._retryTimeoutId = setTimeout(() => {
        this._retrySetupProxyFrame(onLogin);
      }, this._defaultProxyRetry);
    };
  }

  _destroyProxyFrame() {
    this._proxyFrame.removeEventListener('ipc-message', this._callbackHandler);
    document.body.removeChild(this._proxyFrame);
    this._proxyFrame = null;
    this._callbackHandler = null;
  }

  openOAuthPage() {
    if (this.proxyLoaded) {
      // console.log(this.redirectUri);
      this._proxyFrame.send('message', {
        oAuthUri: `${this.getLoginUrl({
          redirectUri: this.redirectUri,
          brandId: this._brand.id,
        })}&force=true&localeId=${encodeURIComponent(this._locale.currentLocale)}`,
      });
    }
  }
}
