System.register(['angular2/core', './services/message-bus/message-bus.service', './services/cast-receiver-manager/cast-receiver-manager.service', 'angular2/router', './settings', './screens/splash/splash.component', './screens/home/home.component', './screens/page1/page1.component', './screens/fonts/fonts.component', './screens/fonts2/fonts2.component', './screens/fonts3/fonts3.component', './screens/fonts4/fonts4.component', './screens/bootstrap-grid/bootstrap-grid.component', './screens/glyphicons/glyphicons.component'], function(exports_1, context_1) {
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
    var core_1, message_bus_service_1, cast_receiver_manager_service_1, router_1, settings_1, splash_component_1, home_component_1, page1_component_1, fonts_component_1, fonts2_component_1, fonts3_component_1, fonts4_component_1, bootstrap_grid_component_1, glyphicons_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_bus_service_1_1) {
                message_bus_service_1 = message_bus_service_1_1;
            },
            function (cast_receiver_manager_service_1_1) {
                cast_receiver_manager_service_1 = cast_receiver_manager_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (settings_1_1) {
                settings_1 = settings_1_1;
            },
            function (splash_component_1_1) {
                splash_component_1 = splash_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (page1_component_1_1) {
                page1_component_1 = page1_component_1_1;
            },
            function (fonts_component_1_1) {
                fonts_component_1 = fonts_component_1_1;
            },
            function (fonts2_component_1_1) {
                fonts2_component_1 = fonts2_component_1_1;
            },
            function (fonts3_component_1_1) {
                fonts3_component_1 = fonts3_component_1_1;
            },
            function (fonts4_component_1_1) {
                fonts4_component_1 = fonts4_component_1_1;
            },
            function (bootstrap_grid_component_1_1) {
                bootstrap_grid_component_1 = bootstrap_grid_component_1_1;
            },
            function (glyphicons_component_1_1) {
                glyphicons_component_1 = glyphicons_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_messageBusService, _router) {
                    this._messageBusService = _messageBusService;
                    this._router = _router;
                    this.title = "Angular 2 Receiver";
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('ngOnInit');
                    this._messageBusService.init();
                    this._messageBusService.messageBus.onMessage = function (event) {
                        console.log("messageBus.onMessage: " + JSON.stringify(event["data"]));
                        var payload = JSON.parse(event["data"]);
                        switch (payload.command) {
                            case 'nav':
                                var routerLink = [payload.page];
                                if (payload.message != undefined) {
                                    routerLink.push({ message: payload.message });
                                }
                                _this._router.navigate(routerLink);
                                break;
                            case 'version':
                                _this._messageBusService.messageBus.broadcast(settings_1._settings.version);
                                break;
                        }
                    };
                    this._messageBusService.manager.start({ statusText: "Application is starting" });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS,
                            //      provide(Cast, {useExisting: cast}),
                            message_bus_service_1.MessageBusService,
                            cast_receiver_manager_service_1.CastReceiverManagerService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/splash',
                            name: 'Splash',
                            component: splash_component_1.SplashComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent
                        },
                        {
                            path: '/page1/:message',
                            name: 'Page1',
                            component: page1_component_1.Page1Component
                        },
                        {
                            path: '/fonts',
                            name: 'Fonts',
                            component: fonts_component_1.FontsComponent
                        },
                        {
                            path: '/fonts2',
                            name: 'Fonts2',
                            component: fonts2_component_1.Fonts2Component
                        },
                        {
                            path: '/fonts3',
                            name: 'Fonts3',
                            component: fonts3_component_1.Fonts3Component
                        },
                        {
                            path: '/fonts4',
                            name: 'Fonts4',
                            component: fonts4_component_1.Fonts4Component
                        },
                        {
                            path: '/grid',
                            name: 'Grid',
                            component: bootstrap_grid_component_1.BootstrapGridComponent
                        },
                        {
                            path: '/glyphicons',
                            name: 'Glyphicons',
                            component: glyphicons_component_1.GlyphiconsComponent
                        },
                    ]), 
                    __metadata('design:paramtypes', [message_bus_service_1.MessageBusService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map