/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var WebResources;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Webresources/src/FieldsChecker.js":
/*!*******************************************!*\
  !*** ./Webresources/src/FieldsChecker.js ***!
  \*******************************************/
/***/ (() => {

eval("﻿function FieldsChecker(primaryControl) {\r\n    var message = \"Введите данные в поля: \"\r\n    if (primaryControl.getAttribute(\"new_city\").getValue() != null && primaryControl.getAttribute(\"new_city\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_region\").getValue() != null && primaryControl.getAttribute(\"new_region\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_email\").getValue() != null && primaryControl.getAttribute(\"new_email\").getValue() != undefined) {\r\n        primaryControl.data.save()\r\n    } else {\r\n        if (primaryControl.getAttribute(\"new_city\").getValue() == null || primaryControl.getAttribute(\"new_city\").getValue() == undefined)\r\n            message += \"\\n Город\";\r\n        if (primaryControl.getAttribute(\"new_region\").getValue() == null || primaryControl.getAttribute(\"new_region\").getValue() == undefined)\r\n            message += \"\\n Регион\";\r\n        if (primaryControl.getAttribute(\"new_email\").getValue() == null || primaryControl.getAttribute(\"new_email\").getValue() == undefined)\r\n            message += \"\\n Основной email\";\r\n        Xrm.Navigation.openAlertDialog(message);        \r\n    }\r\n}\n\n//# sourceURL=webpack://WebResources/./Webresources/src/FieldsChecker.js?");

/***/ }),

/***/ "./Webresources/src/FilterLookup.js":
/*!******************************************!*\
  !*** ./Webresources/src/FilterLookup.js ***!
  \******************************************/
/***/ ((module) => {

eval("﻿function filterLookup() {\r\n    try {\r\n        if (Xrm.Page.getControl(\"new_region\") != null && Xrm.Page.getControl(\"new_region\") != undefined) {\r\n            Xrm.Page.getControl(\"new_city\").addPreSearch(function () {\r\n                addCustomeLookupFilter();\r\n            });\r\n        }\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\r\nfunction addCustomeLookupFilter() {\r\n    try {\r\n        var Region = Xrm.Page.getAttribute(\"new_region\").getValue();\r\n        if (Region != null && Region != undefined) {\r\n            fetchXml = \"<filter type='and'><condition attribute='new_regionlookup' operator='eq' value='\" + Region[0].id + \"' /></filter>\";\r\n            Xrm.Page.getControl(\"new_city\").addCustomFilter(fetchXml);\r\n        }\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    filter: function () {\r\n        filterLookup();\r\n    }\r\n};\r\n\r\n    \r\n\n\n//# sourceURL=webpack://WebResources/./Webresources/src/FilterLookup.js?");

/***/ }),

/***/ "./Webresources/src/SaveAndClose.js":
/*!******************************************!*\
  !*** ./Webresources/src/SaveAndClose.js ***!
  \******************************************/
/***/ (() => {

eval("﻿function SaveAndClose(primaryControl) {\r\n    var message = \"Заполните следующие поля: \"\r\n    if (primaryControl.getAttribute(\"new_city\").getValue() != null && primaryControl.getAttribute(\"new_city\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_region\").getValue() != null && primaryControl.getAttribute(\"new_region\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_email\").getValue() != null && primaryControl.getAttribute(\"new_email\").getValue() != undefined) {\r\n       \r\n        primaryControl.data.save().then(setTimeout(function () {\r\n            toEntityView();\r\n        }, 1000));\r\n        \r\n    } else {\r\n        if (primaryControl.getAttribute(\"new_city\").getValue() == null || primaryControl.getAttribute(\"new_city\").getValue() == undefined)\r\n            message += \"\\n Город\";\r\n        if (primaryControl.getAttribute(\"new_region\").getValue() == null || primaryControl.getAttribute(\"new_region\").getValue() == undefined)\r\n            message += \"\\n Регион\";\r\n        if (primaryControl.getAttribute(\"new_email\").getValue() == null || primaryControl.getAttribute(\"new_email\").getValue() == undefined)\r\n            message += \"\\n Основной email\";       \r\n        Xrm.Navigation.openAlertDialog(message);\r\n    }\r\n}\r\nfunction toEntityView() {\r\n    var pageInput = {\r\n        pageType: \"entitylist\",\r\n        entityName: \"myxrm_contact\"\r\n    };\r\n    Xrm.Navigation.navigateTo(pageInput)\r\n}\r\n\n\n//# sourceURL=webpack://WebResources/./Webresources/src/SaveAndClose.js?");

/***/ }),

