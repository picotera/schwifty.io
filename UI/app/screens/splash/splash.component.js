System.register(['angular2/core', 'angular2/router', '../../services/message-bus/message-bus.service'], function(exports_1, context_1) {
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
    var core_1, router_1, message_bus_service_1;
    var SplashComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (message_bus_service_1_1) {
                message_bus_service_1 = message_bus_service_1_1;
            }],
        execute: function() {
            SplashComponent = (function () {
                function SplashComponent(_messageBusService, _router) {
                    this._messageBusService = _messageBusService;
                    this._router = _router;
                }
                SplashComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._messageBusService.messageBus.broadcast('Splash Complete');
                        _this._router.navigate(['Home']);
                    }, 3000);
                };
                SplashComponent = __decorate([
                    core_1.Component({
                        selector: 'screen-splash',
                        templateUrl: 'app/screens/splash/splash.component.html'
                    }), 
                    __metadata('design:paramtypes', [message_bus_service_1.MessageBusService, router_1.Router])
                ], SplashComponent);
                return SplashComponent;
            }());
            exports_1("SplashComponent", SplashComponent);
        }
    }
});
//# sourceMappingURL=splash.component.js.map