webpackJsonp([6],{

/***/ 1616:
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

/***/ 1617:
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

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _authMessages$interna;

var _authMessages = __webpack_require__(163);

var _authMessages2 = _interopRequireDefault(_authMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_authMessages$interna = {}, (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.internalError, 'Login failed due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.accessDenied, 'Access denied. Please contact support.'), (0, _defineProperty3.default)(_authMessages$interna, _authMessages2.default.sessionExpired, 'Session expired. Please sign in.'), _authMessages$interna);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callErrors$noToNumbe;

var _callErrors = __webpack_require__(164);

var _callErrors2 = _interopRequireDefault(_callErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callErrors$noToNumbe = {}, (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.specialNumber, 'Dialling emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, _callErrors2.default.noRingoutEnable, 'Your extension is allowed to make calls with desktop app.\n    If you wish to switch to other calling options,\n    please contact your account administrator for an upgrade.'), (0, _defineProperty3.default)(_callErrors$noToNumbe, 'areaCode', 'area code'), _callErrors$noToNumbe);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 447:
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
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 456:
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
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  noActiveCalls: 'No active calls',
  noRecords: 'No records'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callingSettingsMessa;

var _callingSettingsMessages = __webpack_require__(239);

var _callingSettingsMessages2 = _interopRequireDefault(_callingSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_callingSettingsMessa = {}, (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.saveSuccessWithSoftphone, 'Settings saved successfully. Please make sure you have {brand} for Desktop installed on your computer.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLogin, 'Please select in the Calling section how you want to make your call. If you let us know your location by specifying the country and area code (if available) in the Region section, you can do local dialling with the app.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.firstLoginOther, 'Please select in the Calling section how you want to make your call.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.permissionChanged, 'Your permissions have been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.phoneNumberChanged, 'Your phone number information has been changed recently. Please go to {link} to check your Calling options.'), (0, _defineProperty3.default)(_callingSettingsMessa, 'link', 'Settings > Calling'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.webphonePermissionRemoved, 'Your permissions have been changed and you cannot make calls with your browser. For details, please contact your account administrator.'), (0, _defineProperty3.default)(_callingSettingsMessa, _callingSettingsMessages2.default.emergencyCallingNotAvailable, 'Dialling emergency or special service numbers is not supported. In an emergency, use your traditional wireline or wireless phone to call an emergency number.'), _callingSettingsMessa);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _title$callingOptions;

var _callingOptions = __webpack_require__(165);

var _callingOptions2 = _interopRequireDefault(_callingOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_title$callingOptions = {
  title: 'Calling'
}, (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.softphone, '{brand} for Desktop'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.myphone, 'My {brand} Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.otherphone, 'Other Phone'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.customphone, 'Custom Phone'), (0, _defineProperty3.default)(_title$callingOptions, 'makeCallsWith', 'Make my calls using'), (0, _defineProperty3.default)(_title$callingOptions, 'ringoutHint', 'Ring me at my location first, then connect the called party'), (0, _defineProperty3.default)(_title$callingOptions, 'myLocationLabel', 'My Location'), (0, _defineProperty3.default)(_title$callingOptions, 'press1ToStartCallLabel', 'Prompt me to dial 1 before connecting the call'), (0, _defineProperty3.default)(_title$callingOptions, _callingOptions2.default.browser, 'Browser'), _title$callingOptions);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  from: 'From',
  to: 'To',
  enterNameOrNumber: 'Enter Number or Name',
  typeMessage: 'Type message...',
  send: 'Send'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _connectivityMonitorMessages = __webpack_require__(240);

var _connectivityMonitorMessages2 = _interopRequireDefault(_connectivityMonitorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _connectivityMonitorMessages2.default.disconnected, 'Network connection is lost.');
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 510:
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
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  send: 'Send',
  typeMessage: 'Type message...'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  to: 'To:'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 537:
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
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eula: 'End User Licence Agreement',
  serviceTerms: 'Service Terms'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  loginButton: 'Sign In',
  version: 'Version'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Loading: 'Loading...',
  search: 'Search...',
  noMessages: 'No messages',
  noSearchResults: 'No matching records found'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageSenderMessage;

var _messageSenderMessages = __webpack_require__(127);

var _messageSenderMessages2 = _interopRequireDefault(_messageSenderMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Send Success.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Something went wrong with sending the message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Phone Number Validation Error.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Please enter the text to be sent.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'You do not have permission to send messages.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'You must select a number from your phone numbers to send'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Please enter a valid phone number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Please enter a valid receiver number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'Text is too long, 1000 limit'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Recipient number is invalid'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Please set {areaCodeLink} to use 7-digit local phone numbers.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'Dialling emergency or special service numbers is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Connection failed. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Cannot connect due to internal errors. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'The extension number does not exist.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Cannot connect due to network issues. Please try again later.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Cannot send to an extension number with main phone number. If you want to sent to a extension number, please just enter the extension number.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalids, 'You don\'t have valid phone number to send SMS from. Please contact your account administrator.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Sending SMS to international phone numbers is not supported.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'area code'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'A valid Phone Number is required to send text messages to recipients outside of your company. Please contact your Administrator to add a direct number to your account.'), _messageSenderMessage);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  cancel: 'Cancel',
  confirm: 'Confirm'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  offlineMode: 'Offline Mode'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rateExceeded: 'Request limit exceeded. App will resume in {ttl} seconds.'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  selectMatchedName: 'Select a matching record'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _region$regionSetting;

var _regionSettingsMessages = __webpack_require__(241);

var _regionSettingsMessages2 = _interopRequireDefault(_regionSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_region$regionSetting = {
  region: 'Region'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Settings saved successfully.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'The previous region is no longer supported for your account.\n    Please verify your new {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'region settings'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Please enter a valid area code.'), _region$regionSetting);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Region',
  NAOnlyMessage: 'Please set your area code. This will be used for local dialling.',
  MultiWithNAMessage: 'Please set the country and area code for your region. This will be used for local dialling and phone number formatting.',
  MultiWithoutNAMessage: 'Please select which country you are located in. This will be used for local dialling and phone number formatting.',
  country: 'Country',
  areaCode: 'Area Code',
  areaCodePlaceholder: 'Enter Area Code'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _permissionsMessages = __webpack_require__(242);

var _permissionsMessages2 = _interopRequireDefault(_permissionsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _permissionsMessages2.default.invalidTier, 'Your edition does not support {application} integration. Please contact your account representative to upgrade your {brand} edition.');
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  region: 'Region',
  calling: 'Calling',
  logout: 'Log out',
  version: 'Version',
  settings: 'Settings',
  clickToDial: 'Click to Dial',
  autoCreateLog: 'Auto-create Call Log',
  clickToSMS: 'Click to SMS',
  clickToDialSMS: 'Click to Dial/SMS',
  autoCreateSMSLog: 'Auto-create SMS log',
  autoLogCalls: 'Auto log calls',
  autoLogSMS: 'Auto log SMS'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _webphoneErrors$conne;

var _webphoneErrors = __webpack_require__(243);

var _webphoneErrors2 = _interopRequireDefault(_webphoneErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, 'Send success.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, 'Calling with browser is only supported on Chrome.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, 'A maximum of 5 web phones could be registered.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, 'Your extension is currently not allowed to make outbound calls with browser. Please contact your account representative for an upgrade.'), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, 'You do not have permission to send messages.'), _webphoneErrors$conne);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'History'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Calls'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Messages'
};
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 697:
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
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneSources$account;

var _phoneSources = __webpack_require__(1616);

var _phoneSources2 = _interopRequireDefault(_phoneSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneSources$account = {}, (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.account, 'Account'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.contact, 'Contact'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.lead, 'Lead'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.opportunity, 'Opportunity'), (0, _defineProperty3.default)(_phoneSources$account, _phoneSources2.default.systemUser, 'System User'), _phoneSources$account);
//# sourceMappingURL=en-GB.js.map


/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(105);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _phoneTypes$business$;

var _phoneTypes = __webpack_require__(1617);

var _phoneTypes2 = _interopRequireDefault(_phoneTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_phoneTypes$business$ = {}, (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.business, 'Business Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.extension, 'Extension Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.home, 'Home Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.mobile, 'Mobile Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.phone, 'Phone'), (0, _defineProperty3.default)(_phoneTypes$business$, _phoneTypes2.default.unknown, 'Unknown Phone Type'), _phoneTypes$business$);
//# sourceMappingURL=en-GB.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9lbnVtcy9waG9uZVNvdXJjZXMuanM/ZTcxNyoqKioqIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2VudW1zL3Bob25lVHlwZXMuanM/MGUzYioqKioqIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsQWxlcnQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxJZFNlbGVjdC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ2FsbEl0ZW0vaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxMaXN0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsaW5nU2V0dGluZ3NBbGVydC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ2FsbGluZ1NldHRpbmdzUGFuZWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0Nvbm5lY3Rpdml0eUFsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQ29udmVyc2F0aW9uUGFuZWwvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0RpYWxUZXh0SW5wdXQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0VudGl0eU1vZGFsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9FdWxhL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Mb2dpblBhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9NZXNzYWdlTGlzdC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Nb2RhbC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvT2ZmbGluZU1vZGVCYWRnZS9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUmF0ZUV4Y2VlZGVkQWxlcnQvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1JlY2lwaWVudEhlYWRlci9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NBbGVydC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUm9sZXNBbmRQZXJtaXNzaW9uc0FsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9TZXR0aW5nc1BhbmVsL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9XZWJwaG9uZUFsZXJ0L2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29udGFpbmVycy9DYWxsSGlzdG9yeVBhZ2UvaTE4bi9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb250YWluZXJzL0NhbGxNb25pdG9yUGFnZS9pMThuL2VuLUdCLmpzIiwid2VicGFjazovLy8uL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbnRhaW5lcnMvTWVzc2FnZXNQYWdlL2kxOG4vZW4tR0IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yaW5nY2VudHJhbC13aWRnZXQvbGliL2NvdW50cnlOYW1lcy9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9saWIvcGhvbmVTb3VyY2VOYW1lcy9lbi1HQi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpbmdjZW50cmFsLXdpZGdldC9saWIvcGhvbmVUeXBlTmFtZXMvZW4tR0IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7Ozs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsNkNBQTZDO0FBQzdDOzs7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDZDQUE2QztBQUM3QyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0VudW0gPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bScpO1xuXG52YXIgX0VudW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW51bSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBfRW51bTIuZGVmYXVsdChbJ2FjY291bnQnLCAnY29udGFjdCcsICdsZWFkJywgJ29wcG9ydHVuaXR5JywgJ3N5c3RlbVVzZXInXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waG9uZVNvdXJjZXMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2VudW1zL3Bob25lU291cmNlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTYxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0VudW0gPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9saWIvRW51bScpO1xuXG52YXIgX0VudW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW51bSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBfRW51bTIuZGVmYXVsdChbJ2J1c2luZXNzJywgJ2V4dGVuc2lvbicsICdob21lJywgJ21vYmlsZScsICdwaG9uZScsICd1bmtub3duJ10pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGhvbmVUeXBlcy5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvZW51bXMvcGhvbmVUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTYxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfYXV0aE1lc3NhZ2VzJGludGVybmE7XG5cbnZhciBfYXV0aE1lc3NhZ2VzID0gcmVxdWlyZSgncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9BdXRoL2F1dGhNZXNzYWdlcycpO1xuXG52YXIgX2F1dGhNZXNzYWdlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRoTWVzc2FnZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoX2F1dGhNZXNzYWdlcyRpbnRlcm5hID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9hdXRoTWVzc2FnZXMkaW50ZXJuYSwgX2F1dGhNZXNzYWdlczIuZGVmYXVsdC5pbnRlcm5hbEVycm9yLCAnTG9naW4gZmFpbGVkIGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9hdXRoTWVzc2FnZXMkaW50ZXJuYSwgX2F1dGhNZXNzYWdlczIuZGVmYXVsdC5hY2Nlc3NEZW5pZWQsICdBY2Nlc3MgZGVuaWVkLiBQbGVhc2UgY29udGFjdCBzdXBwb3J0LicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfYXV0aE1lc3NhZ2VzJGludGVybmEsIF9hdXRoTWVzc2FnZXMyLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZWQsICdTZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBzaWduIGluLicpLCBfYXV0aE1lc3NhZ2VzJGludGVybmEpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tR0IuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvQXV0aEFsZXJ0L2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDQyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9jYWxsRXJyb3JzJG5vVG9OdW1iZTtcblxudmFyIF9jYWxsRXJyb3JzID0gcmVxdWlyZSgncmluZ2NlbnRyYWwtaW50ZWdyYXRpb24vbW9kdWxlcy9DYWxsL2NhbGxFcnJvcnMnKTtcblxudmFyIF9jYWxsRXJyb3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGxFcnJvcnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoX2NhbGxFcnJvcnMkbm9Ub051bWJlID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsRXJyb3JzJG5vVG9OdW1iZSwgX2NhbGxFcnJvcnMyLmRlZmF1bHQubm9Ub051bWJlciwgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHBob25lIG51bWJlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxFcnJvcnMkbm9Ub051bWJlLCBfY2FsbEVycm9yczIuZGVmYXVsdC5ub0FyZWFDb2RlLCAnUGxlYXNlIHNldCB7YXJlYUNvZGVMaW5rfSB0byB1c2UgNy1kaWdpdCBsb2NhbCBwaG9uZSBudW1iZXJzLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbEVycm9ycyRub1RvTnVtYmUsIF9jYWxsRXJyb3JzMi5kZWZhdWx0LnNwZWNpYWxOdW1iZXIsICdEaWFsbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxFcnJvcnMkbm9Ub051bWJlLCBfY2FsbEVycm9yczIuZGVmYXVsdC5jb25uZWN0RmFpbGVkLCAnQ29ubmVjdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsRXJyb3JzJG5vVG9OdW1iZSwgX2NhbGxFcnJvcnMyLmRlZmF1bHQuaW50ZXJuYWxFcnJvciwgJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBpbnRlcm5hbCBlcnJvcnMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsRXJyb3JzJG5vVG9OdW1iZSwgX2NhbGxFcnJvcnMyLmRlZmF1bHQubm90QW5FeHRlbnNpb24sICdUaGUgZXh0ZW5zaW9uIG51bWJlciBkb2VzIG5vdCBleGlzdC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxFcnJvcnMkbm9Ub051bWJlLCBfY2FsbEVycm9yczIuZGVmYXVsdC5uZXR3b3JrRXJyb3IsICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gbmV0d29yayBpc3N1ZXMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsRXJyb3JzJG5vVG9OdW1iZSwgX2NhbGxFcnJvcnMyLmRlZmF1bHQubm9SaW5nb3V0RW5hYmxlLCAnWW91ciBleHRlbnNpb24gaXMgYWxsb3dlZCB0byBtYWtlIGNhbGxzIHdpdGggZGVza3RvcCBhcHAuXFxuICAgIElmIHlvdSB3aXNoIHRvIHN3aXRjaCB0byBvdGhlciBjYWxsaW5nIG9wdGlvbnMsXFxuICAgIHBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yIGZvciBhbiB1cGdyYWRlLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbEVycm9ycyRub1RvTnVtYmUsICdhcmVhQ29kZScsICdhcmVhIGNvZGUnKSwgX2NhbGxFcnJvcnMkbm9Ub051bWJlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxBbGVydC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA0Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBEaXJlY3ROdW1iZXI6ICdEaXJlY3QnLFxuICBNYWluQ29tcGFueU51bWJlcjogJ01haW4nLFxuICBDb21wYW55TnVtYmVyOiAnQ29tcGFueScsXG4gIENvbXBhbnlGYXhOdW1iZXI6ICdGYXgnLFxuICBCbG9ja2VkOiAnQmxvY2tlZCcsXG4gIGZyb206ICdGcm9tJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxJZFNlbGVjdC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBsb2dnaW5nOiAnTG9nZ2luZy4uLicsXG4gIGxvZ0NhbGw6ICdMb2cgQ2FsbCcsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHNlbGVjdDogJ1NlbGVjdCBhIG1hdGNoaW5nIHJlY29yZCcsXG4gIE9uSG9sZDogJ09uIEhvbGQnLFxuICBSaW5naW5nOiAnUmluZ2luZycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDYWxsIENvbm5lY3RlZCcsXG4gIHVua25vd25Vc2VyOiAnVW5rbm93biBVc2VyJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub255bW91cycsXG4gIHVuYXZhaWxhYmxlOiAnVW5hdmFpbGFibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsSXRlbS9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA0NTZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBub0FjdGl2ZUNhbGxzOiAnTm8gYWN0aXZlIGNhbGxzJyxcbiAgbm9SZWNvcmRzOiAnTm8gcmVjb3Jkcydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsTGlzdC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA0NjVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfY2FsbGluZ1NldHRpbmdzTWVzc2E7XG5cbnZhciBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMgPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlcycpO1xuXG52YXIgX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKF9jYWxsaW5nU2V0dGluZ3NNZXNzYSA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbGluZ1NldHRpbmdzTWVzc2EsIF9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5zYXZlU3VjY2VzcywgJ1NldHRpbmdzIHNhdmVkIHN1Y2Nlc3NmdWxseS4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxpbmdTZXR0aW5nc01lc3NhLCBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQuc2F2ZVN1Y2Nlc3NXaXRoU29mdHBob25lLCAnU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgbWFrZSBzdXJlIHlvdSBoYXZlIHticmFuZH0gZm9yIERlc2t0b3AgaW5zdGFsbGVkIG9uIHlvdXIgY29tcHV0ZXIuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsaW5nU2V0dGluZ3NNZXNzYSwgX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzMi5kZWZhdWx0LmZpcnN0TG9naW4sICdQbGVhc2Ugc2VsZWN0IGluIHRoZSBDYWxsaW5nIHNlY3Rpb24gaG93IHlvdSB3YW50IHRvIG1ha2UgeW91ciBjYWxsLiBJZiB5b3UgbGV0IHVzIGtub3cgeW91ciBsb2NhdGlvbiBieSBzcGVjaWZ5aW5nIHRoZSBjb3VudHJ5IGFuZCBhcmVhIGNvZGUgKGlmIGF2YWlsYWJsZSkgaW4gdGhlIFJlZ2lvbiBzZWN0aW9uLCB5b3UgY2FuIGRvIGxvY2FsIGRpYWxsaW5nIHdpdGggdGhlIGFwcC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxpbmdTZXR0aW5nc01lc3NhLCBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQuZmlyc3RMb2dpbk90aGVyLCAnUGxlYXNlIHNlbGVjdCBpbiB0aGUgQ2FsbGluZyBzZWN0aW9uIGhvdyB5b3Ugd2FudCB0byBtYWtlIHlvdXIgY2FsbC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NhbGxpbmdTZXR0aW5nc01lc3NhLCBfY2FsbGluZ1NldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQucGVybWlzc2lvbkNoYW5nZWQsICdZb3VyIHBlcm1pc3Npb25zIGhhdmUgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbGluZ1NldHRpbmdzTWVzc2EsIF9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5waG9uZU51bWJlckNoYW5nZWQsICdZb3VyIHBob25lIG51bWJlciBpbmZvcm1hdGlvbiBoYXMgYmVlbiBjaGFuZ2VkIHJlY2VudGx5LiBQbGVhc2UgZ28gdG8ge2xpbmt9IHRvIGNoZWNrIHlvdXIgQ2FsbGluZyBvcHRpb25zLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbGluZ1NldHRpbmdzTWVzc2EsICdsaW5rJywgJ1NldHRpbmdzID4gQ2FsbGluZycpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2FsbGluZ1NldHRpbmdzTWVzc2EsIF9jYWxsaW5nU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC53ZWJwaG9uZVBlcm1pc3Npb25SZW1vdmVkLCAnWW91ciBwZXJtaXNzaW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBhbmQgeW91IGNhbm5vdCBtYWtlIGNhbGxzIHdpdGggeW91ciBicm93c2VyLiBGb3IgZGV0YWlscywgcGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IGFkbWluaXN0cmF0b3IuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jYWxsaW5nU2V0dGluZ3NNZXNzYSwgX2NhbGxpbmdTZXR0aW5nc01lc3NhZ2VzMi5kZWZhdWx0LmVtZXJnZW5jeUNhbGxpbmdOb3RBdmFpbGFibGUsICdEaWFsbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4gSW4gYW4gZW1lcmdlbmN5LCB1c2UgeW91ciB0cmFkaXRpb25hbCB3aXJlbGluZSBvciB3aXJlbGVzcyBwaG9uZSB0byBjYWxsIGFuIGVtZXJnZW5jeSBudW1iZXIuJyksIF9jYWxsaW5nU2V0dGluZ3NNZXNzYSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9DYWxsaW5nU2V0dGluZ3NBbGVydC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA0NzRcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfdGl0bGUkY2FsbGluZ09wdGlvbnM7XG5cbnZhciBfY2FsbGluZ09wdGlvbnMgPSByZXF1aXJlKCdyaW5nY2VudHJhbC1pbnRlZ3JhdGlvbi9tb2R1bGVzL0NhbGxpbmdTZXR0aW5ncy9jYWxsaW5nT3B0aW9ucycpO1xuXG52YXIgX2NhbGxpbmdPcHRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGxpbmdPcHRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKF90aXRsZSRjYWxsaW5nT3B0aW9ucyA9IHtcbiAgdGl0bGU6ICdDYWxsaW5nJ1xufSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCBfY2FsbGluZ09wdGlvbnMyLmRlZmF1bHQuc29mdHBob25lLCAne2JyYW5kfSBmb3IgRGVza3RvcCcpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfdGl0bGUkY2FsbGluZ09wdGlvbnMsIF9jYWxsaW5nT3B0aW9uczIuZGVmYXVsdC5teXBob25lLCAnTXkge2JyYW5kfSBQaG9uZScpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfdGl0bGUkY2FsbGluZ09wdGlvbnMsIF9jYWxsaW5nT3B0aW9uczIuZGVmYXVsdC5vdGhlcnBob25lLCAnT3RoZXIgUGhvbmUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCBfY2FsbGluZ09wdGlvbnMyLmRlZmF1bHQuY3VzdG9tcGhvbmUsICdDdXN0b20gUGhvbmUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCAnbWFrZUNhbGxzV2l0aCcsICdNYWtlIG15IGNhbGxzIHVzaW5nJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF90aXRsZSRjYWxsaW5nT3B0aW9ucywgJ3JpbmdvdXRIaW50JywgJ1JpbmcgbWUgYXQgbXkgbG9jYXRpb24gZmlyc3QsIHRoZW4gY29ubmVjdCB0aGUgY2FsbGVkIHBhcnR5JyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF90aXRsZSRjYWxsaW5nT3B0aW9ucywgJ215TG9jYXRpb25MYWJlbCcsICdNeSBMb2NhdGlvbicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfdGl0bGUkY2FsbGluZ09wdGlvbnMsICdwcmVzczFUb1N0YXJ0Q2FsbExhYmVsJywgJ1Byb21wdCBtZSB0byBkaWFsIDEgYmVmb3JlIGNvbm5lY3RpbmcgdGhlIGNhbGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3RpdGxlJGNhbGxpbmdPcHRpb25zLCBfY2FsbGluZ09wdGlvbnMyLmRlZmF1bHQuYnJvd3NlciwgJ0Jyb3dzZXInKSwgX3RpdGxlJGNhbGxpbmdPcHRpb25zKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NhbGxpbmdTZXR0aW5nc1BhbmVsL2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDQ4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZyb206ICdGcm9tJyxcbiAgdG86ICdUbycsXG4gIGVudGVyTmFtZU9yTnVtYmVyOiAnRW50ZXIgTnVtYmVyIG9yIE5hbWUnLFxuICB0eXBlTWVzc2FnZTogJ1R5cGUgbWVzc2FnZS4uLicsXG4gIHNlbmQ6ICdTZW5kJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NvbXBvc2VUZXh0UGFuZWwvaTE4bi9lbi1HQi5qc1xuLy8gbW9kdWxlIGlkID0gNDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX2Nvbm5lY3Rpdml0eU1vbml0b3JNZXNzYWdlcyA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvQ29ubmVjdGl2aXR5TW9uaXRvci9jb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMnKTtcblxudmFyIF9jb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29ubmVjdGl2aXR5TW9uaXRvck1lc3NhZ2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoe30sIF9jb25uZWN0aXZpdHlNb25pdG9yTWVzc2FnZXMyLmRlZmF1bHQuZGlzY29ubmVjdGVkLCAnTmV0d29yayBjb25uZWN0aW9uIGlzIGxvc3QuJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Db25uZWN0aXZpdHlBbGVydC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBsb2dnaW5nOiAnTG9nZ2luZy4uLicsXG4gIGxvZ0NhbGw6ICdMb2cgQ2FsbCcsXG4gIGVkaXRMb2c6ICdFZGl0IExvZycsXG4gIHNlbGVjdDogJ1NlbGVjdCBhIG1hdGNoaW5nIHJlY29yZCcsXG4gIE9uSG9sZDogJ09uIEhvbGQnLFxuICBSaW5naW5nOiAnUmluZ2luZycsXG4gIENhbGxDb25uZWN0ZWQ6ICdDYWxsIENvbm5lY3RlZCcsXG4gIHVua25vd25Vc2VyOiAnVW5rbm93biBVc2VyJyxcbiAgdW5rbm93bk51bWJlcjogJ0Fub255bW91cycsXG4gIHVuYXZhaWxhYmxlOiAnVW5hdmFpbGFibGUnLFxuICB2aWV3RGV0YWlsczogJ1ZpZXcgRGV0YWlscydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Db250YWN0RGlzcGxheS9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA1MTBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzZW5kOiAnU2VuZCcsXG4gIHR5cGVNZXNzYWdlOiAnVHlwZSBtZXNzYWdlLi4uJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0NvbnZlcnNhdGlvblBhbmVsL2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDUxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHRvOiAnVG86J1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0RpYWxUZXh0SW5wdXQvaTE4bi9lbi1HQi5qc1xuLy8gbW9kdWxlIGlkID0gNTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYWNjb3VudDogJ0FjY291bnQnLFxuICBjb250YWN0OiAnQ29udGFjdCcsXG4gIGxlYWQ6ICdMZWFkJyxcbiAgY2hvb3NlRW50aXR5OiAnUGxlYXNlIHNlbGVjdCBlbnRpdHkgdHlwZScsXG4gIGNyZWF0ZTogJ0NyZWF0ZSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9FbnRpdHlNb2RhbC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA1Mzdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBldWxhOiAnRW5kIFVzZXIgTGljZW5jZSBBZ3JlZW1lbnQnLFxuICBzZXJ2aWNlVGVybXM6ICdTZXJ2aWNlIFRlcm1zJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL0V1bGEvaTE4bi9lbi1HQi5qc1xuLy8gbW9kdWxlIGlkID0gNTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgbG9naW5CdXR0b246ICdTaWduIEluJyxcbiAgdmVyc2lvbjogJ1ZlcnNpb24nXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tR0IuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvTG9naW5QYW5lbC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA1NTdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBMb2FkaW5nOiAnTG9hZGluZy4uLicsXG4gIHNlYXJjaDogJ1NlYXJjaC4uLicsXG4gIG5vTWVzc2FnZXM6ICdObyBtZXNzYWdlcycsXG4gIG5vU2VhcmNoUmVzdWx0czogJ05vIG1hdGNoaW5nIHJlY29yZHMgZm91bmQnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tR0IuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvTWVzc2FnZUxpc3QvaTE4bi9lbi1HQi5qc1xuLy8gbW9kdWxlIGlkID0gNTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX21lc3NhZ2VTZW5kZXJNZXNzYWdlO1xuXG52YXIgX21lc3NhZ2VTZW5kZXJNZXNzYWdlcyA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvTWVzc2FnZVNlbmRlci9tZXNzYWdlU2VuZGVyTWVzc2FnZXMnKTtcblxudmFyIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVzc2FnZVNlbmRlck1lc3NhZ2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQuc2VuZFN1Y2Nlc3MsICdTZW5kIFN1Y2Nlc3MuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5zZW5kRXJyb3IsICdTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHNlbmRpbmcgdGhlIG1lc3NhZ2UuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5udW1iZXJWYWxpZGF0ZUVycm9yLCAnUGhvbmUgTnVtYmVyIFZhbGlkYXRpb24gRXJyb3IuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC50ZXh0RW1wdHksICdQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gYmUgc2VudC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm5vUGVybWlzc2lvbiwgJ1lvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHNlbmQgbWVzc2FnZXMuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5zZW5kZXJFbXB0eSwgJ1lvdSBtdXN0IHNlbGVjdCBhIG51bWJlciBmcm9tIHlvdXIgcGhvbmUgbnVtYmVycyB0byBzZW5kJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5ub1RvTnVtYmVyLCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQucmVjaXBpZW50c0VtcHR5LCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcmVjZWl2ZXIgbnVtYmVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQudGV4dFRvb0xvbmcsICdUZXh0IGlzIHRvbyBsb25nLCAxMDAwIGxpbWl0JyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5yZWNpcGllbnROdW1iZXJJbnZhbGlkcywgJ1JlY2lwaWVudCBudW1iZXIgaXMgaW52YWxpZCcpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQubm9BcmVhQ29kZSwgJ1BsZWFzZSBzZXQge2FyZWFDb2RlTGlua30gdG8gdXNlIDctZGlnaXQgbG9jYWwgcGhvbmUgbnVtYmVycy4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LnNwZWNpYWxOdW1iZXIsICdEaWFsbGluZyBlbWVyZ2VuY3kgb3Igc3BlY2lhbCBzZXJ2aWNlIG51bWJlcnMgaXMgbm90IHN1cHBvcnRlZC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LmNvbm5lY3RGYWlsZWQsICdDb25uZWN0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LmludGVybmFsRXJyb3IsICdDYW5ub3QgY29ubmVjdCBkdWUgdG8gaW50ZXJuYWwgZXJyb3JzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQubm90QW5FeHRlbnNpb24sICdUaGUgZXh0ZW5zaW9uIG51bWJlciBkb2VzIG5vdCBleGlzdC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm5ldHdvcmtFcnJvciwgJ0Nhbm5vdCBjb25uZWN0IGR1ZSB0byBuZXR3b3JrIGlzc3Vlcy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0Lm5vdFNtc1RvRXh0ZW5zaW9uLCAnQ2Fubm90IHNlbmQgdG8gYW4gZXh0ZW5zaW9uIG51bWJlciB3aXRoIG1haW4gcGhvbmUgbnVtYmVyLiBJZiB5b3Ugd2FudCB0byBzZW50IHRvIGEgZXh0ZW5zaW9uIG51bWJlciwgcGxlYXNlIGp1c3QgZW50ZXIgdGhlIGV4dGVuc2lvbiBudW1iZXIuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9tZXNzYWdlU2VuZGVyTWVzc2FnZSwgX21lc3NhZ2VTZW5kZXJNZXNzYWdlczIuZGVmYXVsdC5zZW5kZXJOdW1iZXJJbnZhbGlkcywgJ1lvdSBkb25cXCd0IGhhdmUgdmFsaWQgcGhvbmUgbnVtYmVyIHRvIHNlbmQgU01TIGZyb20uIFBsZWFzZSBjb250YWN0IHlvdXIgYWNjb3VudCBhZG1pbmlzdHJhdG9yLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsIF9tZXNzYWdlU2VuZGVyTWVzc2FnZXMyLmRlZmF1bHQuaW50ZXJuYXRpb25hbFNNU05vdFN1cHBvcnRlZCwgJ1NlbmRpbmcgU01TIHRvIGludGVybmF0aW9uYWwgcGhvbmUgbnVtYmVycyBpcyBub3Qgc3VwcG9ydGVkLicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfbWVzc2FnZVNlbmRlck1lc3NhZ2UsICdhcmVhQ29kZScsICdhcmVhIGNvZGUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX21lc3NhZ2VTZW5kZXJNZXNzYWdlLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2VzMi5kZWZhdWx0LnNlbmRlck51bWJlckludmFsaWQsICdBIHZhbGlkIFBob25lIE51bWJlciBpcyByZXF1aXJlZCB0byBzZW5kIHRleHQgbWVzc2FnZXMgdG8gcmVjaXBpZW50cyBvdXRzaWRlIG9mIHlvdXIgY29tcGFueS4gUGxlYXNlIGNvbnRhY3QgeW91ciBBZG1pbmlzdHJhdG9yIHRvIGFkZCBhIGRpcmVjdCBudW1iZXIgdG8geW91ciBhY2NvdW50LicpLCBfbWVzc2FnZVNlbmRlck1lc3NhZ2UpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tR0IuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvTWVzc2FnZVNlbmRlckFsZXJ0L2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDU3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNhbmNlbDogJ0NhbmNlbCcsXG4gIGNvbmZpcm06ICdDb25maXJtJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL01vZGFsL2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDU4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIG9mZmxpbmVNb2RlOiAnT2ZmbGluZSBNb2RlJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL09mZmxpbmVNb2RlQmFkZ2UvaTE4bi9lbi1HQi5qc1xuLy8gbW9kdWxlIGlkID0gNTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmF0ZUV4Y2VlZGVkOiAnUmVxdWVzdCBsaW1pdCBleGNlZWRlZC4gQXBwIHdpbGwgcmVzdW1lIGluIHt0dGx9IHNlY29uZHMuJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1JhdGVFeGNlZWRlZEFsZXJ0L2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDYwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHNlbGVjdE1hdGNoZWROYW1lOiAnU2VsZWN0IGEgbWF0Y2hpbmcgcmVjb3JkJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1JlY2lwaWVudEhlYWRlci9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfcmVnaW9uJHJlZ2lvblNldHRpbmc7XG5cbnZhciBfcmVnaW9uU2V0dGluZ3NNZXNzYWdlcyA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUmVnaW9uU2V0dGluZ3MvcmVnaW9uU2V0dGluZ3NNZXNzYWdlcycpO1xuXG52YXIgX3JlZ2lvblNldHRpbmdzTWVzc2FnZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaW9uU2V0dGluZ3NNZXNzYWdlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChfcmVnaW9uJHJlZ2lvblNldHRpbmcgPSB7XG4gIHJlZ2lvbjogJ1JlZ2lvbidcbn0sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9yZWdpb24kcmVnaW9uU2V0dGluZywgX3JlZ2lvblNldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQuc2F2ZVN1Y2Nlc3MsICdTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9yZWdpb24kcmVnaW9uU2V0dGluZywgX3JlZ2lvblNldHRpbmdzTWVzc2FnZXMyLmRlZmF1bHQuZGlhbGluZ1BsYW5zQ2hhbmdlZCwgJ1RoZSBwcmV2aW91cyByZWdpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBmb3IgeW91ciBhY2NvdW50LlxcbiAgICBQbGVhc2UgdmVyaWZ5IHlvdXIgbmV3IHtyZWdpb25TZXR0aW5nc0xpbmt9LicpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcmVnaW9uJHJlZ2lvblNldHRpbmcsICdyZWdpb25TZXR0aW5ncycsICdyZWdpb24gc2V0dGluZ3MnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3JlZ2lvbiRyZWdpb25TZXR0aW5nLCBfcmVnaW9uU2V0dGluZ3NNZXNzYWdlczIuZGVmYXVsdC5hcmVhQ29kZUludmFsaWQsICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhcmVhIGNvZGUuJyksIF9yZWdpb24kcmVnaW9uU2V0dGluZyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9SZWdpb25TZXR0aW5nc0FsZXJ0L2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDYyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHRpdGxlOiAnUmVnaW9uJyxcbiAgTkFPbmx5TWVzc2FnZTogJ1BsZWFzZSBzZXQgeW91ciBhcmVhIGNvZGUuIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsbGluZy4nLFxuICBNdWx0aVdpdGhOQU1lc3NhZ2U6ICdQbGVhc2Ugc2V0IHRoZSBjb3VudHJ5IGFuZCBhcmVhIGNvZGUgZm9yIHlvdXIgcmVnaW9uLiBUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbG9jYWwgZGlhbGxpbmcgYW5kIHBob25lIG51bWJlciBmb3JtYXR0aW5nLicsXG4gIE11bHRpV2l0aG91dE5BTWVzc2FnZTogJ1BsZWFzZSBzZWxlY3Qgd2hpY2ggY291bnRyeSB5b3UgYXJlIGxvY2F0ZWQgaW4uIFRoaXMgd2lsbCBiZSB1c2VkIGZvciBsb2NhbCBkaWFsbGluZyBhbmQgcGhvbmUgbnVtYmVyIGZvcm1hdHRpbmcuJyxcbiAgY291bnRyeTogJ0NvdW50cnknLFxuICBhcmVhQ29kZTogJ0FyZWEgQ29kZScsXG4gIGFyZWFDb2RlUGxhY2Vob2xkZXI6ICdFbnRlciBBcmVhIENvZGUnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tR0IuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2NvbXBvbmVudHMvUmVnaW9uU2V0dGluZ3NQYW5lbC9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfcGVybWlzc2lvbnNNZXNzYWdlcyA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvUm9sZXNBbmRQZXJtaXNzaW9ucy9wZXJtaXNzaW9uc01lc3NhZ2VzJyk7XG5cbnZhciBfcGVybWlzc2lvbnNNZXNzYWdlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wZXJtaXNzaW9uc01lc3NhZ2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoe30sIF9wZXJtaXNzaW9uc01lc3NhZ2VzMi5kZWZhdWx0LmludmFsaWRUaWVyLCAnWW91ciBlZGl0aW9uIGRvZXMgbm90IHN1cHBvcnQge2FwcGxpY2F0aW9ufSBpbnRlZ3JhdGlvbi4gUGxlYXNlIGNvbnRhY3QgeW91ciBhY2NvdW50IHJlcHJlc2VudGF0aXZlIHRvIHVwZ3JhZGUgeW91ciB7YnJhbmR9IGVkaXRpb24uJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9Sb2xlc0FuZFBlcm1pc3Npb25zQWxlcnQvaTE4bi9lbi1HQi5qc1xuLy8gbW9kdWxlIGlkID0gNjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmVnaW9uOiAnUmVnaW9uJyxcbiAgY2FsbGluZzogJ0NhbGxpbmcnLFxuICBsb2dvdXQ6ICdMb2cgb3V0JyxcbiAgdmVyc2lvbjogJ1ZlcnNpb24nLFxuICBzZXR0aW5nczogJ1NldHRpbmdzJyxcbiAgY2xpY2tUb0RpYWw6ICdDbGljayB0byBEaWFsJyxcbiAgYXV0b0NyZWF0ZUxvZzogJ0F1dG8tY3JlYXRlIENhbGwgTG9nJyxcbiAgY2xpY2tUb1NNUzogJ0NsaWNrIHRvIFNNUycsXG4gIGNsaWNrVG9EaWFsU01TOiAnQ2xpY2sgdG8gRGlhbC9TTVMnLFxuICBhdXRvQ3JlYXRlU01TTG9nOiAnQXV0by1jcmVhdGUgU01TIGxvZycsXG4gIGF1dG9Mb2dDYWxsczogJ0F1dG8gbG9nIGNhbGxzJyxcbiAgYXV0b0xvZ1NNUzogJ0F1dG8gbG9nIFNNUydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi1HQi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yaW5nY2VudHJhbC13aWRnZXQvY29tcG9uZW50cy9TZXR0aW5nc1BhbmVsL2kxOG4vZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDY0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF93ZWJwaG9uZUVycm9ycyRjb25uZTtcblxudmFyIF93ZWJwaG9uZUVycm9ycyA9IHJlcXVpcmUoJ3JpbmdjZW50cmFsLWludGVncmF0aW9uL21vZHVsZXMvV2VicGhvbmUvd2VicGhvbmVFcnJvcnMnKTtcblxudmFyIF93ZWJwaG9uZUVycm9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93ZWJwaG9uZUVycm9ycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChfd2VicGhvbmVFcnJvcnMkY29ubmUgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQuY29ubmVjdEZhaWxlZCwgJ1NlbmQgc3VjY2Vzcy4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQuYnJvd3Nlck5vdFN1cHBvcnRlZCwgJ0NhbGxpbmcgd2l0aCBicm93c2VyIGlzIG9ubHkgc3VwcG9ydGVkIG9uIENocm9tZS4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQud2VicGhvbmVDb3VudE92ZXJMaW1pdCwgJ0EgbWF4aW11bSBvZiA1IHdlYiBwaG9uZXMgY291bGQgYmUgcmVnaXN0ZXJlZC4nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3dlYnBob25lRXJyb3JzJGNvbm5lLCBfd2VicGhvbmVFcnJvcnMyLmRlZmF1bHQubm90T3V0Ym91bmRDYWxsV2l0aG91dERMLCAnWW91ciBleHRlbnNpb24gaXMgY3VycmVudGx5IG5vdCBhbGxvd2VkIHRvIG1ha2Ugb3V0Ym91bmQgY2FsbHMgd2l0aCBicm93c2VyLiBQbGVhc2UgY29udGFjdCB5b3VyIGFjY291bnQgcmVwcmVzZW50YXRpdmUgZm9yIGFuIHVwZ3JhZGUuJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF93ZWJwaG9uZUVycm9ycyRjb25uZSwgX3dlYnBob25lRXJyb3JzMi5kZWZhdWx0LmdldFNpcFByb3Zpc2lvbkVycm9yLCAnWW91IGRvIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gc2VuZCBtZXNzYWdlcy4nKSwgX3dlYnBob25lRXJyb3JzJGNvbm5lKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb21wb25lbnRzL1dlYnBob25lQWxlcnQvaTE4bi9lbi1HQi5qc1xuLy8gbW9kdWxlIGlkID0gNjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdGl0bGU6ICdIaXN0b3J5J1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb250YWluZXJzL0NhbGxIaXN0b3J5UGFnZS9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA2Njlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0aXRsZTogJ0NhbGxzJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb250YWluZXJzL0NhbGxNb25pdG9yUGFnZS9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA2Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0aXRsZTogJ01lc3NhZ2VzJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9jb250YWluZXJzL01lc3NhZ2VzUGFnZS9pMThuL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBBUjogJ0FyZ2VudGluYScsXG4gIEFUOiAnQXVzdHJpYScsXG4gIEJIOiAnQmFocmFpbicsXG4gIEJSOiAnQnJhemlsJyxcbiAgQkc6ICdCdWxnYXJpYScsXG4gIENBOiAnQ2FuYWRhJyxcbiAgQ0w6ICdDaGlsZScsXG4gIENOOiAnQ2hpbmEnLFxuICBIUjogJ0Nyb2F0aWEnLFxuICBDWTogJ0N5cHJ1cycsXG4gIENaOiAnQ3plY2ggUmVwdWJsaWMnLFxuICBESzogJ0Rlbm1hcmsnLFxuICBETzogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gIEVFOiAnRXN0b25pYScsXG4gIEZJOiAnRmlubGFuZCcsXG4gIEZSOiAnRnJhbmNlJyxcbiAgREU6ICdHZXJtYW55JyxcbiAgSEs6ICdIb25nIEtvbmcnLFxuICBIVTogJ0h1bmdhcnknLFxuICBJRTogJ0lyZWxhbmQnLFxuICBJTDogJ0lzcmFlbCcsXG4gIElOOiAnSW5kaWEnLFxuICBJVDogJ0l0YWx5JyxcbiAgSlA6ICdKYXBhbicsXG4gIExWOiAnTGF0dmlhJyxcbiAgTFQ6ICdMaXRodWFuaWEnLFxuICBMVTogJ0x1eGVtYm91cmcnLFxuICBNWTogJ01hbGF5c2lhJyxcbiAgTVg6ICdNZXhpY28nLFxuICBOTDogJ05ldGhlcmxhbmRzJyxcbiAgTk86ICdOb3J3YXknLFxuICBQQTogJ1BhbmFtYScsXG4gIFBIOiAnUGhpbGlwcGluZXMnLFxuICBQTDogJ1BvbGFuZCcsXG4gIFBUOiAnUG9ydHVnYWwnLFxuICBSTzogJ1JvbWFuaWEnLFxuICBTSzogJ1Nsb3Zha2lhJyxcbiAgU0k6ICdTbG92ZW5pYScsXG4gIEVTOiAnU3BhaW4nLFxuICBTRTogJ1N3ZWRlbicsXG4gIENIOiAnU3dpdHplcmxhbmQnLFxuICBUUjogJ1R1cmtleScsXG4gIEdCOiAnVW5pdGVkIEtpbmdkb20nLFxuICBBVTogJ0F1c3RyYWxpYScsXG4gIEdFOiAnR2VvcmdpYScsXG4gIElEOiAnSW5kb25lc2lhJyxcbiAgS0U6ICdLZW55YScsXG4gIE5HOiAnTmlnZXJpYScsXG4gIFBLOiAnUGFraXN0YW4nLFxuICBaQTogJ1NvdXRoIEFmcmljYScsXG4gIEtSOiAnU291dGggS29yZWEnLFxuICBTRzogJ1NpbmdhcG9yZScsXG4gIFRXOiAnVGFpd2FuJyxcbiAgVUE6ICdVa3JhaW5lJyxcbiAgVVM6ICdVbml0ZWQgU3RhdGVzJyxcbiAgVk46ICdWaWV0bmFtJyxcbiAgQkU6ICdCZWxnaXVtJyxcbiAgQko6ICdCZW5pbicsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBHSDogJ0doYW5hJyxcbiAgR1I6ICdHcmVlY2UnLFxuICBHTjogJ0d1aW5lYScsXG4gIE5aOiAnTmV3IFplYWxhbmQnLFxuICBQRTogJ1BlcnUnLFxuICBQUjogJ1B1ZXJ0byBSaWNvJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9saWIvY291bnRyeU5hbWVzL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA2OTdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfcGhvbmVTb3VyY2VzJGFjY291bnQ7XG5cbnZhciBfcGhvbmVTb3VyY2VzID0gcmVxdWlyZSgnLi4vLi4vZW51bXMvcGhvbmVTb3VyY2VzJyk7XG5cbnZhciBfcGhvbmVTb3VyY2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bob25lU291cmNlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChfcGhvbmVTb3VyY2VzJGFjY291bnQgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Bob25lU291cmNlcyRhY2NvdW50LCBfcGhvbmVTb3VyY2VzMi5kZWZhdWx0LmFjY291bnQsICdBY2NvdW50JyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9waG9uZVNvdXJjZXMkYWNjb3VudCwgX3Bob25lU291cmNlczIuZGVmYXVsdC5jb250YWN0LCAnQ29udGFjdCcpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVTb3VyY2VzJGFjY291bnQsIF9waG9uZVNvdXJjZXMyLmRlZmF1bHQubGVhZCwgJ0xlYWQnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Bob25lU291cmNlcyRhY2NvdW50LCBfcGhvbmVTb3VyY2VzMi5kZWZhdWx0Lm9wcG9ydHVuaXR5LCAnT3Bwb3J0dW5pdHknKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Bob25lU291cmNlcyRhY2NvdW50LCBfcGhvbmVTb3VyY2VzMi5kZWZhdWx0LnN5c3RlbVVzZXIsICdTeXN0ZW0gVXNlcicpLCBfcGhvbmVTb3VyY2VzJGFjY291bnQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4tR0IuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmluZ2NlbnRyYWwtd2lkZ2V0L2xpYi9waG9uZVNvdXJjZU5hbWVzL2VuLUdCLmpzXG4vLyBtb2R1bGUgaWQgPSA3MDZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfcGhvbmVUeXBlcyRidXNpbmVzcyQ7XG5cbnZhciBfcGhvbmVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2VudW1zL3Bob25lVHlwZXMnKTtcblxudmFyIF9waG9uZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bob25lVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoX3Bob25lVHlwZXMkYnVzaW5lc3MkID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9waG9uZVR5cGVzJGJ1c2luZXNzJCwgX3Bob25lVHlwZXMyLmRlZmF1bHQuYnVzaW5lc3MsICdCdXNpbmVzcyBQaG9uZScpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVUeXBlcyRidXNpbmVzcyQsIF9waG9uZVR5cGVzMi5kZWZhdWx0LmV4dGVuc2lvbiwgJ0V4dGVuc2lvbiBQaG9uZScpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVUeXBlcyRidXNpbmVzcyQsIF9waG9uZVR5cGVzMi5kZWZhdWx0LmhvbWUsICdIb21lIFBob25lJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9waG9uZVR5cGVzJGJ1c2luZXNzJCwgX3Bob25lVHlwZXMyLmRlZmF1bHQubW9iaWxlLCAnTW9iaWxlIFBob25lJyksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9waG9uZVR5cGVzJGJ1c2luZXNzJCwgX3Bob25lVHlwZXMyLmRlZmF1bHQucGhvbmUsICdQaG9uZScpLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfcGhvbmVUeXBlcyRidXNpbmVzcyQsIF9waG9uZVR5cGVzMi5kZWZhdWx0LnVua25vd24sICdVbmtub3duIFBob25lIFR5cGUnKSwgX3Bob25lVHlwZXMkYnVzaW5lc3MkKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuLUdCLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JpbmdjZW50cmFsLXdpZGdldC9saWIvcGhvbmVUeXBlTmFtZXMvZW4tR0IuanNcbi8vIG1vZHVsZSBpZCA9IDcxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwic291cmNlUm9vdCI6IiJ9