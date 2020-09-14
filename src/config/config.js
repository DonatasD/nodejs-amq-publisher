"use strict";
exports.__esModule = true;
exports.Env = void 0;
var dotenv_1 = require("dotenv");
var fs_1 = require("fs");
var Env;
(function (Env) {
    Env["Production"] = "prod";
    Env["Development"] = "dev";
})(Env = exports.Env || (exports.Env = {}));
var DEFAULT_PORT = 3000;
if (fs_1["default"].existsSync('.env')) {
    dotenv_1["default"].config({ path: '.env' });
}
var amqConfig = {
    topic: process.env.AMQ_TOPIC_NAME,
    brokerUrl: process.env.AMQ_BROKER_URL
};
// Check if all client values are provided
if (!Object.values(amqConfig).every(function (value) { return value; })) {
    console.error('ActiveMQ is not setup fully');
    process.exit(1);
}
var config = {
    env: process.env.NODE_ENV || Env.Development,
    port: process.env.PORT || DEFAULT_PORT,
    amqConfig: amqConfig
};
exports["default"] = config;
