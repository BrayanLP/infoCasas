webpackHotUpdate_N_E("pages/index",{

/***/ "./components/add.js":
/*!***************************!*\
  !*** ./components/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/brayanlaureanopaucar/Proyectos/infocasas-frontend-challenge/components/add.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.withConfig({\n  displayName: \"add__Input\",\n  componentId: \"sc-1f3dj4a-0\"\n})([\"border:0;outline:none;font-size:18px;color:black;\"]);\n_c = Input;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.withConfig({\n  displayName: \"add__Form\",\n  componentId: \"sc-1f3dj4a-1\"\n})([\"border:1px solid #666;padding:1rem;border-radius:10px;display:grid;grid-template-columns:1fr 150px;gap:15px;\"]);\n_c2 = Form;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n  displayName: \"add__Button\",\n  componentId: \"sc-1f3dj4a-2\"\n})([\"border:none;background:#db4c3f;padding:1rem 0;border-radius:10px;color:white;font-weight:bold;cursor:pointer;\"]);\n_c3 = Button;\n\nvar Add = function Add(props) {\n  _s();\n\n  localStorage.getItem('TITLE');\n  localStorage.getItem('ID');\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      id = _useState2[0],\n      setID = _useState2[1];\n\n  var getChange = function getChange(e) {\n    setTitle(e.target.value);\n  };\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    props.saveData(title);\n    setTitle('');\n  };\n\n  var pastText = function pastText(text) {\n    setTitle(text.title);\n    setID(text.id);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {}, []);\n  return __jsx(Form, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(Input, {\n    value: title,\n    onChange: getChange,\n    type: \"text\",\n    placeholder: \"Nombre de la tarea\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(Button, {\n    onClick: onSubmit,\n    disabled: title.length > 0 ? false : true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"Agregar tarea\"));\n};\n\n_s(Add, \"qOfVX4QBbLtggxluJKCgUa9LDCU=\");\n\n_c4 = Add;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Add);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Input\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Add\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGQuanM/MTVjYiJdLCJuYW1lcyI6WyJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwiRm9ybSIsImZvcm0iLCJCdXR0b24iLCJidXR0b24iLCJBZGQiLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJpZCIsInNldElEIiwiZ2V0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVEYXRhIiwicGFzdFRleHQiLCJ0ZXh0IiwidXNlRWZmZWN0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtFQUFBO0VBQUE7QUFBQSx5REFBWDtLQUFNRixLO0FBTU4sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLG9IQUFWO01BQU1ELEk7QUFTTixJQUFNRSxNQUFNLEdBQUdKLHlEQUFNLENBQUNLLE1BQVY7RUFBQTtFQUFBO0FBQUEscUhBQVo7TUFBTUQsTTs7QUFVTixJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7RUFBQTs7RUFDckJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQjtFQUNBRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckI7O0VBQ0EsZ0JBQTJCQyxzREFBUSxDQUFDLEVBQUQsQ0FBbkM7RUFBQSxJQUFPQyxLQUFQO0VBQUEsSUFBZUMsUUFBZjs7RUFDQSxpQkFBcUJGLHNEQUFRLENBQUMsRUFBRCxDQUE3QjtFQUFBLElBQU9HLEVBQVA7RUFBQSxJQUFZQyxLQUFaOztFQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBSztJQUNyQkosUUFBUSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDSCxDQUFELEVBQU07SUFDckJBLENBQUMsQ0FBQ0ksY0FBRjtJQUNBYixLQUFLLENBQUNjLFFBQU4sQ0FBZVYsS0FBZjtJQUNBQyxRQUFRLENBQUMsRUFBRCxDQUFSO0VBQ0QsQ0FKRDs7RUFNQSxJQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVE7SUFDdkJYLFFBQVEsQ0FBQ1csSUFBSSxDQUFDWixLQUFOLENBQVI7SUFDQUcsS0FBSyxDQUFDUyxJQUFJLENBQUNWLEVBQU4sQ0FBTDtFQUNELENBSEQ7O0VBS0FXLHVEQUFTLENBQUcsWUFBSSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7RUFLQSxPQUNFLE1BQUMsSUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxLQUFEO0lBQU8sS0FBSyxFQUFFYixLQUFkO0lBQXFCLFFBQVEsRUFBRUksU0FBL0I7SUFBMEMsSUFBSSxFQUFDLE1BQS9DO0lBQXNELFdBQVcsRUFBQyxvQkFBbEU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBRUUsTUFBQyxNQUFEO0lBQVEsT0FBTyxFQUFFSSxRQUFqQjtJQUEyQixRQUFRLEVBQUVSLEtBQUssQ0FBQ2MsTUFBTixHQUFlLENBQWYsR0FBbUIsS0FBbkIsR0FBMEIsSUFBL0Q7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxtQkFGRixDQURGO0FBTUQsQ0FoQ0Q7O0dBQU1uQixHOztNQUFBQSxHO0FBa0NTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWRkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG5gO1xuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNTBweDtcbiAgZ2FwOiAxNXB4O1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZGI0YzNmO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IEFkZCA9IChwcm9wcykgPT4ge1xuICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVElUTEUnKSBcbiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0lEJykgXG4gIGNvbnN0IFt0aXRsZSAsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbaWQgLCBzZXRJRF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBnZXRDaGFuZ2UgPSAoZSk9PntcbiAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9wcy5zYXZlRGF0YSh0aXRsZSk7XG4gICAgc2V0VGl0bGUoJycpO1xuICB9XG5cbiAgY29uc3QgcGFzdFRleHQgPSAodGV4dCk9PntcbiAgICBzZXRUaXRsZSh0ZXh0LnRpdGxlKVxuICAgIHNldElEKHRleHQuaWQpXG4gIH0gIFxuXG4gIHVzZUVmZmVjdCAoICgpPT57XG5cbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybT5cbiAgICAgIDxJbnB1dCB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtnZXRDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21icmUgZGUgbGEgdGFyZWFcIiAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gZGlzYWJsZWQ9e3RpdGxlLmxlbmd0aCA+IDAgPyBmYWxzZTogdHJ1ZX0+QWdyZWdhciB0YXJlYTwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/add.js\n");

/***/ })

})