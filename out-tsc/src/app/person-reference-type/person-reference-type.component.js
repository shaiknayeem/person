"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../services/mysql.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var http_1 = require("@angular/common/http");
var PersonReferenceTypeComponent = /** @class */ (function () {
    function PersonReferenceTypeComponent(_mySqlService, _http) {
        this._mySqlService = _mySqlService;
        this._http = _http;
        this.data = [];
        this.source = new ng2_smart_table_1.LocalDataSource();
        // errorMessage: string;
        this.settings = {
            actions: {
                position: 'right'
            },
            pager: {
                display: true,
                perPage: 5,
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="fa fa-ban"></i>',
            },
            add: {
                addButtonContent: '<i class="fa fa-plus"></i>',
                createButtonContent: '<i class="fa fa-check"></i>',
                cancelButtonContent: '<i class="fa fa-times"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="fa fa-pencil-square-o"></i>',
                saveButtonContent: '<i class="fa fa-check"></i>',
                cancelButtonContent: '<i class="fa fa-times"></i>',
                confirmSave: true,
            },
            position: 'right',
            columns: {
                description: {
                    title: 'Description'
                },
                name: {
                    title: 'Name'
                },
            },
            attr: {
                class: 'table table-bordered table-hover table-striped'
            },
        };
        this.displayMsg = false;
        this.updateMsg = false;
        this.deleteMsg = false;
        this.dangerMsg = false;
    }
    PersonReferenceTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://localhost:6600/getPersonRefType').subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (error) {
            _this.dangerMsg = true;
            _this.msg = error.error.sqlMessage;
            setTimeout(function () {
                _this.dangerMsg = false;
            }, 6000);
            console.log(error);
        });
        // this._mySqlService.getDataObservable(this.getUrl).subscribe(
        //   data => {
        //     this._mySqlService = data;
        //     this.source.load(data);
        //     console.log(this.source)
        //   }
        // ); 
    };
    PersonReferenceTypeComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this._http.post('http://localhost:6600/deletePersonRefType', event.data).subscribe(function (res) {
                _this.deleteMsg = true;
                _this.deletedMsg = "Person Reference Type details of  ID " + " ' " + event.data.id + " ' " + " deleted successfully";
                setTimeout(function () {
                    _this.deleteMsg = false;
                }, 5000);
                console.log(res);
                event.confirm.resolve(event.source.data);
            }, function (error) {
                _this.dangerMsg = true;
                _this.msg = error.error.sqlMessage;
                setTimeout(function () {
                    _this.dangerMsg = false;
                }, 6000);
                console.log(error);
            });
        }
    };
    PersonReferenceTypeComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/savePersonRefType', event.newData).subscribe(function (res) {
            _this.displayMsg = true;
            _this.successMsg = "Person Reference Type details of  ID" + " ' " + event.newData.id + " ' " + " created successfully ";
            setTimeout(function () {
                _this.displayMsg = false;
            }, 5000);
            console.log(res);
            event.confirm.resolve(event.newData);
        }, function (error) {
            _this.dangerMsg = true;
            _this.msg = error.error.sqlMessage;
            setTimeout(function () {
                _this.dangerMsg = false;
            }, 6000);
            console.log(error);
        });
    };
    PersonReferenceTypeComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/updatePersonRefType', event.newData).subscribe(function (res) {
            _this.updateMsg = true;
            _this.updatedMsg = "Person Reference Type details of  ID" + " ' " + event.newData.id + " ' " + " updated successfully ";
            setTimeout(function () {
                _this.updateMsg = false;
            }, 5000);
            console.log(res);
            event.confirm.resolve(event.newData);
        }, function (error) {
            _this.dangerMsg = true;
            _this.msg = error.error.sqlMessage;
            setTimeout(function () {
                _this.dangerMsg = false;
            }, 6000);
            console.log(error);
        });
    };
    PersonReferenceTypeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-person-reference-type',
            templateUrl: './person-reference-type.component.html',
            styleUrls: ['./person-reference-type.component.css'],
            providers: [mysql_service_1.MySqlService],
        }),
        tslib_1.__metadata("design:paramtypes", [mysql_service_1.MySqlService, http_1.HttpClient])
    ], PersonReferenceTypeComponent);
    return PersonReferenceTypeComponent;
}());
exports.PersonReferenceTypeComponent = PersonReferenceTypeComponent;
//# sourceMappingURL=person-reference-type.component.js.map