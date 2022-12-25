"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cStructToJson = _interopRequireDefault(require("c-struct-to-json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StructsToJSON = /*#__PURE__*/function () {
  function StructsToJSON() {
    _classCallCheck(this, StructsToJSON);
    this.keys = ['INIT'];
    this.isInit = false;
    this.onInit = null;
    this.structs = {};
    this.structs.INIT = new _cStructToJson["default"]([{
      name: 'key',
      type: 'uint8_t'
    }]);
  }
  _createClass(StructsToJSON, [{
    key: "init",
    value: function init(data) {
      if (_typeof(data) === 'object') {
        var keys = data.keys,
          structs = data.structs;
        if (!keys && !Array.isArray(keys) && !structs && _typeof(data) !== 'object') return;
        this.keys = keys;
        for (var key in structs) {
          var name = key.toUpperCase();
          var array = structs[key].map(function (_ref) {
            var t = _ref.t,
              n = _ref.n,
              l = _ref.l;
            return {
              type: t,
              name: n,
              length: l
            };
          });
          this.structs[name] = new _cStructToJson["default"](array);
        }
        this.isInit = true;
        if (this.onInit) this.onInit();
      }
    }
  }, {
    key: "parseBytesToJson",
    value: function parseBytesToJson(array) {
      try {
        var text = String.fromCharCode.apply(String, _toConsumableArray(array));
        return JSON.parse(text);
      } catch (error) {
        console.warn(error);
      }
    }
  }, {
    key: "findIndexKey",
    value: function findIndexKey(name) {
      return this.keys.findIndex(function (i) {
        return i === name;
      });
    }
  }, {
    key: "findNameKey",
    value: function findNameKey(index) {
      return this.keys[index];
    }
  }, {
    key: "set",
    value: function set(key, data) {
      var struct = this.structs[key];
      var index = this.findIndexKey(key);
      if (struct && data) {
        return struct.setObject(_objectSpread(_objectSpread({}, data), {}, {
          key: index
        })).getBuffer();
      }
      if (typeof index !== 'undefined') return this.structs['INIT'].setObject({
        key: index
      }).getBuffer();
      console.warn("No struct or key ".concat(key), data);
      return null;
    }
  }, {
    key: "get",
    value: function get(data) {
      if (data instanceof ArrayBuffer) {
        var _Uint8Array = new Uint8Array(data),
          _Uint8Array2 = _toArray(_Uint8Array),
          key = _Uint8Array2[0],
          array = _Uint8Array2.slice(1);
        var name = this.findNameKey(key);
        if (name === 'INIT' && !this.isInit) {
          var object = this.parseBytesToJson(array);
          if (object) this.init(object);
          return;
        }
        var struct = this.structs[name];
        if (struct) {
          var _object = struct.setBuffer(data).getObject();
          return {
            object: _object,
            key: name
          };
        }
      }
      console.warn("No struct from arr: ".concat(data));
      return null;
    }
  }]);
  return StructsToJSON;
}();
var _default = StructsToJSON;
exports["default"] = _default;