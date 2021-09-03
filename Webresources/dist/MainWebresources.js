/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Webresources/src/FieldsChecker.js":
/*!*******************************************!*\
  !*** ./Webresources/src/FieldsChecker.js ***!
  \*******************************************/
/***/ (() => {

eval("﻿function FieldsChecker(primaryControl) {\r\n    var message = \"Введите данные в поля: \"\r\n    if (primaryControl.getAttribute(\"new_city\").getValue() != null && primaryControl.getAttribute(\"new_city\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_region\").getValue() != null && primaryControl.getAttribute(\"new_region\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_email\").getValue() != null && primaryControl.getAttribute(\"new_email\").getValue() != undefined) {\r\n        primaryControl.data.save()\r\n    } else {\r\n        if (primaryControl.getAttribute(\"new_city\").getValue() == null || primaryControl.getAttribute(\"new_city\").getValue() == undefined)\r\n            message += \"\\n Город\";\r\n        if (primaryControl.getAttribute(\"new_region\").getValue() == null || primaryControl.getAttribute(\"new_region\").getValue() == undefined)\r\n            message += \"\\n Регион\";\r\n        if (primaryControl.getAttribute(\"new_email\").getValue() == null || primaryControl.getAttribute(\"new_email\").getValue() == undefined)\r\n            message += \"\\n Основной email\";\r\n        Xrm.Navigation.openAlertDialog(message);        \r\n    }\r\n}\n\n//# sourceURL=webpack://PluginsCRM/./Webresources/src/FieldsChecker.js?");

/***/ }),

/***/ "./Webresources/src/FilterLookup.js":
/*!******************************************!*\
  !*** ./Webresources/src/FilterLookup.js ***!
  \******************************************/
/***/ (() => {

eval("﻿function filterLookup() {\r\n    try {\r\n        if (Xrm.Page.getControl(\"new_region\") != null && Xrm.Page.getControl(\"new_region\") != undefined) {\r\n            Xrm.Page.getControl(\"new_city\").addPreSearch(function () {\r\n                addCustomeLookupFilter();\r\n            });\r\n        } \r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\r\nfunction addCustomeLookupFilter() {    \r\n    try {        \r\n        var Region = Xrm.Page.getAttribute(\"new_region\").getValue();\r\n        if (Region != null && Region != undefined) {\r\n            fetchXml = \"<filter type='and'><condition attribute='new_region' operator='like' value='%\" + Region[0].name + \"%' /></filter>\";\r\n            Xrm.Page.getControl(\"new_city\").addCustomFilter(fetchXml);\r\n        }\r\n    } catch (e) {\r\n            throw new Error(e.Message);\r\n        }\r\n    }\r\n\n\n//# sourceURL=webpack://PluginsCRM/./Webresources/src/FilterLookup.js?");

/***/ }),

/***/ "./Webresources/src/SaveAndClose.js":
/*!******************************************!*\
  !*** ./Webresources/src/SaveAndClose.js ***!
  \******************************************/
/***/ (() => {

eval("﻿function SaveAndClose(primaryControl) {\r\n    var message = \"Заполните следующие поля: \"\r\n    if (primaryControl.getAttribute(\"new_city\").getValue() != null && primaryControl.getAttribute(\"new_city\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_region\").getValue() != null && primaryControl.getAttribute(\"new_region\").getValue() != undefined\r\n        && primaryControl.getAttribute(\"new_email\").getValue() != null && primaryControl.getAttribute(\"new_email\").getValue() != undefined) {\r\n       \r\n        primaryControl.data.save().then(setTimeout(function () {\r\n            toEntityView();\r\n        }, 1000));\r\n        \r\n    } else {\r\n        if (primaryControl.getAttribute(\"new_city\").getValue() == null || primaryControl.getAttribute(\"new_city\").getValue() == undefined)\r\n            message += \"\\n Город\";\r\n        if (primaryControl.getAttribute(\"new_region\").getValue() == null || primaryControl.getAttribute(\"new_region\").getValue() == undefined)\r\n            message += \"\\n Регион\";\r\n        if (primaryControl.getAttribute(\"new_email\").getValue() == null || primaryControl.getAttribute(\"new_email\").getValue() == undefined)\r\n            message += \"\\n Основной email\";       \r\n        Xrm.Navigation.openAlertDialog(message);\r\n    }\r\n}\r\nfunction toEntityView() {\r\n    var pageInput = {\r\n        pageType: \"entitylist\",\r\n        entityName: \"myxrm_contact\"\r\n    };\r\n    Xrm.Navigation.navigateTo(pageInput)\r\n}\r\n\n\n//# sourceURL=webpack://PluginsCRM/./Webresources/src/SaveAndClose.js?");

/***/ }),

/***/ "./Webresources/src/regionAuto.js":
/*!****************************************!*\
  !*** ./Webresources/src/regionAuto.js ***!
  \****************************************/
/***/ (() => {

eval("﻿function regionAuto() {\r\n    try {        \r\n        if (Xrm.Page.getAttribute(\"new_city\").getValue() != null && Xrm.Page.getAttribute(\"new_city\").getValue() != undefined) {\r\n            var City = Xrm.Page.getAttribute(\"new_city\").getValue();\r\n            var EntityCity = \"new_mycity\";\r\n            var SelectCity = \"?$select=new_cityname,_new_regionlookup_value\";\r\n            var FilterCity = \"&$filter=new_cityname eq '\" + City[0].name + \"'\";\r\n            Xrm.WebApi.retrieveMultipleRecords(EntityCity, SelectCity + FilterCity).then(\r\n                function success(result) {\r\n                    if (result != null) {\r\n                        GetRegion(result.entities[0])\r\n                    }\r\n                }                \r\n            );            \r\n        }\r\n        else {\r\n            return;\r\n        }\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\r\nfunction GetRegion(CityResult) {\r\n    try {\r\n        var regionLookup = [];\r\n        regionLookup[0] = new Object();\r\n        regionLookup[0].id = CityResult[\"_new_regionlookup_value\"];\r\n        regionLookup[0].name = CityResult[\"_new_regionlookup_value@OData.Community.Display.V1.FormattedValue\"];\r\n        regionLookup[0].entityType = \"new_region\";\r\n        Xrm.Page.getAttribute(\"new_region\").setValue(regionLookup);\r\n    } catch (e) {\r\n        throw new Error(e.Message);\r\n    }\r\n}\n\n//# sourceURL=webpack://PluginsCRM/./Webresources/src/regionAuto.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./Webresources/src/FieldsChecker.js"]();
/******/ 	__webpack_modules__["./Webresources/src/FilterLookup.js"]();
/******/ 	__webpack_modules__["./Webresources/src/regionAuto.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Webresources/src/SaveAndClose.js"]();
/******/ 	
/******/ })()
;