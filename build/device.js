"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nodeEvents = require("node:events");
var _ws2 = _interopRequireDefault(require("ws"));
var _vuespStruct = _interopRequireDefault(require("vuesp-struct"));
var _axiosDigestAuth = _interopRequireDefault(require("@mhoc/axios-digest-auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var fetch = function fetch(digestAuth) {
  return {
    get: function get(options) {
      return digestAuth.request(_objectSpread(_objectSpread({}, options), {}, {
        method: 'GET'
      }));
    },
    post: function post(options) {
      return digestAuth.request(_objectSpread(_objectSpread({}, options), {}, {
        method: 'POST'
      }));
    }
  };
};
var _ip = /*#__PURE__*/new WeakMap();
var _ws = /*#__PURE__*/new WeakMap();
var _time = /*#__PURE__*/new WeakMap();
var _name = /*#__PURE__*/new WeakMap();
var _fetch = /*#__PURE__*/new WeakMap();
var _state = /*#__PURE__*/new WeakMap();
var _struct = /*#__PURE__*/new WeakMap();
var _address = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _interval = /*#__PURE__*/new WeakMap();
var _isConnect = /*#__PURE__*/new WeakMap();
var _reconnectTime = /*#__PURE__*/new WeakMap();
var _onEvent = /*#__PURE__*/new WeakSet();
var _onPing = /*#__PURE__*/new WeakSet();
var _onOpen = /*#__PURE__*/new WeakSet();
var _onMessage = /*#__PURE__*/new WeakSet();
var _onClose = /*#__PURE__*/new WeakSet();
var _onError = /*#__PURE__*/new WeakSet();
var _onReconnect = /*#__PURE__*/new WeakSet();
var Device = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Device, _EventEmitter);
  var _super = _createSuper(Device);
  function Device(_ref) {
    var _this;
    var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      ip = _ref.ip,
      _ref$username = _ref.username,
      username = _ref$username === void 0 ? '' : _ref$username,
      _ref$password = _ref.password,
      password = _ref$password === void 0 ? '' : _ref$password,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$reconnectTime = _ref.reconnectTime,
      reconnectTime = _ref$reconnectTime === void 0 ? 15000 : _ref$reconnectTime;
    _classCallCheck(this, Device);
    if (!ip) throw new TypeError("'ip' is required!");
    _this = _super.call(this);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onReconnect);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onError);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onClose);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onMessage);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onOpen);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onPing);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onEvent);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _ip, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _ws, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _time, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _name, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _fetch, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _state, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _struct, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _address, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _interval, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _isConnect, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _reconnectTime, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(_assertThisInitialized(_this), _ip, ip);
    _classPrivateFieldSet(_assertThisInitialized(_this), _ws, null);
    _classPrivateFieldSet(_assertThisInitialized(_this), _name, name);
    _classPrivateFieldSet(_assertThisInitialized(_this), _time, new Date());
    _classPrivateFieldSet(_assertThisInitialized(_this), _state, {});
    _classPrivateFieldSet(_assertThisInitialized(_this), _fetch, fetch(new _axiosDigestAuth["default"]({
      username: username,
      password: password
    })));
    _classPrivateFieldSet(_assertThisInitialized(_this), _struct, new _vuespStruct["default"]());
    _classPrivateFieldSet(_assertThisInitialized(_this), _address, "ws://".concat(ip, "/esp"));
    _classPrivateFieldSet(_assertThisInitialized(_this), _options, options);
    _classPrivateFieldSet(_assertThisInitialized(_this), _interval, null);
    _classPrivateFieldSet(_assertThisInitialized(_this), _isConnect, false);
    _classPrivateFieldSet(_assertThisInitialized(_this), _reconnectTime, reconnectTime);
    return _this;
  }
  _createClass(Device, [{
    key: "onInit",
    value: function () {
      var _onInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_classPrivateF, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _classPrivateFieldGet(this, _fetch).get({
                url: "http://".concat(_classPrivateFieldGet(this, _ip), "/struct.json")
              });
            case 3:
              _yield$_classPrivateF = _context.sent;
              data = _yield$_classPrivateF.data;
              _classPrivateFieldGet(this, _struct).init(data);
              _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'init', true);
              this.send('INFO');
              _context.next = 14;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'error', _context.t0);
              console.warn(_context.t0);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 10]]);
      }));
      function onInit() {
        return _onInit.apply(this, arguments);
      }
      return onInit;
    }()
  }, {
    key: "getInfo",
    value: function getInfo() {
      var _classPrivateFieldGet2;
      var info = ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _state)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.INFO) || {};
      return _objectSpread(_objectSpread({}, info), {}, {
        name: _classPrivateFieldGet(this, _name),
        ip: _classPrivateFieldGet(this, _ip),
        time: _classPrivateFieldGet(this, _time)
      });
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return {
        time: _classPrivateFieldGet(this, _time),
        ip: _classPrivateFieldGet(this, _ip)
      };
    }
  }, {
    key: "connect",
    value: function connect() {
      try {
        _classPrivateFieldSet(this, _ws, new _ws2["default"](_classPrivateFieldGet(this, _address), _classPrivateFieldGet(this, _options)));
        _classPrivateFieldGet(this, _ws).binaryType = 'arraybuffer';
        _classPrivateFieldGet(this, _ws).on('open', _classPrivateMethodGet(this, _onOpen, _onOpen2).bind(this));
        _classPrivateFieldGet(this, _ws).on('message', _classPrivateMethodGet(this, _onMessage, _onMessage2).bind(this));
        _classPrivateFieldGet(this, _ws).on('close', _classPrivateMethodGet(this, _onClose, _onClose2).bind(this));
        _classPrivateFieldGet(this, _ws).on('error', _classPrivateMethodGet(this, _onError, _onError2).bind(this));
        if (!_classPrivateFieldGet(this, _interval)) _classPrivateFieldSet(this, _interval, setInterval(_classPrivateMethodGet(this, _onPing, _onPing2).bind(this), 1000));
        return true;
      } catch (error) {
        _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'error', error);
        console.error(error);
        return false;
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      _classPrivateFieldSet(this, _isConnect, false);
      if (_classPrivateFieldGet(this, _interval)) clearInterval(_classPrivateFieldGet(this, _interval));
      _classPrivateFieldSet(this, _interval, null);
      _classPrivateFieldGet(this, _ws).close();
      _classPrivateFieldSet(this, _ws, null);
      return true;
    }
  }, {
    key: "send",
    value: function send(comm, data) {
      if (_classPrivateFieldGet(this, _isConnect)) {
        var buffer = _classPrivateFieldGet(this, _struct).set(comm, data);
        if (buffer) {
          _classPrivateFieldGet(this, _ws).send(buffer);
          return true;
        }
        return false;
      } else {
        return false;
      }
    }
  }]);
  return Device;
}(_nodeEvents.EventEmitter);
function _onEvent2(event, data) {
  var device = this.getInfo();
  var id = (device === null || device === void 0 ? void 0 : device.id) || 0;
  var payload = {
    event: event,
    data: data,
    device: device,
    id: id.toString(16)
  };
  this.emit(event, payload);
  this.emit('*', payload);
}
function _onPing2() {
  var delta = new Date().getTime() - _classPrivateFieldGet(this, _time);
  _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'ping', delta);
  _classPrivateFieldSet(this, _isConnect, delta < _classPrivateFieldGet(this, _reconnectTime));
  // console.log(delta);
  if (delta > _classPrivateFieldGet(this, _reconnectTime)) _classPrivateMethodGet(this, _onReconnect, _onReconnect2).call(this);
}
function _onOpen2(e) {
  _classPrivateFieldSet(this, _isConnect, true);
  this.onInit();
  _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'open', e);
}
function _onMessage2(message) {
  _classPrivateFieldSet(this, _time, new Date().getTime());
  _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'raw', message);
  if (message instanceof ArrayBuffer) {
    var data = _classPrivateFieldGet(this, _struct).get(message);
    if (data) {
      var object = data.object,
        key = data.key;
      if (key === 'PING') return;
      _classPrivateFieldGet(this, _state)[key] = object;
      _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'message', {
        object: object,
        key: key
      });
    }
  }
}
function _onClose2(e) {
  _classPrivateFieldSet(this, _isConnect, false);
  _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'close', e);
}
function _onError2() {
  _classPrivateFieldSet(this, _isConnect, false);
  _classPrivateFieldGet(this, _ws).terminate();
}
function _onReconnect2() {
  _classPrivateFieldSet(this, _time, new Date().getTime());
  console.log('onReconnect');
  _classPrivateMethodGet(this, _onEvent, _onEvent2).call(this, 'reconnect');
  this.disconnect();
  this.connect();
}
var _default = Device;
exports["default"] = _default;