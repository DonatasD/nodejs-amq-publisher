"use strict";
exports.__esModule = true;
var winston_1 = require("winston");
var config_1 = require("../config/config");
var options = {
    transports: [
        new winston_1["default"].transports.Console({
            level: config_1["default"].env === config_1.Env.Production ? 'error' : 'debug'
        }),
        new winston_1["default"].transports.File({ filename: 'debug.log', level: 'debug' }),
    ]
};
var logger = winston_1["default"].createLogger(options);
if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}
exports["default"] = logger;
