"use strict";
exports.__esModule = true;
var service_1 = require("./service");
var express_1 = require("express");
var router = express_1["default"].Router();
router.route('/publisher/publish').get(function (req, res) { return res.send(service_1["default"].publish('hello world')); });
exports["default"] = router;
