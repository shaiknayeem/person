"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../services/mysql.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var http_1 = require("@angular/common/http");
var PersonReferenceComponent = /** @class */ (function () {
    function PersonReferenceComponent(_mySqlService, _http) {
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
                companyName: {
                    title: 'Company Name'
                },
                email: {
                    title: 'Email',
                },
                name: {
                    title: 'Name'
                },
                phone: {
                    title: 'Phone'
                },
                personReferenceType_id: {
                    title: 'Person Reference Type ID'
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
        this.deletedMsg = 'Person Reference Details Deleted';
    }
    PersonReferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://localhost:6600/getPersonRef').subscribe(function (data) {
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
    PersonReferenceComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this._http.post('http://localhost:6600/deletePersonRef', event.data).subscribe(function (res) {
                _this.deleteMsg = true;
                _this.deletedMsg = "Person Reference details of  ID " + " ' " + event.data.id + " ' " + " deleted successfully";
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
    PersonReferenceComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/savePersonRef', event.newData).subscribe(function (res) {
            _this.displayMsg = true;
            _this.successMsg = "Person Reference details of  ID" + " ' " + event.newData.id + " ' " + " created successfully ";
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
    PersonReferenceComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/updatePersonRef', event.newData).subscribe(function (res) {
            _this.updateMsg = true;
            _this.updatedMsg = "Person Reference details of  ID" + " ' " + event.newData.id + " ' " + " updated successfully ";
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
    PersonReferenceComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-person-reference',
            templateUrl: './person-reference.component.html',
            styleUrls: ['./person-reference.component.css'],
            providers: [mysql_service_1.MySqlService],
        }),
        tslib_1.__metadata("design:paramtypes", [mysql_service_1.MySqlService, http_1.HttpClient])
    ], PersonReferenceComponent);
    return PersonReferenceComponent;
}());
exports.PersonReferenceComponent = PersonReferenceComponent;
//# sourceMappingURL=person-reference.component.js.map