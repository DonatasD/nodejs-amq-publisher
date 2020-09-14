"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientService = void 0;
var stompjs_1 = require("@stomp/stompjs");
var common_1 = require("@nestjs/common");
var ClientService = /** @class */ (function () {
    function ClientService(configService) {
        this.configService = configService;
        this.client = new stompjs_1.Client({
            brokerURL: configService.get('amqConfig.brokerUrl')
        });
        this.client.onConnect = function (receipt) { return common_1.Logger.debug(receipt); };
        this.client.onStompError = function (receipt) { return common_1.Logger.debug(receipt); };
        this.client.activate();
    }
    ClientService.prototype.publish = function (publishParams) {
        this.client.publish(publishParams);
    };
    ClientService = __decorate([
        common_1.Injectable()
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
