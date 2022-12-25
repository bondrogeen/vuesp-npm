"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nodeEvents = require("node:events");
var _ws2 = _interopRequireDefault(require("ws"));
var _struct2 = _interopRequireDefault(require("./struct"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var _ws = /*#__PURE__*/new WeakMap();
var _time = /*#__PURE__*/new WeakMap();
var _address = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _interval = /*#__PURE__*/new WeakMap();
var _isConnect = /*#__PURE__*/new WeakMap();
var _reconnectTime = /*#__PURE__*/new WeakMap();
var _struct = /*#__PURE__*/new WeakMap();
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
    var _ref$address = _ref.address,
      address = _ref$address === void 0 ? '' : _ref$address,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$reconnectTime = _ref.reconnectTime,
      reconnectTime = _ref$reconnectTime === void 0 ? 15000 : _ref$reconnectTime;
    _classCallCheck(this, Device);
    _this = _super.call(this);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onReconnect);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onError);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onClose);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onMessage);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onOpen);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _onPing);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _ws, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _time, {
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
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _struct, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(_assertThisInitialized(_this), _ws, null);
    _classPrivateFieldSet(_assertThisInitialized(_this), _struct, new _struct2["default"]());
    _classPrivateFieldGet(_assertThisInitialized(_this), _struct).onInit = _this.onInit.bind(_assertThisInitialized(_this));
    _classPrivateFieldSet(_assertThisInitialized(_this), _time, new Date());
    _classPrivateFieldSet(_assertThisInitialized(_this), _address, address);
    _classPrivateFieldSet(_assertThisInitialized(_this), _options, options);
    _classPrivateFieldSet(_assertThisInitialized(_this), _interval, null);
    _classPrivateFieldSet(_assertThisInitialized(_this), _reconnectTime, reconnectTime);
    _classPrivateFieldSet(_assertThisInitialized(_this), _isConnect, false);
    return _this;
  }
  _createClass(Device, [{
    key: "onInit",
    value: function onInit() {
      this.send('INFO');
      this.emit('init');
    }
  }, {
    key: "getSheme",
    value: function getSheme() {
      return _classPrivateFieldGet(this, _struct).keys;
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
          console.log(_classPrivateFieldGet(this, _ws).send(buffer));
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
function _onPing2() {
  var delta = new Date().getTime() - _classPrivateFieldGet(this, _time);
  this.emit('ping', delta);
  _classPrivateFieldSet(this, _isConnect, delta < _classPrivateFieldGet(this, _reconnectTime));
  console.log(delta);
  if (delta > _classPrivateFieldGet(this, _reconnectTime)) _classPrivateMethodGet(this, _onReconnect, _onReconnect2).call(this);
}
function _onOpen2(e) {
  _classPrivateFieldSet(this, _isConnect, true);
  this.emit('open', e);
  this.send('INIT');
}
function _onMessage2(message) {
  _classPrivateFieldSet(this, _time, new Date().getTime());
  this.emit('raw', message);
  if (message instanceof ArrayBuffer) {
    var data = _classPrivateFieldGet(this, _struct).get(message);
    if (data) {
      var object = data.object,
        key = data.key;
      if (key === 'PING') return;
      this.emit('message', {
        object: object,
        key: key
      });
    }
  }
}
function _onClose2(e) {
  _classPrivateFieldSet(this, _isConnect, false);
  this.emit('close', e);
}
function _onError2() {
  _classPrivateFieldSet(this, _isConnect, false);
  _classPrivateFieldGet(this, _ws).terminate();
}
function _onReconnect2() {
  _classPrivateFieldSet(this, _time, new Date().getTime());
  console.log('onReconnect');
  this.disconnect();
  this.connect();
}
var _default = Device;
exports["default"] = _default;