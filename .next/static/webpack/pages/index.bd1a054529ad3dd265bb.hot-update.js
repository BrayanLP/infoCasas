webpackHotUpdate_N_E("pages/index",{

/***/ "./components/item.js":
/*!****************************!*\
  !*** ./components/item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/brayanlaureanopaucar/Proyectos/infocasas-frontend-challenge/components/item.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar ItemCustom = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"item__ItemCustom\",\n  componentId: \"sc-fru0or-0\"\n})([\"border-bottom:1px solid #f5f5f5;display:grid;grid-template-columns:1fr 80px;align-items:center;padding:0 1rem;justify-content:center;&:hover{background:#f5f5f5;}.input-group{display:flex;align-items:center;justify-content:center;&.complete label{text-decoration:line-through;}}[type=\\\"radio\\\"]:checked,[type=\\\"radio\\\"]:not(:checked){position:absolute;left:-9999px;}[type=\\\"radio\\\"]:checked + label,[type=\\\"radio\\\"]:not(:checked) + label{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:#666;}[type=\\\"radio\\\"]:checked + label:before,[type=\\\"radio\\\"]:not(:checked) + label:before{content:\\\"\\\";position:absolute;left:0;top:50%;width:18px;height:18px;border:1px solid #666;border-radius:100%;background:#fff;transform:translate(0,-50%);}[type=\\\"radio\\\"]:checked + label:after,[type=\\\"radio\\\"]:not(:checked) + label:after{content:\\\"\\\";width:12px;height:12px;background:#db4c3f;position:absolute;top:20px;left:4px;border-radius:100%;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;transform:translate(0,-50%);}[type=\\\"radio\\\"]:not(:checked) + label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0);}[type=\\\"radio\\\"]:checked + label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1);}label{font-size:18px;display:block;width:100%;padding:1rem 0;}.actions{display:flex;justify-content:end;}\"]);\n_c = ItemCustom;\n\nvar Item = function Item(props) {\n  return __jsx(ItemCustom, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group \".concat(props.data.completed ? 'complete' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    id: \"check-\".concat(props.data.id),\n    type: \"radio\",\n    checked: props.data.completed ? true : false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"check-\".concat(props.data.id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, props.data.title)), __jsx(\"div\", {\n    className: \"actions\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"material-symbols-outlined\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, \"delete\")));\n};\n\n_c2 = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ItemCustom\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtLmpzPzA0NTEiXSwibmFtZXMiOlsiSXRlbUN1c3RvbSIsInN0eWxlZCIsImRpdiIsIkl0ZW0iLCJwcm9wcyIsImRhdGEiLCJjb21wbGV0ZWQiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwyMUNBQWhCO0tBQU1GLFU7O0FBbUZOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztFQUN0QixPQUNFLE1BQUMsVUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBSyxTQUFTLHdCQUFpQkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBQVgsR0FBdUIsVUFBdkIsR0FBbUMsRUFBcEQsQ0FBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxFQUFFLGtCQUFXRixLQUFLLENBQUNDLElBQU4sQ0FBV0UsRUFBdEIsQ0FBVDtJQUFxQyxJQUFJLEVBQUMsT0FBMUM7SUFBa0QsT0FBTyxFQUFFSCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsU0FBWCxHQUF1QixJQUF2QixHQUE2QixLQUF4RjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFFRTtJQUFPLE9BQU8sa0JBQVdGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxFQUF0QixDQUFkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBMkNILEtBQUssQ0FBQ0MsSUFBTixDQUFXRyxLQUF0RCxDQUZGLENBREYsRUFLRTtJQUFLLFNBQVMsRUFBQyxTQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFNLFNBQVMsRUFBQywyQkFBaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQURGLENBTEYsQ0FERjtBQVdELENBWkQ7O01BQU1MLEk7QUFjU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBJdGVtQ3VzdG9tID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICB9XG4gIC5pbnB1dC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICYuY29tcGxldGUgbGFiZWx7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gIH1cbiAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxuICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtOTk5OXB4O1xuICB9XG4gIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLFxuICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG4gIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcbiAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcbiAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNkYjRjM2Y7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG4gIC5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICB9XG5gO1xuXG5jb25zdCBJdGVtID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEl0ZW1DdXN0b20gPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbnB1dC1ncm91cCAke3Byb3BzLmRhdGEuY29tcGxldGVkID8gJ2NvbXBsZXRlJzogJyd9YH0+XG4gICAgICAgIDxpbnB1dCBpZD17YGNoZWNrLSR7cHJvcHMuZGF0YS5pZH1gfSB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtwcm9wcy5kYXRhLmNvbXBsZXRlZCA/IHRydWU6IGZhbHNlfSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGNoZWNrLSR7cHJvcHMuZGF0YS5pZH1gfT57cHJvcHMuZGF0YS50aXRsZX08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRlbGV0ZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvSXRlbUN1c3RvbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/item.js\n");

/***/ })

})