"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../../services/mysql.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var issue1_1 = require("../../models/issue1");
var AddDialogComponent = /** @class */ (function () {
    function AddDialogComponent(dialogRef, data, dataService, _http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this._http = _http;
        this.startDate = new Date(1990, 0, 1);
        this.options = [
            { name: 'Option1' },
            { name: 'Option2' },
            { name: 'Option3' },
            { name: 'Option4' },
        ];
        this.formControl = new forms_1.FormControl('', [
            forms_1.Validators.required
            // Validators.email,
        ]);
    }
    AddDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    AddDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    AddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDialogComponent.prototype.confirmAdd = function () {
        // this._http.post<Issue1>('http://localhost:6600/saveInterviewer', event.newData).subscribe(
        //   res => {
        //     event.confirm.resolve(event.newData);
        //     console.log(this.dataService)
        //     // this.refreshTable();
        //     // this.displayMsg = true;
        //     // // this.successMsg =" Person Info of  Name"+" ' " + event.newData.name+" ' "+" created successfully "
        //     // setTimeout(() => {
        //     //   this.displayMsg = false;
        //     // }, 5000);
        //     console.log(res);
        //   },
        //   error => {
        //     // this.dangerMsg = true;
        //     // this.msg = error.error.sqlMessage;
        //     // setTimeout(() => {
        //     //   this.dangerMsg = false;
        //     // }, 6000);
        //     console.log(error);
        //   });
        console.log(this.data);
        this.dataService.addIssue2(this.data);
    };
    AddDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-add.dialog',
            templateUrl: '../../dialog/add/add.dialog.html',
            styleUrls: ['../../dialog/add/add.dialog.css']
        }),
        tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [material_1.MatDialogRef,
            issue1_1.Issue1,
            mysql_service_1.MySqlService, http_1.HttpClient])
    ], AddDialogComponent);
    return AddDialogComponent;
}());
exports.AddDialogComponent = AddDialogComponent;
//# sourceMappingURL=add.dialog.component.js.map