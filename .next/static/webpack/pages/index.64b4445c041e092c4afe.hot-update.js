webpackHotUpdate_N_E("pages/index",{

/***/ "./components/item.js":
/*!****************************!*\
  !*** ./components/item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/brayanlaureanopaucar/Proyectos/infocasas-frontend-challenge/components/item.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar ItemCustom = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"item__ItemCustom\",\n  componentId: \"sc-fru0or-0\"\n})([\"border-bottom:1px solid #f5f5f5;display:grid;grid-template-columns:1fr 80px;align-items:center;padding:0 1rem;justify-content:center;&:hover{background:#f5f5f5;}.input-group{display:flex;align-items:center;justify-content:center;&.complete label{text-decoration:line-through;}}[type=\\\"radio\\\"]:checked,[type=\\\"radio\\\"]:not(:checked){position:absolute;left:-9999px;}[type=\\\"radio\\\"]:checked + label,[type=\\\"radio\\\"]:not(:checked) + label{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:#666;}[type=\\\"radio\\\"]:checked + label:before,[type=\\\"radio\\\"]:not(:checked) + label:before{content:\\\"\\\";position:absolute;left:0;top:50%;width:18px;height:18px;border:1px solid #666;border-radius:100%;background:#fff;transform:translate(0,-50%);}[type=\\\"radio\\\"]:checked + label:after,[type=\\\"radio\\\"]:not(:checked) + label:after{content:\\\"\\\";width:12px;height:12px;background:#db4c3f;position:absolute;top:20px;left:4px;border-radius:100%;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;transform:translate(0,-50%);}[type=\\\"radio\\\"]:not(:checked) + label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0);}[type=\\\"radio\\\"]:checked + label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1);}label{font-size:18px;display:block;width:100%;padding:1rem 0;}.actions{display:flex;justify-content:end;}\"]);\n_c = ItemCustom;\n\nvar Item = function Item(props) {\n  return __jsx(ItemCustom, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group \".concat(props.data.completed ? 'complete' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    id: \"check-\".concat(props.data.id),\n    type: \"radio\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"check-\".concat(props.data.id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, props.data.title)), __jsx(\"div\", {\n    className: \"actions\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"material-symbols-outlined\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, \"delete\")));\n};\n\n_c2 = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ItemCustom\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtLmpzPzA0NTEiXSwibmFtZXMiOlsiSXRlbUN1c3RvbSIsInN0eWxlZCIsImRpdiIsIkl0ZW0iLCJwcm9wcyIsImRhdGEiLCJjb21wbGV0ZWQiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwyMUNBQWhCO0tBQU1GLFU7O0FBbUZOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztFQUN0QixPQUNFLE1BQUMsVUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBSyxTQUFTLHdCQUFpQkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBQVgsR0FBdUIsVUFBdkIsR0FBbUMsRUFBcEQsQ0FBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxFQUFFLGtCQUFXRixLQUFLLENBQUNDLElBQU4sQ0FBV0UsRUFBdEIsQ0FBVDtJQUFxQyxJQUFJLEVBQUMsT0FBMUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBRUU7SUFBTyxPQUFPLGtCQUFXSCxLQUFLLENBQUNDLElBQU4sQ0FBV0UsRUFBdEIsQ0FBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQTJDSCxLQUFLLENBQUNDLElBQU4sQ0FBV0csS0FBdEQsQ0FGRixDQURGLEVBS0U7SUFBSyxTQUFTLEVBQUMsU0FBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTSxTQUFTLEVBQUMsMkJBQWhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFERixDQUxGLENBREY7QUFXRCxDQVpEOztNQUFNTCxJO0FBY1NBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSXRlbUN1c3RvbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIH1cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgJi5jb21wbGV0ZSBsYWJlbHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgfVxuICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQsXG4gIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC05OTk5cHg7XG4gIH1cbiAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwsXG4gIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxuICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyLFxuICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2RiNGMzZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gIH1cbiAgLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIH1cbmA7XG5cbmNvbnN0IEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SXRlbUN1c3RvbSA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGlucHV0LWdyb3VwICR7cHJvcHMuZGF0YS5jb21wbGV0ZWQgPyAnY29tcGxldGUnOiAnJ31gfT5cbiAgICAgICAgPGlucHV0IGlkPXtgY2hlY2stJHtwcm9wcy5kYXRhLmlkfWB9IHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtgY2hlY2stJHtwcm9wcy5kYXRhLmlkfWB9Pntwcm9wcy5kYXRhLnRpdGxlfTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9JdGVtQ3VzdG9tPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/item.js\n");

/***/ })

})