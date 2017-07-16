webpackJsonp([7],{

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(10);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['account', 'contact', 'lead', 'opportunity', 'systemUser']);
//# sourceMappingURL=phoneSources.js.map


/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(10);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['business', 'extension', 'home', 'mobile', 'phone', 'unknown']);
//# sourceMappingURL=phoneTypes.js.map


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _authMessages$interna;

var _authMessages = __webpack_require__(234);

var _authMessages2 = _interopRequireDefault(_authMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Login failed due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Access denied. Please contact support.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'Session expired. Please sign in.'), _authMessages$interna);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callErrors$noToNumbe;

var _callErrors = __webpack_require__(161);

var _callErrors2 = _interopRequireDefault(_callErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Dialing emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options\n    please contact your account administrator for an upgrade.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'area code'), _callErrors$noToNumbe);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DirectNumber: 'Direct',
  MainCompanyNumber: 'Main',
  CompanyNumber: 'Company',
  CompanyFaxNumber: 'Fax',
  Blocked: 'Blocked',
  from: 'From'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No active calls',
  noRecords: 'No records'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callingSettingsMessa;

var _callingSettingsMessages = __webpack_require__(235);

var _callingSettingsMessages2 = _interopRequireDefault(_callingSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Settings saved successfully. Please make sure you have {brand} for Desktop installed in your computer.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Please select in Calling section how you want to make your call. It would be nice if you let us know your location by specifying the country and area code (if available) in Region section, so you can do local dialing with the app.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Please select in Calling section how you want to make your call.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Your permissions have been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'Your phone number information has been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Settings > Calling'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Your permissions have been changed and you cannot make calls with Browser. For details please contact your account administrator.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Dialing emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number.'), _callingSettingsMessa);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$callingOptions;

var _callingOptions = __webpack_require__(162);

var _callingOptions2 = _interopRequireDefault(_callingOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$callingOptions = {
  title: 'Calling'
}, (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone, '{brand} for Desktop'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone, 'My {brand} Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone, 'Other Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone, 'Custom Phone'), (0, _defineProperty3.default)(_title$callingOptions, 'makeCallsWith', 'Make my calls with'), (0, _defineProperty3.default)(_title$callingOptions, 'ringoutHint', 'Ring me at my location first, then connect the called party'), (0, _defineProperty3.default)(_title$callingOptions, 'myLocationLabel', 'My Location'), (0, _defineProperty3.default)(_title$callingOptions, 'press1ToStartCallLabel', 'Prompt me to dial 1 before connecting the call'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser, 'Browser'), _title$callingOptions);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'From',
  to: 'To',
  enterNameOrNumber: 'Enter Number or Name...',
  typeMessage: 'Type message...',
  send: 'Send'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _connectivityMonitorMessages = __webpack_require__(236);

var _connectivityMonitorMessages2 = _interopRequireDefault(_connectivityMonitorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'Network connection is lost.');
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  logging: 'Logging...',
  logCall: 'Log Call',
  editLog: 'Edit Log',
  select: 'Select a matching record',
  OnHold: 'On Hold',
  Ringing: 'Ringing',
  CallConnected: 'Call Connected',
  unknownUser: 'Unknown User',
  unknownNumber: 'Anonymous',
  unavailable: 'Unavailable',
  viewDetails: 'View Details'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  send: 'Send',
  typeMessage: 'Type message...'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To:'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  account: 'Account',
  contact: 'Contact',
  lead: 'Lead',
  chooseEntity: 'Please select entity type',
  create: 'Create'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'End User License Agreement',
  serviceTerms: 'Service Terms'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Sign In',
  version: 'Version'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Loading: 'Loading...',
  search: 'Search...',
  noMessages: 'No Messages',
  noSearchResults: 'No matching records found'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageSenderMessage;

var _messageSenderMessages = __webpack_require__(125);

var _messageSenderMessages2 = _interopRequireDefault(_messageSenderMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Send Success.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Something wrong happened when send message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Phone Number Validate Error.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Please enter the text to be sent.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'You have no permission to send message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'You must select a number from your phone numbers to send'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Please enter a valid receiver number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'Text is too long, 1000 Limited'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Recipient number is invalids'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Dialing emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Cannot send To a extension number with main phone number. If you want to sent to a extension Number, please just enter extension Number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalids, 'You don\'t have valid phone number to send SMS from. Please contact your account administrator.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Sending SMS to international phone number is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'area code'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'A valid Phone Number is required to send text message to recipients outside of your company. Please contact your Administrator to add a direct number to your account.'), _messageSenderMessage);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  confirm: 'Confirm'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Offline Mode'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Request limit exceeded. App will resume in {ttl} seconds.'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  selectMatchedName: 'Select a matching record'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _region$regionSetting;

var _regionSettingsMessages = __webpack_require__(237);

var _regionSettingsMessages2 = _interopRequireDefault(_regionSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_region$regionSetting = {
  region: 'Region'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'region settings'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Please enter a valid area code.'), _region$regionSetting);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Region',
  NAOnlyMessage: 'Please set your area code. This will be used for local dialing.',
  MultiWithNAMessage: 'Please set the country and area code for your region. This will be used for local dialing and phone number formatting.',
  MultiWithoutNAMessage: 'Please select the country you locate in. This will be used for local dialing and phone number formatting.',
  country: 'Country',
  areaCode: 'Area Code',
  areaCodePlaceholder: 'Enter Area Code'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _permissionsMessages = __webpack_require__(238);

var _permissionsMessages2 = _interopRequireDefault(_permissionsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition.');
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Region',
  calling: 'Calling',
  logout: 'Logout',
  version: 'Version',
  settings: 'Settings',
  clickToDial: 'Click to Dial',
  autoCreateLog: 'Auto-create Call Log',
  autoCreateSMSLog: 'Auto-create SMS Log',
  autoLogCalls: 'Auto log calls',
  autoLogSMS: 'Auto log SMS',
  clickToSMS: 'Click to SMS',
  clickToDialSMS: 'Click to Dial/SMS'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _webphoneErrors$conne;

var _webphoneErrors = __webpack_require__(239);

var _webphoneErrors2 = _interopRequireDefault(_webphoneErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Send Success.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Calling with browser is only supported on Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'A maximum of 5 web phones could be registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'You have no permission to send message.'), _webphoneErrors$conne);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'History'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Calls'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Messages'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  AR: 'Argentina',
  AT: 'Austria',
  BH: 'Bahrain',
  BR: 'Brazil',
  BG: 'Bulgaria',
  CA: 'Canada',
  CL: 'Chile',
  CN: 'China',
  HR: 'Croatia',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DO: 'Dominican Republic',
  EE: 'Estonia',
  FI: 'Finland',
  FR: 'France',
  DE: 'Germany',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IE: 'Ireland',
  IL: 'Israel',
  IN: 'India',
  IT: 'Italy',
  JP: 'Japan',
  LV: 'Latvia',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MY: 'Malaysia',
  MX: 'Mexico',
  NL: 'Netherlands',
  NO: 'Norway',
  PA: 'Panama',
  PH: 'Philippines',
  PL: 'Poland',
  PT: 'Portugal',
  RO: 'Romania',
  SK: 'Slovakia',
  SI: 'Slovenia',
  ES: 'Spain',
  SE: 'Sweden',
  CH: 'Switzerland',
  TR: 'Turkey',
  GB: 'United Kingdom',
  AU: 'Australia',
  GE: 'Georgia',
  ID: 'Indonesia',
  KE: 'Kenya',
  NG: 'Nigeria',
  PK: 'Pakistan',
  ZA: 'South Africa',
  KR: 'South Korea',
  SG: 'Singapore',
  TW: 'Taiwan',
  UA: 'Ukraine',
  US: 'United States',
  VN: 'Vietnam',
  BE: 'Belgium',
  BJ: 'Benin',
  SV: 'El Salvador',
  GH: 'Ghana',
  GR: 'Greece',
  GN: 'Guinea',
  NZ: 'New Zealand',
  PE: 'Peru',
  PR: 'Puerto Rico'
};
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneSources$account;

var _phoneSources = __webpack_require__(1601);

var _phoneSources2 = _interopRequireDefault(_phoneSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Account'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contact'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Opportunity'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'System User'), _phoneSources$account);
//# sourceMappingURL=en-CA.js.map


/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(104);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneTypes$business$;

var _phoneTypes = __webpack_require__(1602);

var _phoneTypes2 = _interopRequireDefault(_phoneTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Business Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Extension Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Home Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Mobile Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Unknown Phone Type'), _phoneTypes$business$);
//# sourceMappingURL=en-CA.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9lbnVtcy9waG9uZVNvdXJjZXMuanM/ZTcxNyoqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9lbnVtcy9waG9uZVR5cGVzLmpzPzBlM2IqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9BdXRoQWxlcnQvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxBbGVydC9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ2FsbElkU2VsZWN0L2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsSXRlbS9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ2FsbExpc3QvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc0FsZXJ0L2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsaW5nU2V0dGluZ3NQYW5lbC9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ29tcG9zZVRleHRQYW5lbC9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ29ubmVjdGl2aXR5QWxlcnQvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NvbnRhY3REaXNwbGF5L2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Db252ZXJzYXRpb25QYW5lbC9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvRGlhbFRleHRJbnB1dC9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvRW50aXR5TW9kYWwvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0V1bGEvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0xvZ2luUGFuZWwvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL01lc3NhZ2VMaXN0L2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9NZXNzYWdlU2VuZGVyQWxlcnQvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL01vZGFsL2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9PZmZsaW5lTW9kZUJhZGdlL2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9SYXRlRXhjZWVkZWRBbGVydC9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUmVjaXBpZW50SGVhZGVyL2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc1BhbmVsL2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1NldHRpbmdzUGFuZWwvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1dlYnBob25lQWxlcnQvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb250YWluZXJzL0NhbGxIaXN0b3J5UGFnZS9pMThuL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbnRhaW5lcnMvQ2FsbE1vbml0b3JQYWdlL2kxOG4vZW4tQ0EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29udGFpbmVycy9NZXNzYWdlc1BhZ2UvaTE4bi9lbi1DQS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9saWIvY291bnRyeU5hbWVzL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2xpYi9waG9uZVNvdXJjZU5hbWVzL2VuLUNBLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2xpYi9waG9uZVR5cGVOYW1lcy9lbi1DQS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeEVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw2Q0FBNkM7QUFDN0M7Ozs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsNkNBQTZDO0FBQzdDIiwiZmlsZSI6IjcucmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRW51bSA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9FbnVtJyk7XG5cbnZhciBfRW51bTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbnVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IF9FbnVtMi5kZWZhdWx0KFsnYWNjb3VudCcsICdjb250YWN0JywgJ2xlYWQnLCAnb3Bwb3J0dW5pdHknLCAnc3lzdGVtVXNlciddKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBob25lU291cmNlcy5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvZW51bXMvcGhvbmVTb3VyY2VzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRW51bSA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL2xpYi9FbnVtJyk7XG5cbnZhciBfRW51bTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbnVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IF9FbnVtMi5kZWZhdWx0KFsnYnVzaW5lc3MnLCAnZXh0ZW5zaW9uJywgJ2hvbWUnLCAnbW9iaWxlJywgJ3Bob25lJywgJ3Vua25vd24nXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waG9uZVR5cGVzLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9lbnVtcy9waG9uZVR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9hdXRoTWVzc2FnZXMkaW50ZXJuYTtcblxudmFyIF9hdXRoTWVzc2FnZXMgPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0F1dGgvYXV0aE1lc3NhZ2VzJyk7XG5cbnZhciBfYXV0aE1lc3NhZ2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dGhNZXNzYWdlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChfYXV0aE1lc3NhZ2VzJGludGVybmEgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2F1dGhNZXNzYWdlcyRpbnRlcm5hLCBfYXV0aE1lc3NhZ2VzMi5kZWZhdWx0LmludGVybmFsRXJyb3IsICdMb2dpbiBmYWlsZWQgZHVlIHRvIGludGVybmFsIGVycm9ycy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2F1dGhNZXNzYWdlcyRpbnRlcm5hLCBfYXV0aE1lc3NhZ2VzMi5kZWZhdWx0LmFjY2Vzc0RlbmllZCwgJ0FjY2VzcyBkZW5pZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9hdXRoTWVzc2FnZXMkaW50ZXJuYSwgX2F1dGhNZXNzYWdlczIuZGVmYXVsdC5zZXNzaW9uRXhwaXJlZCwgJ1Nlc3Npb24gZXhwaXJlZC4gUGxlYXNlIHNpZ24gaW4uJyksIF9hdXRoTWVzc2FnZXMkaW50ZXJuYSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9BdXRoQWxlcnQvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX2NhbGxFcnJvcnMkbm9Ub051bWJlO1xuXG52YXIgX2NhbGxFcnJvcnMgPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGwvY2FsbEVycm9ycycpO1xuXG52YXIgX2NhbGxFcnJvcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FsbEVycm9ycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChfY2FsbEVycm9ycyRub1RvTnVtYmUgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxFcnJvcnMkbm9Ub051bWJlLCBfY2FsbEVycm9yczIuZGVmYXVsdC5ub1RvTnVtYmVyLCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbEVycm9ycyRub1RvTnVtYmUsIF9jYWxsRXJyb3JzMi5kZWZhdWx0Lm5vQXJlYUNvZGUsICdQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsRXJyb3JzJG5vVG9OdW1iZSwgX2NhbGxFcnJvcnMyLmRlZmF1bHQuc3BlY2lhbE51bWJlciwgJ0RpYWxpbmcgZW1lcmdlbmN5IG9yIHNwZWNpYWwgc2VydmljZSBudW1iZXJzIGlzIG5vdCBzdXBwb3J0ZWQuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsRXJyb3JzJG5vVG9OdW1iZSwgX2NhbGxFcnJvcnMyLmRlZmF1bHQuY29ubmVjdEZhaWxlZCwgJ0Nvbm5lY3Rpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbEVycm9ycyRub1RvTnVtYmUsIF9jYWxsRXJyb3JzMi5kZWZhdWx0LmludGVybmFsRXJyb3IsICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbEVycm9ycyRub1RvTnVtYmUsIF9jYWxsRXJyb3JzMi5kZWZhdWx0Lm5vdEFuRXh0ZW5zaW9uLCAnVGhlIGV4dGVuc2lvbiBudW1iZXIgZG9lcyBub3QgZXhpc3QuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsRXJyb3JzJG5vVG9OdW1iZSwgX2NhbGxFcnJvcnMyLmRlZmF1bHQubmV0d29ya0Vycm9yLCAnQ2Fubm90IGNvbm5lY3QgZHVlIHRvIG5ldHdvcmsgaXNzdWVzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbEVycm9ycyRub1RvTnVtYmUsIF9jYWxsRXJyb3JzMi5kZWZhdWx0Lm5vUmluZ291dEVuYWJsZSwgJ1lvdXIgZXh0ZW5zaW9uIGlzIGFsbG93ZWQgdG8gbWFrZSBjYWxscyB3aXRoIGRlc2t0b3AgYXBwLlxcbiAgICBJZiB5b3Ugd2lzaCB0byBzd2l0Y2ggdG8gb3RoZXIgY2FsbGluZyBvcHRpb25zXFxuICAgIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbEVycm9ycyRub1RvTnVtYmUsICdhcmVhQ29kZScsICdhcmVhIGNvZGUnKSwgX2NhbGxFcnJvcnMkbm9Ub051bWJlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxBbGVydC9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA0MzFcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBEaXJlY3ROdW1iZXI6ICdEaXJlY3QnLFxuICBNYWluQ29tcGFueU51bWJlcjogJ01haW4nLFxuICBDb21wYW55TnVtYmVyOiAnQ29tcGFueScsXG4gIENvbXBhbnlGYXhOdW1iZXI6ICdGYXgnLFxuICBCbG9ja2VkOiAnQmxvY2tlZCcsXG4gIGZyb206ICdGcm9tJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxJZFNlbGVjdC9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBsb2dnaW5nOiAnTG9nZ2luZy4uLicsXG4gIGxvZ0NhbGw6ICdMb2cgQ2FsbCcsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHNlbGVjdDogJ1NlbGVjdCBhIG1hdGNoaW5nIHJlY29yZCcsXG4gIE9uSG9sZDogJ09uIEhvbGQnLFxuICBSaW5naW5nOiAnUmluZ2luZycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDYWxsIENvbm5lY3RlZCcsXG4gIHVua25vd25Vc2VyOiAnVW5rbm93biBVc2VyJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub255bW91cycsXG4gIHVuYXZhaWxhYmxlOiAnVW5hdmFpbGFibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsSXRlbS9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBub0FjdGl2ZUNhbGxzOiAnTm8gYWN0aXZlIGNhbGxzJyxcbiAgbm9SZWNvcmRzOiAnTm8gcmVjb3Jkcydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsTGlzdC9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA0NThcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfY2FsbGluZ1NldHRpbmdzTWVzc2E7XG5cbnZhciBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMgPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcycpO1xuXG52YXIgX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKF9jYWxsaW5nU2V0dGluZ3NNZXNzYSA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbGluZ1NldHRpbmdzTWVzc2EsIF9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5zYXZlU3VjY2VzcywgJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxpbmdTZXR0aW5nc01lc3NhLCBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQuc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lLCAnU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgbWFrZSBzdXJlIHlvdSBoYXZlIHticmFuZH0gZm9yIERlc2t0b3AgaW5zdGFsbGVkIGluIHlvdXIgY29tcHV0ZXIuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsaW5nU2V0dGluZ3NNZXNzYSwgX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzMi5kZWZhdWx0LmZpcnN0TG9naW4sICdQbGVhc2Ugc2VsZWN0IGluIENhbGxpbmcgc2VjdGlvbiBob3cgeW91IHdhbnQgdG8gbWFrZSB5b3VyIGNhbGwuIEl0IHdvdWxkIGJlIG5pY2UgaWYgeW91IGxldCB1cyBrbm93IHlvdXIgbG9jYXRpb24gYnkgc3BlY2lmeWluZyB0aGUgY291bnRyeSBhbmQgYXJlYSBjb2RlIChpZiBhdmFpbGFibGUpIGluIFJlZ2lvbiBzZWN0aW9uLCBzbyB5b3UgY2FuIGRvIGxvY2FsIGRpYWxpbmcgd2l0aCB0aGUgYXBwLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbGluZ1NldHRpbmdzTWVzc2EsIF9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5maXJzdExvZ2luT3RoZXIsICdQbGVhc2Ugc2VsZWN0IGluIENhbGxpbmcgc2VjdGlvbiBob3cgeW91IHdhbnQgdG8gbWFrZSB5b3VyIGNhbGwuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsaW5nU2V0dGluZ3NNZXNzYSwgX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzMi5kZWZhdWx0LnBlcm1pc3Npb25DaGFuZ2VkLCAnWW91ciBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gY2hhbmdlZCByZWNlbnRseS4gUGxlYXNlIGdvIHRvIHtsaW5rfSB0byBjaGVjayB5b3VyIENhbGxpbmcgb3B0aW9ucy4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxpbmdTZXR0aW5nc01lc3NhLCBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQucGhvbmVOdW1iZXJDaGFuZ2VkLCAnWW91ciBwaG9uZSBudW1iZXIgaW5mb3JtYXRpb24gaGFzIGJlZW4gY2hhbmdlZCByZWNlbnRseS4gUGxlYXNlIGdvIHRvIHtsaW5rfSB0byBjaGVjayB5b3VyIENhbGxpbmcgb3B0aW9ucy4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxpbmdTZXR0aW5nc01lc3NhLCAnbGluaycsICdTZXR0aW5ncyA+IENhbGxpbmcnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxpbmdTZXR0aW5nc01lc3NhLCBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQud2VicGhvbmVQZXJtaXNzaW9uUmVtb3ZlZCwgJ1lvdXIgcGVybWlzc2lvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgYW5kIHlvdSBjYW5ub3QgbWFrZSBjYWxscyB3aXRoIEJyb3dzZXIuIEZvciBkZXRhaWxzIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbGluZ1NldHRpbmdzTWVzc2EsIF9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5lbWVyZ2VuY3lDYWxsaW5nTm90QXZhaWxhYmxlLCAnRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4gSW4gYW4gZW1lcmdlbmN5LCB1c2UgeW91ciB0cmFkaXRpb25hbCB3aXJlbGluZSBvciB3aXJlbGVzcyBwaG9uZSB0byBjYWxsIGFuIGVtZXJnZW5jeSBudW1iZXIuJyksIF9jYWxsaW5nU2V0dGluZ3NNZXNzYSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsaW5nU2V0dGluZ3NBbGVydC9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA0Njdcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfdGl0bGUkY2FsbGluZ09wdGlvbnM7XG5cbnZhciBfY2FsbGluZ09wdGlvbnMgPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucycpO1xuXG52YXIgX2NhbGxpbmdPcHRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGxpbmdPcHRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKF90aXRsZSRjYWxsaW5nT3B0aW9ucyA9IHtcbiAgdGl0bGU6ICdDYWxsaW5nJ1xufSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCBfY2FsbGluZ09wdGlvbnMyLmRlZmF1bHQuc29mdHBob25lLCAne2JyYW5kfSBmb3IgRGVza3RvcCcpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfdGl0bGUkY2FsbGluZ09wdGlvbnMsIF9jYWxsaW5nT3B0aW9uczIuZGVmYXVsdC5teXBob25lLCAnTXkge2JyYW5kfSBQaG9uZScpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfdGl0bGUkY2FsbGluZ09wdGlvbnMsIF9jYWxsaW5nT3B0aW9uczIuZGVmYXVsdC5vdGhlcnBob25lLCAnT3RoZXIgUGhvbmUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCBfY2FsbGluZ09wdGlvbnMyLmRlZmF1bHQuY3VzdG9tcGhvbmUsICdDdXN0b20gUGhvbmUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCAnbWFrZUNhbGxzV2l0aCcsICdNYWtlIG15IGNhbGxzIHdpdGgnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCAncmluZ291dEhpbnQnLCAnUmluZyBtZSBhdCBteSBsb2NhdGlvbiBmaXJzdCwgdGhlbiBjb25uZWN0IHRoZSBjYWxsZWQgcGFydHknKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCAnbXlMb2NhdGlvbkxhYmVsJywgJ015IExvY2F0aW9uJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF90aXRsZSRjYWxsaW5nT3B0aW9ucywgJ3ByZXNzMVRvU3RhcnRDYWxsTGFiZWwnLCAnUHJvbXB0IG1lIHRvIGRpYWwgMSBiZWZvcmUgY29ubmVjdGluZyB0aGUgY2FsbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfdGl0bGUkY2FsbGluZ09wdGlvbnMsIF9jYWxsaW5nT3B0aW9uczIuZGVmYXVsdC5icm93c2VyLCAnQnJvd3NlcicpLCBfdGl0bGUkY2FsbGluZ09wdGlvbnMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZnJvbTogJ0Zyb20nLFxuICB0bzogJ1RvJyxcbiAgZW50ZXJOYW1lT3JOdW1iZXI6ICdFbnRlciBOdW1iZXIgb3IgTmFtZS4uLicsXG4gIHR5cGVNZXNzYWdlOiAnVHlwZSBtZXNzYWdlLi4uJyxcbiAgc2VuZDogJ1NlbmQnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ29tcG9zZVRleHRQYW5lbC9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA0ODVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzID0gcmVxdWlyZSgncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9Db25uZWN0aXZpdHlNb25pdG9yL2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcycpO1xuXG52YXIgX2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KSh7fSwgX2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlczIuZGVmYXVsdC5kaXNjb25uZWN0ZWQsICdOZXR3b3JrIGNvbm5lY3Rpb24gaXMgbG9zdC4nKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0Nvbm5lY3Rpdml0eUFsZXJ0L2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDQ5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGxvZ2dpbmc6ICdMb2dnaW5nLi4uJyxcbiAgbG9nQ2FsbDogJ0xvZyBDYWxsJyxcbiAgZWRpdExvZzogJ0VkaXQgTG9nJyxcbiAgc2VsZWN0OiAnU2VsZWN0IGEgbWF0Y2hpbmcgcmVjb3JkJyxcbiAgT25Ib2xkOiAnT24gSG9sZCcsXG4gIFJpbmdpbmc6ICdSaW5naW5nJyxcbiAgQ2FsbENvbm5lY3RlZDogJ0NhbGwgQ29ubmVjdGVkJyxcbiAgdW5rbm93blVzZXI6ICdVbmtub3duIFVzZXInLFxuICB1bmtub3duTnVtYmVyOiAnQW5vbnltb3VzJyxcbiAgdW5hdmFpbGFibGU6ICdVbmF2YWlsYWJsZScsXG4gIHZpZXdEZXRhaWxzOiAnVmlldyBEZXRhaWxzJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NvbnRhY3REaXNwbGF5L2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDUwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHNlbmQ6ICdTZW5kJyxcbiAgdHlwZU1lc3NhZ2U6ICdUeXBlIG1lc3NhZ2UuLi4nXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ29udmVyc2F0aW9uUGFuZWwvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdG86ICdUbzonXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvRGlhbFRleHRJbnB1dC9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA1MjFcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBhY2NvdW50OiAnQWNjb3VudCcsXG4gIGNvbnRhY3Q6ICdDb250YWN0JyxcbiAgbGVhZDogJ0xlYWQnLFxuICBjaG9vc2VFbnRpdHk6ICdQbGVhc2Ugc2VsZWN0IGVudGl0eSB0eXBlJyxcbiAgY3JlYXRlOiAnQ3JlYXRlJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0VudGl0eU1vZGFsL2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDUzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGV1bGE6ICdFbmQgVXNlciBMaWNlbnNlIEFncmVlbWVudCcsXG4gIHNlcnZpY2VUZXJtczogJ1NlcnZpY2UgVGVybXMnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvRXVsYS9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA1Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBsb2dpbkJ1dHRvbjogJ1NpZ24gSW4nLFxuICB2ZXJzaW9uOiAnVmVyc2lvbidcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDU1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIExvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgc2VhcmNoOiAnU2VhcmNoLi4uJyxcbiAgbm9NZXNzYWdlczogJ05vIE1lc3NhZ2VzJyxcbiAgbm9TZWFyY2hSZXN1bHRzOiAnTm8gbWF0Y2hpbmcgcmVjb3JkcyBmb3VuZCdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9NZXNzYWdlTGlzdC9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA1NTlcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfbWVzc2FnZVNlbmRlck1lc3NhZ2U7XG5cbnZhciBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzID0gcmVxdWlyZSgncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9NZXNzYWdlU2VuZGVyL21lc3NhZ2VTZW5kZXJNZXNzYWdlcycpO1xuXG52YXIgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoX21lc3NhZ2VTZW5kZXJNZXNzYWdlID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5zZW5kU3VjY2VzcywgJ1NlbmQgU3VjY2Vzcy4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LnNlbmRFcnJvciwgJ1NvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGVuIHNlbmQgbWVzc2FnZS4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm51bWJlclZhbGlkYXRlRXJyb3IsICdQaG9uZSBOdW1iZXIgVmFsaWRhdGUgRXJyb3IuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC50ZXh0RW1wdHksICdQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gYmUgc2VudC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm5vUGVybWlzc2lvbiwgJ1lvdSBoYXZlIG5vIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQuc2VuZGVyRW1wdHksICdZb3UgbXVzdCBzZWxlY3QgYSBudW1iZXIgZnJvbSB5b3VyIHBob25lIG51bWJlcnMgdG8gc2VuZCcpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQubm9Ub051bWJlciwgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHBob25lIG51bWJlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LnJlY2lwaWVudHNFbXB0eSwgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHJlY2VpdmVyIG51bWJlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LnRleHRUb29Mb25nLCAnVGV4dCBpcyB0b28gbG9uZywgMTAwMCBMaW1pdGVkJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5yZWNpcGllbnROdW1iZXJJbnZhbGlkcywgJ1JlY2lwaWVudCBudW1iZXIgaXMgaW52YWxpZHMnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm5vQXJlYUNvZGUsICdQbGVhc2Ugc2V0IHthcmVhQ29kZUxpbmt9IHRvIHVzZSA3LWRpZ2l0IGxvY2FsIHBob25lIG51bWJlcnMuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5zcGVjaWFsTnVtYmVyLCAnRGlhbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LmNvbm5lY3RGYWlsZWQsICdDb25uZWN0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LmludGVybmFsRXJyb3IsICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQubm90QW5FeHRlbnNpb24sICdUaGUgZXh0ZW5zaW9uIG51bWJlciBkb2VzIG5vdCBleGlzdC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm5ldHdvcmtFcnJvciwgJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBuZXR3b3JrIGlzc3Vlcy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm5vdFNtc1RvRXh0ZW5zaW9uLCAnQ2Fubm90IHNlbmQgVG8gYSBleHRlbnNpb24gbnVtYmVyIHdpdGggbWFpbiBwaG9uZSBudW1iZXIuIElmIHlvdSB3YW50IHRvIHNlbnQgdG8gYSBleHRlbnNpb24gTnVtYmVyLCBwbGVhc2UganVzdCBlbnRlciBleHRlbnNpb24gTnVtYmVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQuc2VuZGVyTnVtYmVySW52YWxpZHMsICdZb3UgZG9uXFwndCBoYXZlIHZhbGlkIHBob25lIG51bWJlciB0byBzZW5kIFNNUyBmcm9tLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgYWRtaW5pc3RyYXRvci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LmludGVybmF0aW9uYWxTTVNOb3RTdXBwb3J0ZWQsICdTZW5kaW5nIFNNUyB0byBpbnRlcm5hdGlvbmFsIHBob25lIG51bWJlciBpcyBub3Qgc3VwcG9ydGVkLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsICdhcmVhQ29kZScsICdhcmVhIGNvZGUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LnNlbmRlck51bWJlckludmFsaWQsICdBIHZhbGlkIFBob25lIE51bWJlciBpcyByZXF1aXJlZCB0byBzZW5kIHRleHQgbWVzc2FnZSB0byByZWNpcGllbnRzIG91dHNpZGUgb2YgeW91ciBjb21wYW55LiBQbGVhc2UgY29udGFjdCB5b3VyIEFkbWluaXN0cmF0b3IgdG8gYWRkIGEgZGlyZWN0IG51bWJlciB0byB5b3VyIGFjY291bnQuJyksIF9tZXNzYWdlU2VuZGVyTWVzc2FnZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9NZXNzYWdlU2VuZGVyQWxlcnQvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgY29uZmlybTogJ0NvbmZpcm0nXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvTW9kYWwvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgb2ZmbGluZU1vZGU6ICdPZmZsaW5lIE1vZGUnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA1ODZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByYXRlRXhjZWVkZWQ6ICdSZXF1ZXN0IGxpbWl0IGV4Y2VlZGVkLiBBcHAgd2lsbCByZXN1bWUgaW4ge3R0bH0gc2Vjb25kcy4nXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUmF0ZUV4Y2VlZGVkQWxlcnQvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgc2VsZWN0TWF0Y2hlZE5hbWU6ICdTZWxlY3QgYSBtYXRjaGluZyByZWNvcmQnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUmVjaXBpZW50SGVhZGVyL2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDYwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9yZWdpb24kcmVnaW9uU2V0dGluZztcblxudmFyIF9yZWdpb25TZXR0aW5nc01lc3NhZ2VzID0gcmVxdWlyZSgncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9SZWdpb25TZXR0aW5ncy9yZWdpb25TZXR0aW5nc01lc3NhZ2VzJyk7XG5cbnZhciBfcmVnaW9uU2V0dGluZ3NNZXNzYWdlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdpb25TZXR0aW5nc01lc3NhZ2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKF9yZWdpb24kcmVnaW9uU2V0dGluZyA9IHtcbiAgcmVnaW9uOiAnUmVnaW9uJ1xufSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3JlZ2lvbiRyZWdpb25TZXR0aW5nLCBfcmVnaW9uU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5zYXZlU3VjY2VzcywgJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3JlZ2lvbiRyZWdpb25TZXR0aW5nLCBfcmVnaW9uU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5kaWFsaW5nUGxhbnNDaGFuZ2VkLCAnVGhlIHByZXZpb3VzIHJlZ2lvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGZvciB5b3VyIGFjY291bnQuXFxuICAgIFBsZWFzZSB2ZXJpZnkgeW91ciBuZXcge3JlZ2lvblNldHRpbmdzTGlua30uJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9yZWdpb24kcmVnaW9uU2V0dGluZywgJ3JlZ2lvblNldHRpbmdzJywgJ3JlZ2lvbiBzZXR0aW5ncycpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcmVnaW9uJHJlZ2lvblNldHRpbmcsIF9yZWdpb25TZXR0aW5nc01lc3NhZ2VzMi5kZWZhdWx0LmFyZWFDb2RlSW52YWxpZCwgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFyZWEgY29kZS4nKSwgX3JlZ2lvbiRyZWdpb25TZXR0aW5nKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1JlZ2lvblNldHRpbmdzQWxlcnQvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNjE0XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdGl0bGU6ICdSZWdpb24nLFxuICBOQU9ubHlNZXNzYWdlOiAnUGxlYXNlIHNldCB5b3VyIGFyZWEgY29kZS4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcuJyxcbiAgTXVsdGlXaXRoTkFNZXNzYWdlOiAnUGxlYXNlIHNldCB0aGUgY291bnRyeSBhbmQgYXJlYSBjb2RlIGZvciB5b3VyIHJlZ2lvbi4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLicsXG4gIE11bHRpV2l0aG91dE5BTWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgdGhlIGNvdW50cnkgeW91IGxvY2F0ZSBpbi4gVGhpcyB3aWxsIGJlIHVzZWQgZm9yIGxvY2FsIGRpYWxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLicsXG4gIGNvdW50cnk6ICdDb3VudHJ5JyxcbiAgYXJlYUNvZGU6ICdBcmVhIENvZGUnLFxuICBhcmVhQ29kZVBsYWNlaG9sZGVyOiAnRW50ZXIgQXJlYSBDb2RlJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1JlZ2lvblNldHRpbmdzUGFuZWwvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX3Blcm1pc3Npb25zTWVzc2FnZXMgPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL1JvbGVzQW5kUGVybWlzc2lvbnMvcGVybWlzc2lvbnNNZXNzYWdlcycpO1xuXG52YXIgX3Blcm1pc3Npb25zTWVzc2FnZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVybWlzc2lvbnNNZXNzYWdlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKHt9LCBfcGVybWlzc2lvbnNNZXNzYWdlczIuZGVmYXVsdC5pbnZhbGlkVGllciwgJ1lvdXIgZWRpdGlvbiBkb2VzIG5vdCBzdXBwb3J0IHthcHBsaWNhdGlvbn0gaW50ZWdyYXRpb24uIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCByZXByZXNlbnRhdGl2ZSB0byB1cGdyYWRlIHlvdXIge2JyYW5kfSBlZGl0aW9uLicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tQ0EuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUm9sZXNBbmRQZXJtaXNzaW9uc0FsZXJ0L2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDYzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlZ2lvbjogJ1JlZ2lvbicsXG4gIGNhbGxpbmc6ICdDYWxsaW5nJyxcbiAgbG9nb3V0OiAnTG9nb3V0JyxcbiAgdmVyc2lvbjogJ1ZlcnNpb24nLFxuICBzZXR0aW5nczogJ1NldHRpbmdzJyxcbiAgY2xpY2tUb0RpYWw6ICdDbGljayB0byBEaWFsJyxcbiAgYXV0b0NyZWF0ZUxvZzogJ0F1dG8tY3JlYXRlIENhbGwgTG9nJyxcbiAgYXV0b0NyZWF0ZVNNU0xvZzogJ0F1dG8tY3JlYXRlIFNNUyBMb2cnLFxuICBhdXRvTG9nQ2FsbHM6ICdBdXRvIGxvZyBjYWxscycsXG4gIGF1dG9Mb2dTTVM6ICdBdXRvIGxvZyBTTVMnLFxuICBjbGlja1RvU01TOiAnQ2xpY2sgdG8gU01TJyxcbiAgY2xpY2tUb0RpYWxTTVM6ICdDbGljayB0byBEaWFsL1NNUydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9TZXR0aW5nc1BhbmVsL2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDY0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF93ZWJwaG9uZUVycm9ycyRjb25uZTtcblxudmFyIF93ZWJwaG9uZUVycm9ycyA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvV2VicGhvbmUvd2VicGhvbmVFcnJvcnMnKTtcblxudmFyIF93ZWJwaG9uZUVycm9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93ZWJwaG9uZUVycm9ycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChfd2VicGhvbmVFcnJvcnMkY29ubmUgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQuY29ubmVjdEZhaWxlZCwgJ1NlbmQgU3VjY2Vzcy4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQuYnJvd3Nlck5vdFN1cHBvcnRlZCwgJ0NhbGxpbmcgd2l0aCBicm93c2VyIGlzIG9ubHkgc3VwcG9ydGVkIG9uIENocm9tZS4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQud2VicGhvbmVDb3VudE92ZXJMaW1pdCwgJ0EgbWF4aW11bSBvZiA1IHdlYiBwaG9uZXMgY291bGQgYmUgcmVnaXN0ZXJlZC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQubm90T3V0Ym91bmRDYWxsV2l0aG91dERMLCAnWW91ciBleHRlbnNpb24gaXMgbm90IGFsbG93ZWQgdG8gbWFrZSBvdXRib3VuZCBjYWxscyB3aXRoIGJyb3dzZXIgY3VycmVudGx5LCBwbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgZm9yIGFuIHVwZ3JhZGUuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF93ZWJwaG9uZUVycm9ycyRjb25uZSwgX3dlYnBob25lRXJyb3JzMi5kZWZhdWx0LmdldFNpcFByb3Zpc2lvbkVycm9yLCAnWW91IGhhdmUgbm8gcGVybWlzc2lvbiB0byBzZW5kIG1lc3NhZ2UuJyksIF93ZWJwaG9uZUVycm9ycyRjb25uZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vZW4tQ0EuanNcbi8vIG1vZHVsZSBpZCA9IDY1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHRpdGxlOiAnSGlzdG9yeSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdGl0bGU6ICdDYWxscydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29udGFpbmVycy9DYWxsTW9uaXRvclBhZ2UvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNjcxXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdGl0bGU6ICdNZXNzYWdlcydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29udGFpbmVycy9NZXNzYWdlc1BhZ2UvaTE4bi9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgQVI6ICdBcmdlbnRpbmEnLFxuICBBVDogJ0F1c3RyaWEnLFxuICBCSDogJ0JhaHJhaW4nLFxuICBCUjogJ0JyYXppbCcsXG4gIEJHOiAnQnVsZ2FyaWEnLFxuICBDQTogJ0NhbmFkYScsXG4gIENMOiAnQ2hpbGUnLFxuICBDTjogJ0NoaW5hJyxcbiAgSFI6ICdDcm9hdGlhJyxcbiAgQ1k6ICdDeXBydXMnLFxuICBDWjogJ0N6ZWNoIFJlcHVibGljJyxcbiAgREs6ICdEZW5tYXJrJyxcbiAgRE86ICdEb21pbmljYW4gUmVwdWJsaWMnLFxuICBFRTogJ0VzdG9uaWEnLFxuICBGSTogJ0ZpbmxhbmQnLFxuICBGUjogJ0ZyYW5jZScsXG4gIERFOiAnR2VybWFueScsXG4gIEhLOiAnSG9uZyBLb25nJyxcbiAgSFU6ICdIdW5nYXJ5JyxcbiAgSUU6ICdJcmVsYW5kJyxcbiAgSUw6ICdJc3JhZWwnLFxuICBJTjogJ0luZGlhJyxcbiAgSVQ6ICdJdGFseScsXG4gIEpQOiAnSmFwYW4nLFxuICBMVjogJ0xhdHZpYScsXG4gIExUOiAnTGl0aHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJvdXJnJyxcbiAgTVk6ICdNYWxheXNpYScsXG4gIE1YOiAnTWV4aWNvJyxcbiAgTkw6ICdOZXRoZXJsYW5kcycsXG4gIE5POiAnTm9yd2F5JyxcbiAgUEE6ICdQYW5hbWEnLFxuICBQSDogJ1BoaWxpcHBpbmVzJyxcbiAgUEw6ICdQb2xhbmQnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUk86ICdSb21hbmlhJyxcbiAgU0s6ICdTbG92YWtpYScsXG4gIFNJOiAnU2xvdmVuaWEnLFxuICBFUzogJ1NwYWluJyxcbiAgU0U6ICdTd2VkZW4nLFxuICBDSDogJ1N3aXR6ZXJsYW5kJyxcbiAgVFI6ICdUdXJrZXknLFxuICBHQjogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgQVU6ICdBdXN0cmFsaWEnLFxuICBHRTogJ0dlb3JnaWEnLFxuICBJRDogJ0luZG9uZXNpYScsXG4gIEtFOiAnS2VueWEnLFxuICBORzogJ05pZ2VyaWEnLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgWkE6ICdTb3V0aCBBZnJpY2EnLFxuICBLUjogJ1NvdXRoIEtvcmVhJyxcbiAgU0c6ICdTaW5nYXBvcmUnLFxuICBUVzogJ1RhaXdhbicsXG4gIFVBOiAnVWtyYWluZScsXG4gIFVTOiAnVW5pdGVkIFN0YXRlcycsXG4gIFZOOiAnVmlldG5hbScsXG4gIEJFOiAnQmVsZ2l1bScsXG4gIEJKOiAnQmVuaW4nLFxuICBTVjogJ0VsIFNhbHZhZG9yJyxcbiAgR0g6ICdHaGFuYScsXG4gIEdSOiAnR3JlZWNlJyxcbiAgR046ICdHdWluZWEnLFxuICBOWjogJ05ldyBaZWFsYW5kJyxcbiAgUEU6ICdQZXJ1JyxcbiAgUFI6ICdQdWVydG8gUmljbydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvbGliL2NvdW50cnlOYW1lcy9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNjkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX3Bob25lU291cmNlcyRhY2NvdW50O1xuXG52YXIgX3Bob25lU291cmNlcyA9IHJlcXVpcmUoJy4uLy4uL2VudW1zL3Bob25lU291cmNlcycpO1xuXG52YXIgX3Bob25lU291cmNlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waG9uZVNvdXJjZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoX3Bob25lU291cmNlcyRhY2NvdW50ID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9waG9uZVNvdXJjZXMkYWNjb3VudCwgX3Bob25lU291cmNlczIuZGVmYXVsdC5hY2NvdW50LCAnQWNjb3VudCcpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVTb3VyY2VzJGFjY291bnQsIF9waG9uZVNvdXJjZXMyLmRlZmF1bHQuY29udGFjdCwgJ0NvbnRhY3QnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Bob25lU291cmNlcyRhY2NvdW50LCBfcGhvbmVTb3VyY2VzMi5kZWZhdWx0LmxlYWQsICdMZWFkJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9waG9uZVNvdXJjZXMkYWNjb3VudCwgX3Bob25lU291cmNlczIuZGVmYXVsdC5vcHBvcnR1bml0eSwgJ09wcG9ydHVuaXR5JyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9waG9uZVNvdXJjZXMkYWNjb3VudCwgX3Bob25lU291cmNlczIuZGVmYXVsdC5zeXN0ZW1Vc2VyLCAnU3lzdGVtIFVzZXInKSwgX3Bob25lU291cmNlcyRhY2NvdW50KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUNBLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9saWIvcGhvbmVTb3VyY2VOYW1lcy9lbi1DQS5qc1xuLy8gbW9kdWxlIGlkID0gNjk5XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX3Bob25lVHlwZXMkYnVzaW5lc3MkO1xuXG52YXIgX3Bob25lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9lbnVtcy9waG9uZVR5cGVzJyk7XG5cbnZhciBfcGhvbmVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waG9uZVR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKF9waG9uZVR5cGVzJGJ1c2luZXNzJCA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVUeXBlcyRidXNpbmVzcyQsIF9waG9uZVR5cGVzMi5kZWZhdWx0LmJ1c2luZXNzLCAnQnVzaW5lc3MgUGhvbmUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Bob25lVHlwZXMkYnVzaW5lc3MkLCBfcGhvbmVUeXBlczIuZGVmYXVsdC5leHRlbnNpb24sICdFeHRlbnNpb24gUGhvbmUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Bob25lVHlwZXMkYnVzaW5lc3MkLCBfcGhvbmVUeXBlczIuZGVmYXVsdC5ob21lLCAnSG9tZSBQaG9uZScpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVUeXBlcyRidXNpbmVzcyQsIF9waG9uZVR5cGVzMi5kZWZhdWx0Lm1vYmlsZSwgJ01vYmlsZSBQaG9uZScpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVUeXBlcyRidXNpbmVzcyQsIF9waG9uZVR5cGVzMi5kZWZhdWx0LnBob25lLCAnUGhvbmUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Bob25lVHlwZXMkYnVzaW5lc3MkLCBfcGhvbmVUeXBlczIuZGVmYXVsdC51bmtub3duLCAnVW5rbm93biBQaG9uZSBUeXBlJyksIF9waG9uZVR5cGVzJGJ1c2luZXNzJCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1DQS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvbGliL3Bob25lVHlwZU5hbWVzL2VuLUNBLmpzXG4vLyBtb2R1bGUgaWQgPSA3MDhcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==