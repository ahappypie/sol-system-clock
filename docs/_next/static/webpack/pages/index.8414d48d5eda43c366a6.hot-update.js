webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Body */ \"./components/Body.js\");\n\n\nvar _jsxFileName = \"/Users/bbagdasarian/sol-system-clock/pages/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar BODIES = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'];\n\n\n\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var data = _ref.data,\n      timestamp = _ref.timestamp;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(data),\n      delayData = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(timestamp),\n      lastUpdated = _useState2[0],\n      setLastUpdated = _useState2[1];\n\n  var timer = useNewTimer(new Date());\n  var selectedBody = delayData[BODIES.indexOf('EARTH')];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: selectedBody.entries.map(function (entry) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Body__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          entry: entry,\n          timer: timer\n        }, entry.body, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: \"pt-6 text-center text-xs\",\n      children: [\"Last Updated \", new Date(lastUpdated).toLocaleString()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"v4Pzcp3W1qlMSQDIytN9bjyh9TM=\", false, function () {\n  return [useNewTimer];\n});\n\n_c = Home;\n\nfunction useNewTimer(currentDate) {\n  _s2();\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(currentDate),\n      date = _useState3[0],\n      setDate = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var timerID = setInterval(function () {\n      return tick();\n    }, 1000);\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return date;\n}\n\n_s2(useNewTimer, \"KzmidnhCLdth6QpLTQhXJv4srh4=\");\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJCT0RJRVMiLCJIb21lIiwiZGF0YSIsInRpbWVzdGFtcCIsInVzZVN0YXRlIiwiZGVsYXlEYXRhIiwic2V0RGF0YSIsImxhc3RVcGRhdGVkIiwic2V0TGFzdFVwZGF0ZWQiLCJ0aW1lciIsInVzZU5ld1RpbWVyIiwiRGF0ZSIsInNlbGVjdGVkQm9keSIsImluZGV4T2YiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJib2R5IiwidG9Mb2NhbGVTdHJpbmciLCJjdXJyZW50RGF0ZSIsImRhdGUiLCJzZXREYXRlIiwidXNlRWZmZWN0IiwidGltZXJJRCIsInNldEludGVydmFsIiwidGljayIsImNsZWFudXAiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLENBQ1gsU0FEVyxFQUVYLE9BRlcsRUFHWCxPQUhXLEVBSVgsTUFKVyxFQUtYLFNBTFcsRUFNWCxRQU5XLEVBT1gsUUFQVyxFQVFYLFNBUlcsQ0FBZjtBQVdBO0FBQ0E7O0FBR0EsU0FBU0MsSUFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUNGLElBQUQsQ0FETjtBQUFBLE1BQ3hCRyxTQUR3QjtBQUFBLE1BQ2JDLE9BRGE7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUNELFNBQUQsQ0FGZjtBQUFBLE1BRXhCSSxXQUZ3QjtBQUFBLE1BRVhDLGNBRlc7O0FBRy9CLE1BQU1DLEtBQUssR0FBR0MsV0FBVyxDQUFDLElBQUlDLElBQUosRUFBRCxDQUF6QjtBQUNBLE1BQU1DLFlBQVksR0FBR1AsU0FBUyxDQUFDTCxNQUFNLENBQUNhLE9BQVAsQ0FBZSxPQUFmLENBQUQsQ0FBOUI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQ0tELFlBQVksQ0FBQ0UsT0FBYixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsS0FBSztBQUFBLDRCQUMzQixxRUFBQyx3REFBRDtBQUF1QixlQUFLLEVBQUVBLEtBQTlCO0FBQXFDLGVBQUssRUFBRVA7QUFBNUMsV0FBV08sS0FBSyxDQUFDQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQyQjtBQUFBLE9BQTlCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUk7QUFBUSxlQUFTLEVBQUMsMEJBQWxCO0FBQUEsa0NBQTJELElBQUlOLElBQUosQ0FBU0osV0FBVCxFQUFzQlcsY0FBdEIsRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0FmUWpCLEk7VUFHU1MsVzs7O0tBSFRULEk7O0FBaUJULFNBQVNTLFdBQVQsQ0FBcUJTLFdBQXJCLEVBQWtDO0FBQUE7O0FBQUEsbUJBQ05mLHNEQUFRLENBQUNlLFdBQUQsQ0FERjtBQUFBLE1BQ3ZCQyxJQUR1QjtBQUFBLE1BQ2pCQyxPQURpQjs7QUFHOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE9BQU8sR0FBR0MsV0FBVyxDQUFFO0FBQUEsYUFBTUMsSUFBSSxFQUFWO0FBQUEsS0FBRixFQUFnQixJQUFoQixDQUF6QjtBQUNBLFdBQU8sU0FBU0MsT0FBVCxHQUFtQjtBQUN0QkMsbUJBQWEsQ0FBQ0osT0FBRCxDQUFiO0FBQ0gsS0FGRDtBQUdILEdBTFEsQ0FBVDs7QUFPQSxXQUFTRSxJQUFULEdBQWdCO0FBQ1pKLFdBQU8sQ0FBQyxJQUFJVixJQUFKLEVBQUQsQ0FBUDtBQUNIOztBQUVELFNBQU9TLElBQVA7QUFDSDs7SUFmUVYsVzs7O0FBNkRNVCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQk9ESUVTID0gW1xuICAgICdNRVJDVVJZJyxcbiAgICAnVkVOVVMnLFxuICAgICdFQVJUSCcsXG4gICAgJ01BUlMnLFxuICAgICdKVVBJVEVSJyxcbiAgICAnU0FUVVJOJyxcbiAgICAnVVJBTlVTJyxcbiAgICAnTkVQVFVORSdcbl1cblxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQm9keSdcbmltcG9ydCB7ZGlzcGxheU5hbWV9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxcIjtcblxuZnVuY3Rpb24gSG9tZSh7IGRhdGEsIHRpbWVzdGFtcCB9KSB7XG4gICAgY29uc3QgW2RlbGF5RGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShkYXRhKVxuICAgIGNvbnN0IFtsYXN0VXBkYXRlZCwgc2V0TGFzdFVwZGF0ZWRdID0gdXNlU3RhdGUodGltZXN0YW1wKVxuICAgIGNvbnN0IHRpbWVyID0gdXNlTmV3VGltZXIobmV3IERhdGUoKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRCb2R5ID0gZGVsYXlEYXRhW0JPRElFUy5pbmRleE9mKCdFQVJUSCcpXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRCb2R5LmVudHJpZXMubWFwKGVudHJ5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJvZHkga2V5PXtlbnRyeS5ib2R5fSBlbnRyeT17ZW50cnl9IHRpbWVyPXt0aW1lcn0vPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInB0LTYgdGV4dC1jZW50ZXIgdGV4dC14c1wiPkxhc3QgVXBkYXRlZCB7bmV3IERhdGUobGFzdFVwZGF0ZWQpLnRvTG9jYWxlU3RyaW5nKCl9PC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gdXNlTmV3VGltZXIoY3VycmVudERhdGUpIHtcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShjdXJyZW50RGF0ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgdGltZXJJRCA9IHNldEludGVydmFsKCAoKSA9PiB0aWNrKCksIDEwMDAgKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySUQpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7IC8vMTU2OTYwOTE2OTMzN1xuICAgIGNvbnN0IGdycGMgPSByZXF1aXJlKCdAZ3JwYy9ncnBjLWpzJyk7XG4gICAgY29uc3QgcHJvdG9Mb2FkZXIgPSByZXF1aXJlKCdAZ3JwYy9wcm90by1sb2FkZXInKTtcbiAgICBjb25zdCBwa2dEZWYgPSBwcm90b0xvYWRlci5sb2FkU3luYyhcbiAgICAgICAgJy91c2Vycy9iYmFnZGFzYXJpYW4vbGlnaHQtZGVsYXkvcHJvdG9zL2RlbGF5LnByb3RvJyxcbiAgICAgICAge2tlZXBDYXNlOiB0cnVlLFxuICAgICAgICAgICAgbG9uZ3M6IFN0cmluZyxcbiAgICAgICAgICAgIGVudW1zOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0czogdHJ1ZSxcbiAgICAgICAgICAgIG9uZW9mczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gZ3JwYy5sb2FkUGFja2FnZURlZmluaXRpb24ocGtnRGVmKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBkZXNjcmlwdG9yLkxpZ2h0RGVsYXkoJ2xvY2FsaG9zdDo1MDA1MCcsIGdycGMuY3JlZGVudGlhbHMuY3JlYXRlSW5zZWN1cmUoKSk7XG5cbiAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgIEJPRElFUy5mb3JFYWNoKGJvZHkgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjbGllbnQuZ2V0QWxsRGVsYXkoe3RpbWVzdGFtcDogdGltZXN0YW1wLCBvcmlnaW46IGJvZHl9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVudHJpZXMucHVzaCh7Ym9keTogYm9keSwgZGVsYXk6IDB9KVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lbnRyaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCT0RJRVMuaW5kZXhPZihhLmJvZHkpIC0gQk9ESUVTLmluZGV4T2YoYi5ib2R5KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtpZDogYm9keSwgaW5kZXg6IEJPRElFUy5pbmRleE9mKGJvZHkpLCBuYW1lOiBkaXNwbGF5TmFtZShib2R5KSwgZW50cmllczogcmVzcG9uc2UuZW50cmllc30pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmVxdWVzdHMucHVzaChyZXEpO1xuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHRpbWVzdGFtcFxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})