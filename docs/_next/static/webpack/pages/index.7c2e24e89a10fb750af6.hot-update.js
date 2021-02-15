webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Body; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./components/util.js\");\n\nvar _jsxFileName = \"/Users/bbagdasarian/sol-system-clock/components/Body.js\";\n\nfunction Body(_ref) {\n  var timer = _ref.timer,\n      entry = _ref.entry;\n  var imgPath = entry.body.toLowerCase() + '.svg';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n    className: \"max-w-md mx-auto md:flex p-8 md:p-0\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: imgPath,\n      className: \"md:h-auto mx-auto\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"pt-6 md:p-8 md:text-left space-y-2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-lg font-semibold\",\n        children: Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"displayName\"])(entry.body)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: new Date(timer.getTime() - entry.delay).toLocaleString()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), entry.delay > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-red-500\",\n        children: [\"-\", Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"msToReadableTime\"])(entry.delay)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 23\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-green-500\",\n        children: \"You are here!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 23\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n_c = Body;\n\nvar _c;\n\n$RefreshReg$(_c, \"Body\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2R5LmpzP2ZlY2MiXSwibmFtZXMiOlsiQm9keSIsInRpbWVyIiwiZW50cnkiLCJpbWdQYXRoIiwiYm9keSIsInRvTG93ZXJDYXNlIiwiZGlzcGxheU5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsImRlbGF5IiwidG9Mb2NhbGVTdHJpbmciLCJtc1RvUmVhZGFibGVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULE9BQThCO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQ3pDLE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVdDLFdBQVgsS0FBMkIsTUFBM0M7QUFDQSxzQkFDSTtBQUFRLGFBQVMsRUFBQyxxQ0FBbEI7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRUYsT0FBVjtBQUFtQixlQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsb0NBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsdUJBQWI7QUFBQSxrQkFBc0NHLHlEQUFXLENBQUNKLEtBQUssQ0FBQ0UsSUFBUDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFJLElBQUlHLElBQUosQ0FBU04sS0FBSyxDQUFDTyxPQUFOLEtBQWtCTixLQUFLLENBQUNPLEtBQWpDLEVBQXdDQyxjQUF4QztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdLUixLQUFLLENBQUNPLEtBQU4sR0FBYyxDQUFkLGdCQUNLO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUEsd0JBQThCRSw4REFBZ0IsQ0FBQ1QsS0FBSyxDQUFDTyxLQUFQLENBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURMLGdCQUVLO0FBQUcsaUJBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7S0FmdUJULEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvZHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Rpc3BsYXlOYW1lLCBtc1RvUmVhZGFibGVUaW1lfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvZHkoe3RpbWVyLCBlbnRyeX0pIHtcbiAgICBjb25zdCBpbWdQYXRoID0gZW50cnkuYm9keS50b0xvd2VyQ2FzZSgpICsgJy5zdmcnXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIG1kOmZsZXggcC04IG1kOnAtMFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGh9IGNsYXNzTmFtZT1cIm1kOmgtYXV0byBteC1hdXRvXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IG1kOnAtOCBtZDp0ZXh0LWxlZnQgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e2Rpc3BsYXlOYW1lKGVudHJ5LmJvZHkpfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57bmV3IERhdGUodGltZXIuZ2V0VGltZSgpIC0gZW50cnkuZGVsYXkpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgIHtlbnRyeS5kZWxheSA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj4te21zVG9SZWFkYWJsZVRpbWUoZW50cnkuZGVsYXkpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMFwiPllvdSBhcmUgaGVyZSE8L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmlndXJlPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Body.js\n");

/***/ })

})