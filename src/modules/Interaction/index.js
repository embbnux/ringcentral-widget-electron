import RcModule from 'ringcentral-integration/lib/RcModule';
import moduleStatuses from 'ringcentral-integration/enums/moduleStatuses';

import ensureExist from 'ringcentral-integration/lib/ensureExist';

import actionTypes from './actionTypes';
import getReducer from './getReducer';

export default class Interaction extends RcModule {
  constructor({
    auth,
    router,
    presence,
    ...options,
  }) {
    super({
      ...options,
      actionTypes,
    });
    this._auth = this::ensureExist(auth, 'auth');
    this._router = this::ensureExist(router, 'router');
    this._presence = this::ensureExist(presence, 'presence');
    this._reducer = getReducer(this.actionTypes);
    this._dndStatus = null;
    this._userStatus = null;
  }

  _shouldInit() {
    return this.pending &&
      this._auth.loggedIn &&
      this._presence.ready;
  }

  _shouldReset() {
    return this.ready &&
      (
        !this._auth.loggedIn ||
        !this._presence.ready
      );
  }

  async _onStateChange() {
    if (this._shouldInit()) {
      this.store.dispatch({
        type: this.actionTypes.initSuccess,
      });
    } else if (this._shouldReset()) {
      this.store.dispatch({
        type: this.actionTypes.resetSuccess,
      });
    }
  }

  initialize() {
    this.store.subscribe(() => this._onStateChange());
  }

  get ready() {
    return this.state.status === moduleStatuses.ready;
  }

  get pending() {
    return this.state.status === moduleStatuses.pending;
  }
}
