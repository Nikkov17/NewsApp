(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/controllers/errornotification.js":
/*!**********************************************!*\
  !*** ./app/controllers/errornotification.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../constants */ \"./app/constants.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _constants) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  var _constants2 = _interopRequireDefault(_constants);\n\n  function _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n      default: obj\n    };\n  }\n\n  function _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  }\n\n  function _defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n\n  function _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n  }\n\n  var ErrorsHandler = function () {\n    function ErrorsHandler() {\n      _classCallCheck(this, ErrorsHandler);\n    }\n\n    _createClass(ErrorsHandler, [{\n      key: \"errorNotification\",\n      value: function errorNotification() {\n        _constants2.default.ERRORWINDOW.innerText = 'Entered news channel nonexistent or unavailable!';\n\n        _constants2.default.ERRORWINDOW.classList.add('show');\n      }\n    }]);\n\n    return ErrorsHandler;\n  }();\n\n  var errorMessage = new ErrorsHandler();\n  Object.freeze(errorMessage);\n  exports.default = errorMessage;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./app/controllers/errornotification.js?");

/***/ })

}]);