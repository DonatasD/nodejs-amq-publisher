"use strict";
exports.__esModule = true;
var configuration_types_1 = require("./configuration.types");
var configuration_constants_1 = require("./configuration.constants");
exports["default"] = (function () {
    var amqConfig = {
        topic: process.env.AMQ_TOPIC_NAME,
        brokerUrl: process.env.AMQ_BROKER_URL
    };
    return {
        env: process.env.NODE_ENV || configuration_types_1.Env.Development,
        port: Number(process.env.PORT) || configuration_constants_1.DEFAULT_PORT,
        amqConfig: amqConfig
    };
});
