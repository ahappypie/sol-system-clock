webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/bbagdasarian/sol-system-clock/pages/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar displayName = function displayName(caps) {\n  return caps.charAt(0) + caps.substring(1).toLowerCase();\n};\n\n\n\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var data = _ref.data;\n  var timer = useNewTimer(new Date());\n  var selectedBody = 'EARTH';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: data.map(function (body) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [\"Body: \", displayName(body.name), \" is in orbital position \", body.index + 1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: body.entries.map(function (entry) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: [\"Delay to \", displayName(entry.body), \" is \", entry.delay, \" ms\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"XJiqE+jhn9MfMXIwJrR9tL3cALA=\", false, function () {\n  return [useNewTimer];\n});\n\n_c = Home;\n\nfunction useNewTimer(currentDate) {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(currentDate),\n      date = _useState[0],\n      setDate = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var timerID = setInterval(function () {\n      return tick();\n    }, 1000);\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return date;\n}\n\n_s2(useNewTimer, \"KzmidnhCLdth6QpLTQhXJv4srh4=\");\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJkaXNwbGF5TmFtZSIsImNhcHMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkhvbWUiLCJkYXRhIiwidGltZXIiLCJ1c2VOZXdUaW1lciIsIkRhdGUiLCJzZWxlY3RlZEJvZHkiLCJtYXAiLCJib2R5IiwibmFtZSIsImluZGV4IiwiZW50cmllcyIsImVudHJ5IiwiZGVsYXkiLCJjdXJyZW50RGF0ZSIsInVzZVN0YXRlIiwiZGF0ZSIsInNldERhdGUiLCJ1c2VFZmZlY3QiLCJ0aW1lcklEIiwic2V0SW50ZXJ2YWwiLCJ0aWNrIiwiY2xlYW51cCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLElBQUksRUFBSTtBQUN4QixTQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxDQUFaLElBQWlCRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxDQUFmLEVBQWtCQyxXQUFsQixFQUF4QjtBQUNILENBRkQ7O0FBSUE7O0FBRUEsU0FBU0MsSUFBVCxPQUF3QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNwQixNQUFNQyxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FBekI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsT0FBckI7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsZ0JBQ0tKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSw0QkFDTjtBQUFBLCtCQUNXWixXQUFXLENBQUNZLElBQUksQ0FBQ0MsSUFBTixDQUR0Qiw4QkFDMkRELElBQUksQ0FBQ0UsS0FBTCxHQUFhLENBRHhFLGVBRUk7QUFBQSxzQkFDS0YsSUFBSSxDQUFDRyxPQUFMLENBQWFKLEdBQWIsQ0FBaUIsVUFBQ0ssS0FBRDtBQUFBLGtDQUNkO0FBQUEsd0NBQWNoQixXQUFXLENBQUNnQixLQUFLLENBQUNKLElBQVAsQ0FBekIsVUFBMkNJLEtBQUssQ0FBQ0MsS0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURjO0FBQUEsYUFBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETTtBQUFBLE9BQVQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQW5CUVosSTtVQUNTRyxXOzs7S0FEVEgsSTs7QUFxQlQsU0FBU0csV0FBVCxDQUFxQlUsV0FBckIsRUFBa0M7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQ0QsV0FBRCxDQURGO0FBQUEsTUFDdkJFLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUc5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsT0FBTyxHQUFHQyxXQUFXLENBQUU7QUFBQSxhQUFNQyxJQUFJLEVBQVY7QUFBQSxLQUFGLEVBQWdCLElBQWhCLENBQXpCO0FBQ0EsV0FBTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCQyxtQkFBYSxDQUFDSixPQUFELENBQWI7QUFDSCxLQUZEO0FBR0gsR0FMUSxDQUFUOztBQU9BLFdBQVNFLElBQVQsR0FBZ0I7QUFDWkosV0FBTyxDQUFDLElBQUlaLElBQUosRUFBRCxDQUFQO0FBQ0g7O0FBRUQsU0FBT1csSUFBUDtBQUNIOztJQWZRWixXOzs7QUF3RE1ILG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCT0RJRVMgPSBbXG4gICAgJ01FUkNVUlknLFxuICAgICdWRU5VUycsXG4gICAgJ0VBUlRIJyxcbiAgICAnTUFSUycsXG4gICAgJ0pVUElURVInLFxuICAgICdTQVRVUk4nLFxuICAgICdVUkFOVVMnLFxuICAgICdORVBUVU5FJ1xuXVxuXG5jb25zdCBkaXNwbGF5TmFtZSA9IGNhcHMgPT4ge1xuICAgIHJldHVybiBjYXBzLmNoYXJBdCgwKSArIGNhcHMuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKClcbn1cblxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICAgIGNvbnN0IHRpbWVyID0gdXNlTmV3VGltZXIobmV3IERhdGUoKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRCb2R5ID0gJ0VBUlRIJ1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChib2R5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJvZHk6IHtkaXNwbGF5TmFtZShib2R5Lm5hbWUpfSBpcyBpbiBvcmJpdGFsIHBvc2l0aW9uIHtib2R5LmluZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9keS5lbnRyaWVzLm1hcCgoZW50cnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRlbGF5IHRvIHtkaXNwbGF5TmFtZShlbnRyeS5ib2R5KX0gaXMge2VudHJ5LmRlbGF5fSBtczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VOZXdUaW1lcihjdXJyZW50RGF0ZSkge1xuICAgIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKGN1cnJlbnREYXRlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCB0aW1lcklEID0gc2V0SW50ZXJ2YWwoICgpID0+IHRpY2soKSwgMTAwMCApO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJRCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTsgLy8xNTY5NjA5MTY5MzM3XG4gICAgY29uc3QgZ3JwYyA9IHJlcXVpcmUoJ0BncnBjL2dycGMtanMnKTtcbiAgICBjb25zdCBwcm90b0xvYWRlciA9IHJlcXVpcmUoJ0BncnBjL3Byb3RvLWxvYWRlcicpO1xuICAgIGNvbnN0IHBrZ0RlZiA9IHByb3RvTG9hZGVyLmxvYWRTeW5jKFxuICAgICAgICAnL3VzZXJzL2JiYWdkYXNhcmlhbi9saWdodC1kZWxheS9wcm90b3MvZGVsYXkucHJvdG8nLFxuICAgICAgICB7a2VlcENhc2U6IHRydWUsXG4gICAgICAgICAgICBsb25nczogU3RyaW5nLFxuICAgICAgICAgICAgZW51bXM6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHRzOiB0cnVlLFxuICAgICAgICAgICAgb25lb2ZzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBncnBjLmxvYWRQYWNrYWdlRGVmaW5pdGlvbihwa2dEZWYpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IGRlc2NyaXB0b3IuTGlnaHREZWxheSgnbG9jYWxob3N0OjUwMDUxJywgZ3JwYy5jcmVkZW50aWFscy5jcmVhdGVJbnNlY3VyZSgpKTtcblxuICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgQk9ESUVTLmZvckVhY2goYm9keSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNsaWVudC5nZXRBbGxEZWxheSh7dGltZXN0YW1wOiB0aW1lc3RhbXAsIG9yaWdpbjogYm9keX0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7aWQ6IGJvZHksIGluZGV4OiBCT0RJRVMuaW5kZXhPZihib2R5KSwgbmFtZTogZGlzcGxheU5hbWUoYm9keSksIGVudHJpZXM6IHJlc3BvbnNlLmVudHJpZXN9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})