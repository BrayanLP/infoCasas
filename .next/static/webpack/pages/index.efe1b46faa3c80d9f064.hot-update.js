webpackHotUpdate_N_E("pages/index",{

/***/ "./components/add.js":
/*!***************************!*\
  !*** ./components/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/brayanlaureanopaucar/Proyectos/infocasas-frontend-challenge/components/add.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == typeof value && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\n\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input.withConfig({\n  displayName: \"add__Input\",\n  componentId: \"sc-1f3dj4a-0\"\n})([\"border:0;outline:none;font-size:18px;color:black;\"]);\n_c = Input;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].form.withConfig({\n  displayName: \"add__Form\",\n  componentId: \"sc-1f3dj4a-1\"\n})([\"border:1px solid #666;padding:1rem;border-radius:10px;display:grid;grid-template-columns:1fr 150px;gap:15px;\"]);\n_c2 = Form;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"add__Button\",\n  componentId: \"sc-1f3dj4a-2\"\n})([\"border:none;background:#db4c3f;padding:1rem 0;border-radius:10px;color:white;font-weight:bold;\"]);\n_c3 = Button;\n\nvar Add = function Add() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var getChange = function getChange(e) {\n    setTitle(e.target.value);\n  };\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    saveData();\n    setTitle('');\n  };\n\n  var saveData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n      var request, todo, result;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              request = {\n                method: \"POST\",\n                body: JSON.stringify({\n                  title: title,\n                  completed: false\n                }),\n                'headers': {\n                  'Content-Type': 'application/json'\n                }\n              };\n              _context.next = 3;\n              return fetch(\"http://localhost:3004/posts\", request);\n\n            case 3:\n              todo = _context.sent;\n              _context.next = 6;\n              return todo.json();\n\n            case 6:\n              result = _context.sent;\n              console.log(result, 'resultado');\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function saveData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {}, []);\n  return __jsx(Form, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(Input, {\n    onChange: getChange,\n    type: \"text\",\n    placeholder: \"Nombre de la tarea\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }), __jsx(Button, {\n    onClick: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \"Agregar tarea\"));\n};\n\n_s(Add, \"UxLc0ASz5OOI4Ondy0sV1u7c+rw=\");\n\n_c4 = Add;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Add);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Input\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"Add\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGQuanM/MTVjYiJdLCJuYW1lcyI6WyJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwiRm9ybSIsImZvcm0iLCJCdXR0b24iLCJidXR0b24iLCJBZGQiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJnZXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2F2ZURhdGEiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21wbGV0ZWQiLCJmZXRjaCIsInRvZG8iLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7K0NBQ0Esb0o7O0FBREE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtFQUFBO0VBQUE7QUFBQSx5REFBWDtLQUFNRixLO0FBTU4sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLG9IQUFWO01BQU1ELEk7QUFTTixJQUFNRSxNQUFNLEdBQUdKLHlEQUFNLENBQUNLLE1BQVY7RUFBQTtFQUFBO0FBQUEsc0dBQVo7TUFBTUQsTTs7QUFTTixJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0VBQUE7O0VBQ2hCLGdCQUEyQkMsc0RBQVEsQ0FBQyxFQUFELENBQW5DO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWVDLFFBQWY7O0VBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFLO0lBQ3JCRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7RUFDRCxDQUZEOztFQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNILENBQUQsRUFBTTtJQUNyQkEsQ0FBQyxDQUFDSSxjQUFGO0lBQ0FDLFFBQVE7SUFDUlAsUUFBUSxDQUFDLEVBQUQsQ0FBUjtFQUNELENBSkQ7O0VBTUEsSUFBTU8sUUFBUTtJQUFBLGdKQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNYQyxPQURXLEdBQ0Q7Z0JBQ1pDLE1BQU0sRUFBRSxNQURJO2dCQUVaQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO2tCQUFDYixLQUFLLEVBQUVBLEtBQVI7a0JBQWVjLFNBQVMsRUFBRTtnQkFBMUIsQ0FBZixDQUZNO2dCQUdaLFdBQVU7a0JBQ1IsZ0JBQWdCO2dCQURSO2NBSEUsQ0FEQztjQUFBO2NBQUEsT0FRSUMsS0FBSyxDQUFDLDZCQUFELEVBQWdDTixPQUFoQyxDQVJUOztZQUFBO2NBUVRPLElBUlM7Y0FBQTtjQUFBLE9BU01BLElBQUksQ0FBQ0MsSUFBTCxFQVROOztZQUFBO2NBU1RDLE1BVFM7Y0FVZkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosRUFBb0IsV0FBcEI7O1lBVmU7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBUlYsUUFBUTtNQUFBO0lBQUE7RUFBQSxHQUFkOztFQWNBYSx1REFBUyxDQUFHLFlBQUksQ0FFZixDQUZRLEVBRU4sRUFGTSxDQUFUO0VBS0EsT0FDRSxNQUFDLElBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsS0FBRDtJQUFPLFFBQVEsRUFBRW5CLFNBQWpCO0lBQTRCLElBQUksRUFBQyxNQUFqQztJQUF3QyxXQUFXLEVBQUMsb0JBQXBEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUVFLE1BQUMsTUFBRDtJQUFRLE9BQU8sRUFBRUksUUFBakI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxtQkFGRixDQURGO0FBTUQsQ0F0Q0Q7O0dBQU1SLEc7O01BQUFBLEc7QUF3Q1NBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hZGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbmA7XG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1MHB4O1xuICBnYXA6IDE1cHg7XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkYjRjM2Y7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IEFkZCA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlICwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBnZXRDaGFuZ2UgPSAoZSk9PntcbiAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzYXZlRGF0YSgpO1xuICAgIHNldFRpdGxlKCcnKTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVEYXRhID0gYXN5bmMgKCkgPT57XG4gICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RpdGxlOiB0aXRsZSwgY29tcGxldGVkOiBmYWxzZX0pLFxuICAgICAgJ2hlYWRlcnMnOntcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b2RvID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDQvcG9zdHNcIiwgcmVxdWVzdCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdG9kby5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LCAncmVzdWx0YWRvJykgXG5cbiAgfVxuXG4gIHVzZUVmZmVjdCAoICgpPT57XG5cbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybT5cbiAgICAgIDxJbnB1dCBvbkNoYW5nZT17Z2V0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlIGRlIGxhIHRhcmVhXCIgLz5cbiAgICAgIDxCdXR0b24gb25DbGljaz17b25TdWJtaXR9PkFncmVnYXIgdGFyZWE8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/add.js\n");

/***/ })

})