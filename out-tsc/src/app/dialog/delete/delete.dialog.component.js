"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../../services/mysql.service");
var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    DeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.confirmDelete = function () {
        this.dataService.deleteIssue(this.data.id);
        this.dataService.deleteIssue2(this.data.id);
    };
    DeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-delete.dialog',
            templateUrl: '../../dialog/delete/delete.dialog.html',
            styleUrls: ['../../dialog/delete/delete.dialog.css']
        }),
        tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [material_1.MatDialogRef, Object, mysql_service_1.MySqlService])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());
exports.DeleteDialogComponent = DeleteDialogComponent;
//# sourceMappingURL=delete.dialog.component.js.map