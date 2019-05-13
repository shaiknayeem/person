"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var UniversalInterceptor = /** @class */ (function () {
    function UniversalInterceptor(serverUrl) {
        this.serverUrl = serverUrl;
    }
    UniversalInterceptor.prototype.intercept = function (req, next) {
        var serverReq = !this.serverUrl ? req : req.clone({
            url: "" + this.serverUrl + req.url
        });
        return next.handle(serverReq);
    };
    UniversalInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(0, core_1.Optional()), tslib_1.__param(0, core_1.Inject('serverUrl')),
        tslib_1.__metadata("design:paramtypes", [String])
    ], UniversalInterceptor);
    return UniversalInterceptor;
}());
exports.UniversalInterceptor = UniversalInterceptor;
//# sourceMappingURL=universal.interceptor.js.map