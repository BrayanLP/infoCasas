webpackHotUpdate_N_E("pages/index",{

/***/ "./components/add.js":
/*!***************************!*\
  !*** ./components/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/brayanlaureanopaucar/Proyectos/infocasas-frontend-challenge/components/add.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.withConfig({\n  displayName: \"add__Input\",\n  componentId: \"sc-1f3dj4a-0\"\n})([\"border:0;outline:none;font-size:18px;color:black;\"]);\n_c = Input;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.withConfig({\n  displayName: \"add__Form\",\n  componentId: \"sc-1f3dj4a-1\"\n})([\"border:1px solid #666;padding:1rem;border-radius:10px;display:grid;grid-template-columns:1fr 150px;gap:15px;\"]);\n_c2 = Form;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n  displayName: \"add__Button\",\n  componentId: \"sc-1f3dj4a-2\"\n})([\"border:none;background:#db4c3f;padding:1rem 0;border-radius:10px;color:white;font-weight:bold;cursor:pointer;\"]);\n_c3 = Button;\n\nvar Add = function Add(props) {\n  _s();\n\n  // localStorage.getItem('TITLE') \n  // localStorage.getItem('ID') \n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {}, []);\n  return __jsx(Form, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(Input, {\n    value: props.title,\n    onChange: props.getChange,\n    type: \"text\",\n    placeholder: \"Nombre de la tarea\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(Button, {\n    onClick: props.onSubmit,\n    disabled: props.title.length > 0 ? false : true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, \"Agregar tarea\"));\n};\n\n_s(Add, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c4 = Add;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Add);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Input\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Add\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGQuanM/MTVjYiJdLCJuYW1lcyI6WyJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwiRm9ybSIsImZvcm0iLCJCdXR0b24iLCJidXR0b24iLCJBZGQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInRpdGxlIiwiZ2V0Q2hhbmdlIiwib25TdWJtaXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxLQUFWO0VBQUE7RUFBQTtBQUFBLHlEQUFYO0tBQU1GLEs7QUFNTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEsb0hBQVY7TUFBTUQsSTtBQVNOLElBQU1FLE1BQU0sR0FBR0oseURBQU0sQ0FBQ0ssTUFBVjtFQUFBO0VBQUE7QUFBQSxxSEFBWjtNQUFNRCxNOztBQVVOLElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUNyQjtFQUNBO0VBR0FDLHVEQUFTLENBQUcsWUFBSSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7RUFLQSxPQUNFLE1BQUMsSUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxLQUFEO0lBQU8sS0FBSyxFQUFFRCxLQUFLLENBQUNFLEtBQXBCO0lBQTJCLFFBQVEsRUFBRUYsS0FBSyxDQUFDRyxTQUEzQztJQUFzRCxJQUFJLEVBQUMsTUFBM0Q7SUFBa0UsV0FBVyxFQUFDLG9CQUE5RTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFFRSxNQUFDLE1BQUQ7SUFBUSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksUUFBdkI7SUFBaUMsUUFBUSxFQUFFSixLQUFLLENBQUNFLEtBQU4sQ0FBWUcsTUFBWixHQUFxQixDQUFyQixHQUF5QixLQUF6QixHQUFnQyxJQUEzRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLG1CQUZGLENBREY7QUFNRCxDQWhCRDs7R0FBTU4sRzs7TUFBQUEsRztBQWtCU0Esa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2FkZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuYDtcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTUwcHg7XG4gIGdhcDogMTVweDtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2RiNGMzZjtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBBZGQgPSAocHJvcHMpID0+IHtcbiAgLy8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RJVExFJykgXG4gIC8vIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdJRCcpIFxuXG5cbiAgdXNlRWZmZWN0ICggKCk9PntcblxuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxGb3JtPlxuICAgICAgPElucHV0IHZhbHVlPXtwcm9wcy50aXRsZX0gb25DaGFuZ2U9e3Byb3BzLmdldENoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZSBkZSBsYSB0YXJlYVwiIC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uU3VibWl0fSBkaXNhYmxlZD17cHJvcHMudGl0bGUubGVuZ3RoID4gMCA/IGZhbHNlOiB0cnVlfT5BZ3JlZ2FyIHRhcmVhPC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/add.js\n");

/***/ })

})