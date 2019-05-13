"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../services/mysql.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var http_1 = require("@angular/common/http");
var JdDetailsComponent = /** @class */ (function () {
    function JdDetailsComponent(_mySqlService, _http) {
        this._mySqlService = _mySqlService;
        this._http = _http;
        this.data = [];
        this.displayMsg = false;
        this.updateMsg = false;
        this.deleteMsg = false;
        this.dangerMsg = false;
        this.source = new ng2_smart_table_1.LocalDataSource();
        // errorMessage: string;
        this.clientId = JSON.parse(localStorage.getItem('clientDetails_id'));
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
                nameOfClient: {
                    title: 'Name of Client',
                    sort: false,
                },
                skillSet: {
                    title: 'Skill Set',
                    sort: false,
                },
                yearsOfExperience: {
                    title: 'Years Of Experience',
                    sort: true,
                },
                noticePeriod: {
                    title: 'Notice Period',
                    sort: false,
                },
                status: {
                    title: 'Status',
                    sort: false,
                },
                feedback: {
                    title: 'Feedback',
                    sort: false,
                },
            },
            attr: {
                class: 'table table-bordered table-hover table-striped'
            },
        };
    }
    JdDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://localhost:6600/getJD').subscribe(function (data) {
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
        this._http.get('http://localhost:6600/getClient').subscribe(function (data) {
            if (data != undefined || data != null) {
                _this.clientId = [];
                data.forEach(function (val) {
                    _this.clientId.push({ value: val.id, title: val.id });
                });
            }
            localStorage.setItem('clientDetails_id', JSON.stringify(_this.clientId));
        }, function (error) { console.log(error); });
        // this._mySqlService.getDataObservable(this.getUrl).subscribe(
        //   data => {
        //     this._mySqlService = data;
        //     this.source.load(data);
        //     console.log(this.source)
        //   }
        // ); 
    };
    JdDetailsComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this._http.post('http://localhost:6600/deleteJD', event.data).subscribe(function (res) {
                _this.deleteMsg = true;
                _this.deletedMsg = "Details of  ID " + " ' " + event.data.id + " ' " + " deleted successfully";
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
    JdDetailsComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/saveJD', event.newData).subscribe(function (res) {
            _this.displayMsg = true;
            _this.successMsg = " Details of  ID" + " ' " + event.newData.id + " ' " + " created successfully ";
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
    JdDetailsComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/updateJD', event.newData).subscribe(function (res) {
            _this.updateMsg = true;
            _this.updatedMsg = " Details of  ID" + " ' " + event.newData.id + " ' " + " updated successfully ";
            setTimeout(function () {
                _this.updateMsg = false;
            }, 5000);
            console.log(_this.msg);
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
    JdDetailsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-jd-details',
            templateUrl: './jd-details.component.html',
            styleUrls: ['./jd-details.component.css'],
            providers: [mysql_service_1.MySqlService],
        }),
        tslib_1.__metadata("design:paramtypes", [mysql_service_1.MySqlService, http_1.HttpClient])
    ], JdDetailsComponent);
    return JdDetailsComponent;
}());
exports.JdDetailsComponent = JdDetailsComponent;
//# sourceMappingURL=jd-details.component.js.map