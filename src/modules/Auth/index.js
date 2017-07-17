import { ipcRenderer } from 'electron';
import Auth from 'ringcentral-integration/modules/Auth';
import parseCallbackUri from 'ringcentral-integration/lib/parseCallbackUri';
import authMessages from 'ringcentral-integration/modules/Auth/authMessages';

export default class ElectronAuth extends Auth {
  constructor({ ...options }) {
    super({
      ...options,
    });
    this._createProxyFrame = () => {
      this.store.dispatch({
        type: this.actionTypes.proxyLoaded,
      });
    };
  }

  openOAuthPage() {
    const loginUrl = this.getLoginUrl({
      redirectUri: this.redirectUri,
      brandId: this._brand.id,
    });
    const oAuthUri =
      `${loginUrl}&force=true&localeId=${encodeURIComponent(this._locale.currentLocale)}`;
    ipcRenderer.send('openLoginWindow', { oAuthUri });
  }

  async loginFromCallbackUri(callbackUri) {
    try {
      const code = parseCallbackUri(callbackUri);
      if (code) {
        await this.login({
          code,
          redirectUri: this.redirectUri,
        });
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
  }
}
