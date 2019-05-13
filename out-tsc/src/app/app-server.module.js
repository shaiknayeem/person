"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var http_1 = require("@angular/common/http");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var universal_interceptor_1 = require("./universal.interceptor");
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    AppServerModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                app_module_1.AppModule,
                platform_server_1.ServerModule
            ],
            providers: [{
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: universal_interceptor_1.UniversalInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppServerModule);
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app-server.module.js.map