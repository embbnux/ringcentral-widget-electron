/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 758);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1612:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = __webpack_require__(1612);

function popWindow(url, id, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  const width = screen.width || window.outerWidth;
  const height = screen.height || window.innerHeight;

  const left = width / 2 - w / 2 + dualScreenLeft;
  const top = height / 2 - h / 2 + dualScreenTop;
  const newWindow = window.open(url, id, `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`);

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

class ProxyWebviewController {
  constructor({
    prefix
  } = {}) {
    // console.log('initialing webview');
    window.oAuthCallback = callbackUri => {
      _electron.ipcRenderer.sendToHost('message', {
        callbackUri
      });
    };

    _electron.ipcRenderer.on('message', (event, data) => {
      if (data) {
        const {
          oAuthUri
        } = data;
        if (oAuthUri != null) {
          console.log(oAuthUri);
          popWindow(oAuthUri, 'rc-oauth', 600, 600);
        }
      }
    });

    const key = `${prefix}-redirect-callbackUri`;
    window.addEventListener('storage', e => {
      if (e.key === key && e.newValue && e.newValue !== '') {
        const callbackUri = e.newValue;
        _electron.ipcRenderer.sendToHost('message', {
          callbackUri,
          fromLocalStorage: true
        });
        localStorage.removeItem(key);
      }
    });
    // loaded
    _electron.ipcRenderer.sendToHost('message', {
      proxyLoaded: true
    });
  }
}
exports.default = ProxyWebviewController;

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProxyWebviewController = __webpack_require__(419);

var _ProxyWebviewController2 = _interopRequireDefault(_ProxyWebviewController);

var _prefix = __webpack_require__(76);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _ProxyWebviewController2.default({
  prefix: _prefix2.default
});

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'rc-widget';

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGJjOTI0MTM2ZTk0NjgyOTZhOGUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1Byb3h5V2Vidmlld0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJlZml4LmpzIl0sIm5hbWVzIjpbInBvcFdpbmRvdyIsInVybCIsImlkIiwidyIsImgiLCJkdWFsU2NyZWVuTGVmdCIsIndpbmRvdyIsInNjcmVlbkxlZnQiLCJ1bmRlZmluZWQiLCJzY3JlZW4iLCJsZWZ0IiwiZHVhbFNjcmVlblRvcCIsInNjcmVlblRvcCIsInRvcCIsIndpZHRoIiwib3V0ZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibmV3V2luZG93Iiwib3BlbiIsImZvY3VzIiwiZSIsIlByb3h5V2Vidmlld0NvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsInByZWZpeCIsIm9BdXRoQ2FsbGJhY2siLCJjYWxsYmFja1VyaSIsInNlbmRUb0hvc3QiLCJvbiIsImV2ZW50IiwiZGF0YSIsIm9BdXRoVXJpIiwiY29uc29sZSIsImxvZyIsImtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsImZyb21Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHJveHlMb2FkZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FB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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzU4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYmM5MjQxMzZlOTQ2ODI5NmE4ZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZWxlY3Ryb25cIlxuLy8gbW9kdWxlIGlkID0gMTYxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiaW1wb3J0IHsgaXBjUmVuZGVyZXIgfSBmcm9tICdlbGVjdHJvbic7XG5cbmZ1bmN0aW9uIHBvcFdpbmRvdyh1cmwsIGlkLCB3LCBoKSB7XG4gIC8vIEZpeGVzIGR1YWwtc2NyZWVuIHBvc2l0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIE1vc3QgYnJvd3NlcnMgICAgICBGaXJlZm94XG4gIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQ7XG4gIGNvbnN0IGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcblxuICBjb25zdCB3aWR0aCA9IHNjcmVlbi53aWR0aCB8fCB3aW5kb3cub3V0ZXJXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gc2NyZWVuLmhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgY29uc3QgbGVmdCA9ICgod2lkdGggLyAyKSAtICh3IC8gMikpICsgZHVhbFNjcmVlbkxlZnQ7XG4gIGNvbnN0IHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAoaCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XG4gIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKFxuICAgIHVybCxcbiAgICBpZCxcbiAgICBgc2Nyb2xsYmFycz15ZXMsIHdpZHRoPSR7d30sIGhlaWdodD0ke2h9LCB0b3A9JHt0b3B9LCBsZWZ0PSR7bGVmdH1gLFxuICApO1xuXG4gIC8vIFB1dHMgZm9jdXMgb24gdGhlIG5ld1dpbmRvd1xuICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgdHJ5IHtcbiAgICAgIG5ld1dpbmRvdy5mb2N1cygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld1dpbmRvdztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlXZWJ2aWV3Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwcmVmaXgsXG4gIH0gPSB7fSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0aWFsaW5nIHdlYnZpZXcnKTtcbiAgICB3aW5kb3cub0F1dGhDYWxsYmFjayA9IChjYWxsYmFja1VyaSkgPT4ge1xuICAgICAgaXBjUmVuZGVyZXIuc2VuZFRvSG9zdCgnbWVzc2FnZScsIHtcbiAgICAgICAgY2FsbGJhY2tVcmksXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaXBjUmVuZGVyZXIub24oJ21lc3NhZ2UnLCAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBvQXV0aFVyaSxcbiAgICAgICAgfSA9IGRhdGE7XG4gICAgICAgIGlmIChvQXV0aFVyaSAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cob0F1dGhVcmkpO1xuICAgICAgICAgIHBvcFdpbmRvdyhvQXV0aFVyaSwgJ3JjLW9hdXRoJywgNjAwLCA2MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXkgPSBgJHtwcmVmaXh9LXJlZGlyZWN0LWNhbGxiYWNrVXJpYDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IGtleSAmJiBlLm5ld1ZhbHVlICYmIGUubmV3VmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrVXJpID0gZS5uZXdWYWx1ZTtcbiAgICAgICAgaXBjUmVuZGVyZXIuc2VuZFRvSG9zdCgnbWVzc2FnZScsIHtcbiAgICAgICAgICBjYWxsYmFja1VyaSxcbiAgICAgICAgICBmcm9tTG9jYWxTdG9yYWdlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBsb2FkZWRcbiAgICBpcGNSZW5kZXJlci5zZW5kVG9Ib3N0KCdtZXNzYWdlJywge1xuICAgICAgcHJveHlMb2FkZWQ6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvUHJveHlXZWJ2aWV3Q29udHJvbGxlci5qcyIsImltcG9ydCBQcm94eVdlYnZpZXdDb250cm9sbGVyIGZyb20gJy4vbGliL1Byb3h5V2Vidmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IHByZWZpeCBmcm9tICcuL2NvbmZpZy9wcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJveHlXZWJ2aWV3Q29udHJvbGxlcih7XG4gIHByZWZpeCxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3h5LmpzIiwiZXhwb3J0IGRlZmF1bHQgJ3JjLXdpZGdldCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnL3ByZWZpeC5qcyJdLCJzb3VyY2VSb290IjoiIn0=