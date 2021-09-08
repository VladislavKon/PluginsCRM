/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var IframeAnnotation;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Webresources/src/Index.html":
/*!*************************************!*\
  !*** ./Webresources/src/Index.html ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:1)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> ﻿<!DOCTYPE html>\\n| <html>\\n| <head>\");\n\n//# sourceURL=webpack://IframeAnnotation/./Webresources/src/Index.html?");

/***/ }),

/***/ "./Webresources/src/iframeAnnotation.js":
/*!**********************************************!*\
  !*** ./Webresources/src/iframeAnnotation.js ***!
  \**********************************************/
/***/ ((module) => {

eval("﻿function GetAnnotations(executeContext) {\r\n    try {\r\n        var contId = executeContext.data.entity.getId()\r\n        var Entity = \"annotation\";\r\n        var Select = \"?$select=objectid, notetext\";\r\n        var Filter = \"&$filter=objectid eq '\" + contId + \"'\";\r\n        Xrm.WebApi.retrieveMultipleRecords(Entity, Select + Filter).then(\r\n            function success(result) {\r\n                if (result != null) {\r\n                    var res = result;\r\n                }\r\n            }\r\n        );\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\r\nmodule.exports = {\r\n    Anno: function () {\r\n        GetAnnotations();\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://IframeAnnotation/./Webresources/src/iframeAnnotation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./Webresources/src/iframeAnnotation.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./Webresources/src/Index.html");
/******/ 	IframeAnnotation = __webpack_exports__;
/******/ 	
/******/ })()
;