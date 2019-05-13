"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.login = function (a, b) {
        console.log(a + "" + b);
        var name = 'admin';
        var pwd = 'admin';
        var path = '';
        if (a == name && b == pwd) {
            this.router.navigate(['/dashboard']);
            console.log(path);
        }
        else {
            var msg = 'Please Check UserName and Password ';
            alert(msg);
            this.router.navigate(['/login']);
        }
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'login.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map