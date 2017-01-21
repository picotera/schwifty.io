System.register(['angular2/core', '../cast-receiver-manager/cast-receiver-manager.service', '../../settings'], function(exports_1, context_1) {
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
    var core_1, cast_receiver_manager_service_1, settings_1;
    var MessageBusService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cast_receiver_manager_service_1_1) {
                cast_receiver_manager_service_1 = cast_receiver_manager_service_1_1;
            },
            function (settings_1_1) {
                settings_1 = settings_1_1;
            }],
        execute: function() {
            MessageBusService = (function () {
                function MessageBusService(castReceiverManagerService) {
                    var _this = this;
                    this.castReceiverManagerService = castReceiverManagerService;
                    this.serviceId = "MessageBusService";
                    this.init = function () {
                        _this.castReceiverManagerService.init();
                        if (_this.messageBus != null)
                            return false;
                        console.log(_this.serviceId + ".init");
                        _this.manager = _this.castReceiverManagerService.manager;
                        _this.messageBus = _this.manager.getCastMessageBus(settings_1._settings.chromecastNamespace);
                        return true;
                    };
                }
                MessageBusService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [cast_receiver_manager_service_1.CastReceiverManagerService])
                ], MessageBusService);
                return MessageBusService;
            }());
            exports_1("MessageBusService", MessageBusService);
        }
    }
});
//# sourceMappingURL=message-bus.service.js.map