"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../../services/mysql.service");
var forms_1 = require("@angular/forms");
var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
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
    EditDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    EditDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    EditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDialogComponent.prototype.stopEdit = function () {
        //  this._http.post<JdDetails>('http://localhost:6600/updateJD', event.newData).subscribe(
        //   res => {
        //     this.updateMsg = true;
        //     this.updatedMsg =" Details of  ID"+" ' " + event.newData.id+" ' "+" updated successfully "
        //     setTimeout(() => {
        //       this.updateMsg = false;
        //     }, 5000);
        //     console.log(this.msg);
        //     event.confirm.resolve(event.newData);
        //   },
        this.dataService.updateIssue(this.data);
        console.log(this.data);
        this.dataService.updateIssue2(this.data);
        console.log(this.data);
    };
    EditDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-baza.dialog',
            templateUrl: '../../dialog/edit/edit.dialog.html',
            styleUrls: ['../../dialog/edit/edit.dialog.css']
        }),
        tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [material_1.MatDialogRef, Object, mysql_service_1.MySqlService])
    ], EditDialogComponent);
    return EditDialogComponent;
}());
exports.EditDialogComponent = EditDialogComponent;
//# sourceMappingURL=edit.dialog.component.js.map