"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PublisherModule = void 0;
var common_1 = require("@nestjs/common");
var publisher_controller_1 = require("./publisher.controller");
var publisher_service_1 = require("./publisher.service");
var client_module_1 = require("./client/client.module");
var PublisherModule = /** @class */ (function () {
    function PublisherModule() {
    }
    PublisherModule = __decorate([
        common_1.Module({
            imports: [client_module_1.ClientModule],
            controllers: [publisher_controller_1.PublisherController],
            providers: [publisher_service_1.PublisherService]
        })
    ], PublisherModule);
    return PublisherModule;
}());
exports.PublisherModule = PublisherModule;
