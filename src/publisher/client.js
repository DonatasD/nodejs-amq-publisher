"use strict";
exports.__esModule = true;
var stompjs_1 = require("@stomp/stompjs");
var logger_1 = require("../utils/logger");
var config_1 = require("../config");
var client = new stompjs_1.Client({
    brokerURL: config_1["default"].amqConfig.brokerUrl,
    debug: function (msg) { return logger_1["default"].debug(msg); }
});
client.onConnect = function (receipt) { return logger_1["default"].debug(receipt); };
client.onStompError = function (receipt) { return logger_1["default"].debug(receipt); };
client.activate();
exports["default"] = client;
