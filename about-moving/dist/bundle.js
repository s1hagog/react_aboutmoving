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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\src\\\\App.js: Unexpected token (6:12)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m    render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m                \\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m        )\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6400:17)\\n    at Parser.unexpected (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7728:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8940:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8507:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8487:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8353:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8326:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8273:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9077:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8861:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8507:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8487:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8353:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8326:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8273:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8221:23)\\n    at Parser.parseReturnStatement (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10301:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9980:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9932:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10508:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10495:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10479:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9523:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9493:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9447:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10907:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10832:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10771:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10726:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\s1hag\\\\OneDrive\\\\Документы\\\\Projects\\\\aboutmoving.ca\\\\about-moving\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9805:14)\");\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

/******/ });