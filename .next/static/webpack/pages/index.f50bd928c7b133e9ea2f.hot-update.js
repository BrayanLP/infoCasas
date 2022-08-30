webpackHotUpdate_N_E("pages/index",{

/***/ "./components/item.js":
/*!****************************!*\
  !*** ./components/item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/brayanlaureanopaucar/Proyectos/infocasas-frontend-challenge/components/item.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar ItemCustom = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"item__ItemCustom\",\n  componentId: \"sc-fru0or-0\"\n})([\"border-bottom:1px solid #f5f5f5;display:grid;grid-template-columns:40px 1fr 80px;align-items:center;padding:0 1rem;justify-content:center;&:hover{background:#f5f5f5;}.input-group{display:flex;align-items:center;justify-content:center;}&.complete{opacity:0.8;}&.complete label,&.complete p{text-decoration:line-through;}[type=\\\"radio\\\"]:checked,[type=\\\"radio\\\"]:not(:checked){position:absolute;left:-9999px;}[type=\\\"radio\\\"]:checked + label,[type=\\\"radio\\\"]:not(:checked) + label{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:#666;}[type=\\\"radio\\\"]:checked + label:before,[type=\\\"radio\\\"]:not(:checked) + label:before{content:\\\"\\\";position:absolute;left:0;top:50%;width:18px;height:18px;border:1px solid #666;border-radius:100%;background:#fff;transform:translate(0,-50%);}[type=\\\"radio\\\"]:checked + label:after,[type=\\\"radio\\\"]:not(:checked) + label:after{content:\\\"\\\";width:12px;height:12px;background:#db4c3f;position:absolute;top:10px;left:4px;border-radius:100%;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;transform:translate(0,-50%);}[type=\\\"radio\\\"]:not(:checked) + label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0);}[type=\\\"radio\\\"]:checked + label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1);}label{font-size:18px;display:block;width:100%;padding:1rem 0;}.actions{display:flex;justify-content:end;span{cursor:pointer;}}p{padding:1rem 0;margin:0;}\"]);\n_c = ItemCustom;\n\nvar Item = function Item(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.data.completed),\n      isSubscribed = _useState[0],\n      setIsSubscribed = _useState[1];\n\n  var handleChange = function handleChange(event) {\n    setIsSubscribed(event.target.checked);\n  };\n\n  return __jsx(ItemCustom, {\n    className: \"\".concat(props.data.completed ? 'complete' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onClick: function onClick() {\n      return props.updateData(props.data);\n    },\n    className: \"input-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    checked: props.completed,\n    id: \"check-\".concat(props.data.id),\n    type: \"radio\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"check-\".concat(props.data.id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    onClick: function onClick() {\n      return props.editText(props.data);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, props.data.title), __jsx(\"div\", {\n    className: \"actions\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"material-symbols-outlined\",\n    onClick: function onClick() {\n      return props.deleteData(props.data);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, \"delete\")));\n};\n\n_s(Item, \"HFB06J/zzcJ4Om7iQ3iJ7Kz7OYo=\");\n\n_c2 = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ItemCustom\");\n$RefreshReg$(_c2, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtLmpzPzA0NTEiXSwibmFtZXMiOlsiSXRlbUN1c3RvbSIsInN0eWxlZCIsImRpdiIsIkl0ZW0iLCJwcm9wcyIsInVzZVN0YXRlIiwiZGF0YSIsImNvbXBsZXRlZCIsImlzU3Vic2NyaWJlZCIsInNldElzU3Vic2NyaWJlZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsInVwZGF0ZURhdGEiLCJpZCIsImVkaXRUZXh0IiwidGl0bGUiLCJkZWxldGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxN0NBQWhCO0tBQU1GLFU7O0FBK0ZOLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztFQUFBOztFQUN0QixnQkFBd0NDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxTQUFaLENBQWhEO0VBQUEsSUFBT0MsWUFBUDtFQUFBLElBQXFCQyxlQUFyQjs7RUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7SUFDNUJGLGVBQWUsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWQsQ0FBZjtFQUNELENBRkQ7O0VBSUEsT0FDRSxNQUFDLFVBQUQ7SUFBWSxTQUFTLFlBQUtULEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxTQUFYLEdBQXVCLFVBQXZCLEdBQW1DLEVBQXhDLENBQXJCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFRTtJQUFLLE9BQU8sRUFBRTtNQUFBLE9BQUlILEtBQUssQ0FBQ1UsVUFBTixDQUFpQlYsS0FBSyxDQUFDRSxJQUF2QixDQUFKO0lBQUEsQ0FBZDtJQUFnRCxTQUFTLGVBQXpEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLE9BQU8sRUFBRUYsS0FBSyxDQUFDRyxTQUF0QjtJQUFpQyxFQUFFLGtCQUFXSCxLQUFLLENBQUNFLElBQU4sQ0FBV1MsRUFBdEIsQ0FBbkM7SUFBK0QsSUFBSSxFQUFDLE9BQXBFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUVFO0lBQU8sT0FBTyxrQkFBV1gsS0FBSyxDQUFDRSxJQUFOLENBQVdTLEVBQXRCLENBQWQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLENBRkYsRUFNRTtJQUFHLE9BQU8sRUFBRTtNQUFBLE9BQUtYLEtBQUssQ0FBQ1ksUUFBTixDQUFlWixLQUFLLENBQUNFLElBQXJCLENBQUw7SUFBQSxDQUFaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBOENGLEtBQUssQ0FBQ0UsSUFBTixDQUFXVyxLQUF6RCxDQU5GLEVBT0U7SUFBSyxTQUFTLEVBQUMsU0FBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTSxTQUFTLEVBQUMsMkJBQWhCO0lBQTRDLE9BQU8sRUFBRTtNQUFBLE9BQUliLEtBQUssQ0FBQ2MsVUFBTixDQUFpQmQsS0FBSyxDQUFDRSxJQUF2QixDQUFKO0lBQUEsQ0FBckQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQURGLENBUEYsQ0FERjtBQWFELENBcEJEOztHQUFNSCxJOztNQUFBQSxJO0FBc0JTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBJdGVtQ3VzdG9tID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgODBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIH1cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgJi5jb21wbGV0ZXtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgJi5jb21wbGV0ZSBsYWJlbCxcbiAgJi5jb21wbGV0ZSBwe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCxcbiAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTk5OTlweDtcbiAgfVxuICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCxcbiAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXG4gIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXG4gIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGI0YzNmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgfVxuICAuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBzcGFue1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICBwe1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzU3Vic2NyaWJlZCwgc2V0SXNTdWJzY3JpYmVkXSA9IHVzZVN0YXRlKHByb3BzLmRhdGEuY29tcGxldGVkKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgc2V0SXNTdWJzY3JpYmVkKGV2ZW50LnRhcmdldC5jaGVja2VkKTsgXG4gIH07XG4gICBcbiAgcmV0dXJuIChcbiAgICA8SXRlbUN1c3RvbSBjbGFzc05hbWU9e2Ake3Byb3BzLmRhdGEuY29tcGxldGVkID8gJ2NvbXBsZXRlJzogJyd9YH0+XG4gICAgICBcbiAgICAgIDxkaXYgb25DbGljaz17KCk9PnByb3BzLnVwZGF0ZURhdGEocHJvcHMuZGF0YSl9IGNsYXNzTmFtZT17YGlucHV0LWdyb3VwYH0+XG4gICAgICAgIDxpbnB1dCBjaGVja2VkPXtwcm9wcy5jb21wbGV0ZWR9IGlkPXtgY2hlY2stJHtwcm9wcy5kYXRhLmlkfWB9IHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtgY2hlY2stJHtwcm9wcy5kYXRhLmlkfWB9PjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIG9uQ2xpY2s9eygpPT4gcHJvcHMuZWRpdFRleHQocHJvcHMuZGF0YSl9Pntwcm9wcy5kYXRhLnRpdGxlfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgb25DbGljaz17KCk9PnByb3BzLmRlbGV0ZURhdGEocHJvcHMuZGF0YSl9PmRlbGV0ZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvSXRlbUN1c3RvbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/item.js\n");

/***/ })

})