/***/ "./Webresources/src/iframeAnnotation.js":
/*!**********************************************!*\
  !*** ./Webresources/src/iframeAnnotation.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("﻿\r\n__webpack_require__(/*! ./Style.css */ \"./Webresources/src/Style.css\")\r\nfunction GetAnnotations() {\r\n    try {\r\n        var parent = window.parent;\r\n        var contId = parent.Xrm.Page.data.entity.getId()\r\n        var Entity = \"annotation\";\r\n        var Select = \"?$select=_objectid_value, notetext, subject, annotationid\";\r\n        var Filter = \"&$filter=_objectid_value eq '\" + contId + \"'\";\r\n        parent.Xrm.WebApi.retrieveMultipleRecords(Entity, Select + Filter).then(\r\n            function success(result) {\r\n                if (result != null) {\r\n                    WriteAnnotation(result.entities);\r\n                }\r\n            }\r\n        );\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\r\nfunction WriteAnnotation(result) {\r\n    let list = document.getElementById(\"myList\");\r\n\r\n    result.forEach((item) => {\r\n        let tr = document.createElement(\"tr\");\r\n        let td = document.createElement(\"td\");\r\n        let td2 = document.createElement(\"td\");\r\n        let td3 = document.createElement(\"td\");\r\n        let button = document.createElement(\"button\");\r\n\r\n        td.innerText = item.subject;        \r\n        td2.innerHTML = item.notetext;\r\n        button.innerText = \"Удалить\";\r\n\r\n        tr.setAttribute(\"class\", \"cell\");\r\n        td.setAttribute(\"class\", \"cell\");\r\n        td2.setAttribute(\"class\", \"cell2\");\r\n        td3.setAttribute(\"class\", \"cell\");\r\n        td3.setAttribute(\"align\", \"center\");\r\n        button.setAttribute(\"value\", item.annotationid);\r\n        button.setAttribute(\"onclick\", \"WebResources.Delete(this.value)\");\r\n\r\n        td3.appendChild(button);\r\n        list.appendChild(tr);\r\n        list.appendChild(td);\r\n        list.appendChild(td2);\r\n        list.appendChild(td3);\r\n    });\r\n}\r\nfunction DeleteAnno(recordId) {\r\n    var parent = window.parent;\r\n    parent.Xrm.WebApi.deleteRecord(\"annotation\", recordId).then(function successCallback() { location.reload(true) });\r\n}\r\n\r\nfunction IframeRefresh() {\r\n    Xrm.Page.getControl(\"IFRAME_annotation\").getObject().contentWindow.location.reload()\r\n}\r\n\r\nmodule.exports = {\r\n    Anno: function () {\r\n        GetAnnotations();\r\n    },\r\n    Delete: function (recordId) {\r\n        DeleteAnno(recordId);\r\n    },\r\n    Refresh: function () {\r\n        IframeRefresh();\r\n    },\r\n};\r\n\r\n\n\n//# sourceURL=webpack://WebResources/./Webresources/src/iframeAnnotation.js?");

/***/ }),

/***/ "./Webresources/src/regionAuto.js":
/*!****************************************!*\
  !*** ./Webresources/src/regionAuto.js ***!
  \****************************************/
/***/ (() => {

eval("﻿function regionAuto() {\r\n    try {        \r\n        if (Xrm.Page.getAttribute(\"new_city\").getValue() != null && Xrm.Page.getAttribute(\"new_city\").getValue() != undefined) {\r\n            var City = Xrm.Page.getAttribute(\"new_city\").getValue();\r\n            var EntityCity = \"new_mycity\";\r\n            var SelectCity = \"?$select=new_cityname,_new_regionlookup_value\";\r\n            var FilterCity = \"&$filter=new_cityname eq '\" + City[0].name + \"'\";\r\n            Xrm.WebApi.retrieveMultipleRecords(EntityCity, SelectCity + FilterCity).then(\r\n                function success(result) {\r\n                    if (result != null) {\r\n                        GetRegion(result.entities[0])\r\n                    }\r\n                }                \r\n            );            \r\n        }\r\n        else {\r\n            return;\r\n        }\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\r\nfunction GetRegion(CityResult) {\r\n    try {\r\n        var regionLookup = [];\r\n        regionLookup[0] = new Object();\r\n        regionLookup[0].id = CityResult[\"_new_regionlookup_value\"];\r\n        regionLookup[0].name = CityResult[\"_new_regionlookup_value@OData.Community.Display.V1.FormattedValue\"];\r\n        regionLookup[0].entityType = \"new_region\";\r\n        Xrm.Page.getAttribute(\"new_region\").setValue(regionLookup);\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\n\n//# sourceURL=webpack://WebResources/./Webresources/src/regionAuto.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./Webresources/src/Style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./Webresources/src/Style.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n    background: linear-gradient(to bottom right, #FFA49D, #C6FFFC);\\r\\n    background-size: cover;\\r\\n    font-family: cursive;\\r\\n    font-style: initial;\\r\\n}\\r\\n.table {\\r\\n    border-style: inset;\\r\\n    padding: 4px;\\r\\n    border-radius: 10px;\\r\\n    width: 100%;\\r\\n}\\r\\n.cell {\\r\\n    border-style: inset;\\r\\n    padding: 2px;\\r\\n    border-radius: 5px;\\r\\n    text-align: center;\\r\\n    font-size: small;\\r\\n    width: 25%;\\r\\n}\\r\\n.cell2 {\\r\\n    border-style: inset;\\r\\n    padding: 2px;\\r\\n    border-radius: 5px;\\r\\n    text-align: center;\\r\\n    font-size: small;\\r\\n    width: 50%;\\r\\n}\\r\\n\\r\\n    \\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://WebResources/./Webresources/src/Style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://WebResources/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./Webresources/src/Style.css":
/*!************************************!*\
  !*** ./Webresources/src/Style.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Style.css */ \"./node_modules/css-loader/dist/cjs.js!./Webresources/src/Style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://WebResources/./Webresources/src/Style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://WebResources/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://WebResources/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://WebResources/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://WebResources/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://WebResources/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://WebResources/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./Webresources/src/FieldsChecker.js");
/******/ 	__webpack_require__("./Webresources/src/regionAuto.js");
/******/ 	__webpack_require__("./Webresources/src/SaveAndClose.js");
/******/ 	__webpack_require__("./Webresources/src/FilterLookup.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./Webresources/src/iframeAnnotation.js");
/******/ 	WebResources = __webpack_exports__;
/******/ 	
/******/ })()
;