System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CastReceiverManagerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CastReceiverManagerService = (function () {
                function CastReceiverManagerService() {
                    var _this = this;
                    this.serviceId = "CastReceiverManagerService";
                    this.init = function () {
                        console.log(_this.serviceId + ".init");
                        if (_this.manager != null)
                            return false;
                        cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.NONE);
                        _this.manager = cast.receiver.CastReceiverManager.getInstance();
                        _this.manager.onReady = function (event) {
                            console.log('Received Ready event: ' + JSON.stringify(event.data));
                            _this.manager.setApplicationState("Application status is ready...");
                        };
                        _this.manager.onSenderConnected = function (event) {
                            console.log('Received Sender Connected event: ' + event.data);
                            console.log(_this.manager.getSender(event.data).userAgent);
                        };
                        _this.manager.onSenderDisconnected = function (event) {
                            if (_this.manager.getSenders().length == 0 && event.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
                                window.close();
                            }
                        };
                        _this.manager.onSystemVolumeChanged = function (event) {
                            console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' +
                                event.data['muted']);
                        };
                        return true;
                    };
                }
                CastReceiverManagerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CastReceiverManagerService);
                return CastReceiverManagerService;
            }());
            exports_1("CastReceiverManagerService", CastReceiverManagerService);
        }
    }
});
//# sourceMappingURL=cast-receiver-manager.service.js.map