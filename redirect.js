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
/******/ 	return __webpack_require__(__webpack_require__.s = 759);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class RedirectController {
  constructor({
    prefix
  } = {}) {
    window.addEventListener('load', () => {
      const callbackUri = window.location.href;
      // RCINT-3477 some devices will have reference to opener, but will throw exception
      // when tring to access opener
      try {
        if (window.opener && window.opener.oAuthCallback) {
          window.opener.oAuthCallback(callbackUri);
          window.close();
          return;
        }
      } catch (e) {}
      /* ignore error */

      // fall back to use localStorage as a vessel to avoid opener is null bug
      const key = `${prefix}-redirect-callbackUri`;
      localStorage.removeItem(key);
      window.addEventListener('storage', e => {
        if (e.key === key && (!e.newValue || e.newValue === '')) {
          window.close();
        }
      });
      localStorage.setItem(key, callbackUri);
    });
  }
}
exports.default = RedirectController;

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RedirectController = __webpack_require__(1619);

var _RedirectController2 = _interopRequireDefault(_RedirectController);

var _prefix = __webpack_require__(76);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _RedirectController2.default({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmFlNWNkMzNhODAyMGUzYjJjOTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9SZWRpcmVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJlZml4LmpzIl0sIm5hbWVzIjpbIlJlZGlyZWN0Q29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwicHJlZml4Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrVXJpIiwibG9jYXRpb24iLCJocmVmIiwib3BlbmVyIiwib0F1dGhDYWxsYmFjayIsImNsb3NlIiwiZSIsImtleSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJuZXdWYWx1ZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRGUsTUFBTUEsa0JBQU4sQ0FBeUI7QUFDdENDLGNBQVk7QUFDVkM7QUFEVSxNQUVSLEVBRkosRUFFUTtBQUNOQyxXQUFPQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxNQUFNO0FBQ3BDLFlBQU1DLGNBQWNGLE9BQU9HLFFBQVAsQ0FBZ0JDLElBQXBDO0FBQ0E7QUFDQTtBQUNBLFVBQUk7QUFDRixZQUFJSixPQUFPSyxNQUFQLElBQWlCTCxPQUFPSyxNQUFQLENBQWNDLGFBQW5DLEVBQWtEO0FBQ2hETixpQkFBT0ssTUFBUCxDQUFjQyxhQUFkLENBQTRCSixXQUE1QjtBQUNBRixpQkFBT08sS0FBUDtBQUNBO0FBQ0Q7QUFDRixPQU5ELENBTUUsT0FBT0MsQ0FBUCxFQUFVLENBRVg7QUFEQzs7QUFFRjtBQUNBLFlBQU1DLE1BQU8sR0FBRVYsTUFBTyx1QkFBdEI7QUFDQVcsbUJBQWFDLFVBQWIsQ0FBd0JGLEdBQXhCO0FBQ0FULGFBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW9DTyxDQUFELElBQU87QUFDeEMsWUFBSUEsRUFBRUMsR0FBRixLQUFVQSxHQUFWLEtBQWtCLENBQUNELEVBQUVJLFFBQUgsSUFBZUosRUFBRUksUUFBRixLQUFlLEVBQWhELENBQUosRUFBeUQ7QUFDdkRaLGlCQUFPTyxLQUFQO0FBQ0Q7QUFDRixPQUpEO0FBS0FHLG1CQUFhRyxPQUFiLENBQXFCSixHQUFyQixFQUEwQlAsV0FBMUI7QUFDRCxLQXRCRDtBQXVCRDtBQTNCcUM7a0JBQW5CTCxrQjs7Ozs7Ozs7Ozs7Ozs7QUNEckI7Ozs7QUFDQTs7Ozs7O2tCQUVlLGlDQUF1QjtBQUNwQ0U7QUFEb0MsQ0FBdkIsQzs7Ozs7Ozs7Ozs7OztrQkNIQSxXIiwiZmlsZSI6InJlZGlyZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3NTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJhZTVjZDMzYTgwMjBlM2IyYzk4IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRpcmVjdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgcHJlZml4LFxuICB9ID0ge30pIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrVXJpID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAvLyBSQ0lOVC0zNDc3IHNvbWUgZGV2aWNlcyB3aWxsIGhhdmUgcmVmZXJlbmNlIHRvIG9wZW5lciwgYnV0IHdpbGwgdGhyb3cgZXhjZXB0aW9uXG4gICAgICAvLyB3aGVuIHRyaW5nIHRvIGFjY2VzcyBvcGVuZXJcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh3aW5kb3cub3BlbmVyICYmIHdpbmRvdy5vcGVuZXIub0F1dGhDYWxsYmFjaykge1xuICAgICAgICAgIHdpbmRvdy5vcGVuZXIub0F1dGhDYWxsYmFjayhjYWxsYmFja1VyaSk7XG4gICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGlnbm9yZSBlcnJvciAqL1xuICAgICAgfVxuICAgICAgLy8gZmFsbCBiYWNrIHRvIHVzZSBsb2NhbFN0b3JhZ2UgYXMgYSB2ZXNzZWwgdG8gYXZvaWQgb3BlbmVyIGlzIG51bGwgYnVnXG4gICAgICBjb25zdCBrZXkgPSBgJHtwcmVmaXh9LXJlZGlyZWN0LWNhbGxiYWNrVXJpYDtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0ga2V5ICYmICghZS5uZXdWYWx1ZSB8fCBlLm5ld1ZhbHVlID09PSAnJykpIHtcbiAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGNhbGxiYWNrVXJpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9SZWRpcmVjdENvbnRyb2xsZXIuanMiLCJpbXBvcnQgUmVkaXJlY3RDb250cm9sbGVyIGZyb20gJy4vbGliL1JlZGlyZWN0Q29udHJvbGxlcic7XG5pbXBvcnQgcHJlZml4IGZyb20gJy4vY29uZmlnL3ByZWZpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSZWRpcmVjdENvbnRyb2xsZXIoe1xuICBwcmVmaXgsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWRpcmVjdC5qcyIsImV4cG9ydCBkZWZhdWx0ICdyYy13aWRnZXQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy9wcmVmaXguanMiXSwic291cmNlUm9vdCI6IiJ9