"use strict";
exports.__esModule = true;
var config_1 = require("../config");
var client_1 = require("./client");
var publish = function (value) {
    client_1["default"].publish({ destination: config_1["default"].amqConfig.topic, body: value });
};
var service = {
    publish: publish
};
exports["default"] = service;
