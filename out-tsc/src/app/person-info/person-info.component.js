"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../services/mysql.service");
var core_2 = require("@angular/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var http_1 = require("@angular/common/http");
var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    ValuesPipe = tslib_1.__decorate([
        core_2.Pipe({ name: 'values', pure: false })
    ], ValuesPipe);
    return ValuesPipe;
}());
exports.ValuesPipe = ValuesPipe;
var PersonInfoComponent = /** @class */ (function () {
    function PersonInfoComponent(_mySqlService, _http) {
        this._mySqlService = _mySqlService;
        this._http = _http;
        this.user = [];
        this.data = [];
        this.displayMsg = false;
        this.updateMsg = false;
        this.deleteMsg = false;
        this.dangerMsg = false;
        this.deletedMsg = 'Person Details Deleted';
        this.source = new ng2_smart_table_1.LocalDataSource();
        // errorMessage: string;
        this.settings = {
            actions: {
                custom: [{ title: '<i class="fa fa-download"></i>' }],
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
                name: {
                    title: 'Name',
                    sort: false
                },
                position: {
                    title: 'Position',
                    sort: false
                },
                email: {
                    title: 'Email',
                    sort: false,
                    width: 25
                },
                contactNo: {
                    title: 'Contact No',
                    sort: false
                },
                company: {
                    title: 'Company',
                    sort: false
                },
                yearsOfExperience: {
                    title: 'Years of Experience',
                    sort: true
                },
                cctc: {
                    title: 'CCTC',
                    sort: false
                },
                ectc: {
                    title: 'ECTC',
                    sort: false
                },
                noticePeriod: {
                    title: 'Notice Period',
                    sort: false
                },
                createdDate: {
                    title: 'Created Date',
                    sort: false
                },
                overallFeedback: {
                    title: 'Overall Feedback',
                    sort: false,
                },
            },
            attr: {
                class: 'table table-bordered table-hover table-striped'
            },
        };
    }
    PersonInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://localhost:6600/getallUsers').subscribe(function (data) {
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
    PersonInfoComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this._http.post('http://localhost:6600/deleteUsers', event.data).subscribe(function (res) {
                _this.deleteMsg = true;
                _this.deletedMsg = "Person Info of  Name" + " ' " + event.data.name + " ' " + " deleted successfully";
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
    PersonInfoComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/saveUser', event.newData).subscribe(function (res) {
            _this.displayMsg = true;
            _this.successMsg = " Person Info of  Name" + " ' " + event.newData.name + " ' " + " created successfully ";
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
    PersonInfoComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/updateUser', event.newData).subscribe(function (res) {
            _this.updateMsg = true;
            _this.updatedMsg = " Person Info of  Name" + " ' " + event.newData.name + " ' " + " updated successfully ";
            setTimeout(function () {
                _this.updateMsg = false;
            }, 5000);
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
    PersonInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-person-info',
            templateUrl: './person-info.component.html',
            styleUrls: ['./person-info.component.css'],
            providers: [mysql_service_1.MySqlService],
        }),
        tslib_1.__metadata("design:paramtypes", [mysql_service_1.MySqlService, http_1.HttpClient])
    ], PersonInfoComponent);
    return PersonInfoComponent;
}());
exports.PersonInfoComponent = PersonInfoComponent;
//# sourceMappingURL=person-info.component.js.map