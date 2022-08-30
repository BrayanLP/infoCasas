webpackHotUpdate_N_E("pages/index",{

/***/ "./components/add.js":
/*!***************************!*\
  !*** ./components/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/brayanlaureanopaucar/Proyectos/infocasas-frontend-challenge/components/add.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input.withConfig({\n  displayName: \"add__Input\",\n  componentId: \"sc-1f3dj4a-0\"\n})([\"border:0;outline:none;font-size:18px;color:black;\"]);\n_c = Input;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.withConfig({\n  displayName: \"add__Form\",\n  componentId: \"sc-1f3dj4a-1\"\n})([\"border:1px solid #666;padding:1rem;border-radius:10px;display:grid;grid-template-columns:1fr 150px;gap:15px;\"]);\n_c2 = Form;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n  displayName: \"add__Button\",\n  componentId: \"sc-1f3dj4a-2\"\n})([\"border:none;background:#db4c3f;padding:1rem 0;border-radius:10px;color:white;font-weight:bold;cursor:pointer;\"]);\n_c3 = Button;\n\nvar Add = function Add(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.title || ''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.id || ''),\n      id = _useState2[0],\n      setID = _useState2[1];\n\n  var getChange = function getChange(e) {\n    setTitle(e.target.value);\n  };\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    props.saveData(title);\n    setTitle('');\n  };\n\n  var pastText = function pastText(text) {\n    setTitle(text.title);\n    setID(text.id);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {}, []);\n  return __jsx(Form, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(Input, {\n    value: title,\n    onChange: getChange,\n    type: \"text\",\n    placeholder: \"Nombre de la tarea\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), __jsx(Button, {\n    onClick: onSubmit,\n    disabled: title.length > 0 ? false : true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, \"Agregar tarea\"));\n};\n\n_s(Add, \"jsOYvcImM2WYSo9+vyIE60Hzuw0=\");\n\n_c4 = Add;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Add);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Input\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Add\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGQuanM/MTVjYiJdLCJuYW1lcyI6WyJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwiRm9ybSIsImZvcm0iLCJCdXR0b24iLCJidXR0b24iLCJBZGQiLCJwcm9wcyIsInVzZVN0YXRlIiwidGl0bGUiLCJzZXRUaXRsZSIsImlkIiwic2V0SUQiLCJnZXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2F2ZURhdGEiLCJwYXN0VGV4dCIsInRleHQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxLQUFWO0VBQUE7RUFBQTtBQUFBLHlEQUFYO0tBQU1GLEs7QUFNTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEsb0hBQVY7TUFBTUQsSTtBQVNOLElBQU1FLE1BQU0sR0FBR0oseURBQU0sQ0FBQ0ssTUFBVjtFQUFBO0VBQUE7QUFBQSxxSEFBWjtNQUFNRCxNOztBQVVOLElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUNyQixnQkFBMkJDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsS0FBTixJQUFlLEVBQWhCLENBQW5DO0VBQUEsSUFBT0EsS0FBUDtFQUFBLElBQWVDLFFBQWY7O0VBQ0EsaUJBQXFCRixzREFBUSxDQUFDRCxLQUFLLENBQUNJLEVBQU4sSUFBWSxFQUFiLENBQTdCO0VBQUEsSUFBT0EsRUFBUDtFQUFBLElBQVlDLEtBQVo7O0VBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFLO0lBQ3JCSixRQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7RUFDRCxDQUZEOztFQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNILENBQUQsRUFBTTtJQUNyQkEsQ0FBQyxDQUFDSSxjQUFGO0lBQ0FYLEtBQUssQ0FBQ1ksUUFBTixDQUFlVixLQUFmO0lBQ0FDLFFBQVEsQ0FBQyxFQUFELENBQVI7RUFDRCxDQUpEOztFQU1BLElBQU1VLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBUTtJQUN2QlgsUUFBUSxDQUFDVyxJQUFJLENBQUNaLEtBQU4sQ0FBUjtJQUNBRyxLQUFLLENBQUNTLElBQUksQ0FBQ1YsRUFBTixDQUFMO0VBQ0QsQ0FIRDs7RUFLQVcsdURBQVMsQ0FBRyxZQUFJLENBRWYsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtFQUtBLE9BQ0UsTUFBQyxJQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLEtBQUQ7SUFBTyxLQUFLLEVBQUViLEtBQWQ7SUFBcUIsUUFBUSxFQUFFSSxTQUEvQjtJQUEwQyxJQUFJLEVBQUMsTUFBL0M7SUFBc0QsV0FBVyxFQUFDLG9CQUFsRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFFRSxNQUFDLE1BQUQ7SUFBUSxPQUFPLEVBQUVJLFFBQWpCO0lBQTJCLFFBQVEsRUFBRVIsS0FBSyxDQUFDYyxNQUFOLEdBQWUsQ0FBZixHQUFtQixLQUFuQixHQUEwQixJQUEvRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLG1CQUZGLENBREY7QUFNRCxDQTlCRDs7R0FBTWpCLEc7O01BQUFBLEc7QUFnQ1NBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hZGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbmA7XG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1MHB4O1xuICBnYXA6IDE1cHg7XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkYjRjM2Y7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgQWRkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt0aXRsZSAsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHByb3BzLnRpdGxlIHx8ICcnKVxuICBjb25zdCBbaWQgLCBzZXRJRF0gPSB1c2VTdGF0ZShwcm9wcy5pZCB8fCAnJylcblxuICBjb25zdCBnZXRDaGFuZ2UgPSAoZSk9PntcbiAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9wcy5zYXZlRGF0YSh0aXRsZSk7XG4gICAgc2V0VGl0bGUoJycpO1xuICB9XG5cbiAgY29uc3QgcGFzdFRleHQgPSAodGV4dCk9PntcbiAgICBzZXRUaXRsZSh0ZXh0LnRpdGxlKVxuICAgIHNldElEKHRleHQuaWQpXG4gIH0gIFxuXG4gIHVzZUVmZmVjdCAoICgpPT57XG5cbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybT5cbiAgICAgIDxJbnB1dCB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtnZXRDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21icmUgZGUgbGEgdGFyZWFcIiAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gZGlzYWJsZWQ9e3RpdGxlLmxlbmd0aCA+IDAgPyBmYWxzZTogdHJ1ZX0+QWdyZWdhciB0YXJlYTwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/add.js\n");

/***/ })

})