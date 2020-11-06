module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/books/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: books */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"books\", function() { return books; });\nconst books = [{\n  id: '1',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book.jpg'\n}, {\n  id: '2',\n  author: \"Dave Eggers\",\n  name: 'A HArtbreak work of staggering genius',\n  img: '/images/book2.jpg'\n}, {\n  id: '3',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book3.jpg'\n}, {\n  id: '4',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book4.jpg'\n}, {\n  id: '5',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book5.jpg'\n}, {\n  id: '6',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book6.jpg'\n}, {\n  id: '7',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book7.jpg'\n}, {\n  id: '8',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book8.jpg'\n}, {\n  id: '9',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book9.jpg'\n}, {\n  id: '10',\n  name: 'A Wrinkle in Time',\n  author: \"Madeleine Lengle\",\n  img: '/images/book10.jpg'\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzPzg4NWEiXSwibmFtZXMiOlsiYm9va3MiLCJpZCIsIm5hbWUiLCJhdXRob3IiLCJpbWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxLQUFLLEdBQUcsQ0FDbkI7QUFDRUMsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFLG1CQUZSO0FBR0VDLFFBQU0sRUFBRSxrQkFIVjtBQUlFQyxLQUFHLEVBQUU7QUFKUCxDQURtQixFQU9uQjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFRSxRQUFNLEVBQUUsYUFGVjtBQUdFRCxNQUFJLEVBQUUsdUNBSFI7QUFJRUUsS0FBRyxFQUFFO0FBSlAsQ0FQbUIsRUFhbkI7QUFDRUgsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFLG1CQUZSO0FBR0VDLFFBQU0sRUFBRSxrQkFIVjtBQUlFQyxLQUFHLEVBQUU7QUFKUCxDQWJtQixFQW1CbkI7QUFDRUgsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFLG1CQUZSO0FBR0VDLFFBQU0sRUFBRSxrQkFIVjtBQUlFQyxLQUFHLEVBQUU7QUFKUCxDQW5CbUIsRUF5Qm5CO0FBQ0VILElBQUUsRUFBRSxHQUROO0FBRUVDLE1BQUksRUFBRSxtQkFGUjtBQUdFQyxRQUFNLEVBQUUsa0JBSFY7QUFJRUMsS0FBRyxFQUFFO0FBSlAsQ0F6Qm1CLEVBK0JuQjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxNQUFJLEVBQUUsbUJBRlI7QUFHRUMsUUFBTSxFQUFFLGtCQUhWO0FBSUVDLEtBQUcsRUFBRTtBQUpQLENBL0JtQixFQXNDbkI7QUFDRUgsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFLG1CQUZSO0FBR0VDLFFBQU0sRUFBRSxrQkFIVjtBQUlFQyxLQUFHLEVBQUU7QUFKUCxDQXRDbUIsRUE0Q25CO0FBQ0VILElBQUUsRUFBRSxHQUROO0FBRUVDLE1BQUksRUFBRSxtQkFGUjtBQUdFQyxRQUFNLEVBQUUsa0JBSFY7QUFJRUMsS0FBRyxFQUFFO0FBSlAsQ0E1Q21CLEVBbURuQjtBQUNFSCxJQUFFLEVBQUUsR0FETjtBQUVFQyxNQUFJLEVBQUUsbUJBRlI7QUFHRUMsUUFBTSxFQUFFLGtCQUhWO0FBSUVDLEtBQUcsRUFBRTtBQUpQLENBbkRtQixFQXlEbkI7QUFDRUgsSUFBRSxFQUFFLElBRE47QUFFRUMsTUFBSSxFQUFFLG1CQUZSO0FBR0VDLFFBQU0sRUFBRSxrQkFIVjtBQUlFQyxLQUFHLEVBQUU7QUFKUCxDQXpEbUIsQ0FBZCIsImZpbGUiOiIuL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYm9va3MgPSBbXG4gIHtcbiAgICBpZDogJzEnLFxuICAgIG5hbWU6ICdBIFdyaW5rbGUgaW4gVGltZScsXG4gICAgYXV0aG9yOiBcIk1hZGVsZWluZSBMZW5nbGVcIixcbiAgICBpbWc6ICcvaW1hZ2VzL2Jvb2suanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMicsXG4gICAgYXV0aG9yOiBcIkRhdmUgRWdnZXJzXCIsXG4gICAgbmFtZTogJ0EgSEFydGJyZWFrIHdvcmsgb2Ygc3RhZ2dlcmluZyBnZW5pdXMnLFxuICAgIGltZzogJy9pbWFnZXMvYm9vazIuanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnMycsXG4gICAgbmFtZTogJ0EgV3JpbmtsZSBpbiBUaW1lJyxcbiAgICBhdXRob3I6IFwiTWFkZWxlaW5lIExlbmdsZVwiLFxuICAgIGltZzogJy9pbWFnZXMvYm9vazMuanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnNCcsXG4gICAgbmFtZTogJ0EgV3JpbmtsZSBpbiBUaW1lJyxcbiAgICBhdXRob3I6IFwiTWFkZWxlaW5lIExlbmdsZVwiLFxuICAgIGltZzogJy9pbWFnZXMvYm9vazQuanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnNScsXG4gICAgbmFtZTogJ0EgV3JpbmtsZSBpbiBUaW1lJyxcbiAgICBhdXRob3I6IFwiTWFkZWxlaW5lIExlbmdsZVwiLFxuICAgIGltZzogJy9pbWFnZXMvYm9vazUuanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnNicsXG4gICAgbmFtZTogJ0EgV3JpbmtsZSBpbiBUaW1lJyxcbiAgICBhdXRob3I6IFwiTWFkZWxlaW5lIExlbmdsZVwiLFxuICAgIGltZzogJy9pbWFnZXMvYm9vazYuanBnJyxcbiAgfSxcblxuICB7XG4gICAgaWQ6ICc3JyxcbiAgICBuYW1lOiAnQSBXcmlua2xlIGluIFRpbWUnLFxuICAgIGF1dGhvcjogXCJNYWRlbGVpbmUgTGVuZ2xlXCIsXG4gICAgaW1nOiAnL2ltYWdlcy9ib29rNy5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICc4JyxcbiAgICBuYW1lOiAnQSBXcmlua2xlIGluIFRpbWUnLFxuICAgIGF1dGhvcjogXCJNYWRlbGVpbmUgTGVuZ2xlXCIsXG4gICAgaW1nOiAnL2ltYWdlcy9ib29rOC5qcGcnLFxuXG4gIH0sXG4gIHtcbiAgICBpZDogJzknLFxuICAgIG5hbWU6ICdBIFdyaW5rbGUgaW4gVGltZScsXG4gICAgYXV0aG9yOiBcIk1hZGVsZWluZSBMZW5nbGVcIixcbiAgICBpbWc6ICcvaW1hZ2VzL2Jvb2s5LmpwZycsXG4gIH0sXG4gIHtcbiAgICBpZDogJzEwJyxcbiAgICBuYW1lOiAnQSBXcmlua2xlIGluIFRpbWUnLFxuICAgIGF1dGhvcjogXCJNYWRlbGVpbmUgTGVuZ2xlXCIsXG4gICAgaW1nOiAnL2ltYWdlcy9ib29rMTAuanBnJyxcbiAgfSxcbl1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data.js\n");

/***/ }),

/***/ "./pages/api/books/index.js":
/*!**********************************!*\
  !*** ./pages/api/books/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ \"./data.js\");\n\nfunction handler(req, res) {\n  res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__[\"books\"]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYm9va3MvaW5kZXguanM/OGY2YSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImJvb2tzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN4Q0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLDJDQUFyQjtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2Jvb2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9va3MgfSBmcm9tICcuLi8uLi8uLi9kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGJvb2tzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/books/index.js\n");

/***/ })

/******/ });