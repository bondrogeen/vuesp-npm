"use strict";

var _device = _interopRequireDefault(require("./device"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var client = new _device["default"]({
  address: 'ws://192.168.10.17/esp'
});
client.on('open', function (e) {
  console.log(e);
  setTimeout(function () {
    client.send('SETTINGS');
    console.log(client.getSheme());
  }, 5000);
});
client.on('message', function (e) {
  console.log(e);
});
client.on('close', function (e) {
  console.log(e);
});
client.on('error', function (e) {
  console.log(e);
});
client.connect();