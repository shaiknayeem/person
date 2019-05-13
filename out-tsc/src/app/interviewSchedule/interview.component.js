"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../services/mysql.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var http_1 = require("@angular/common/http");
var InterviewScheduleComponent = /** @class */ (function () {
    function InterviewScheduleComponent(_mySqlService, _http) {
        this._mySqlService = _mySqlService;
        this._http = _http;
        this.data = [];
        this.displayMsg = false;
        this.updateMsg = false;
        this.deleteMsg = false;
        this.dangerMsg = false;
        this.source = new ng2_smart_table_1.LocalDataSource();
        // errorMessage: string;
        this.jdId = JSON.parse(localStorage.getItem('jdIds') || "[]");
        this.interviewType = JSON.parse(localStorage.getItem('interType') || "[]");
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
                candidateName: {
                    title: 'Candidate Name',
                    sort: false,
                },
                shortlisted: {
                    title: 'Shortlisted',
                    sort: false,
                },
                firstRound: {
                    title: 'First Round',
                    sort: false,
                },
                secondRound: {
                    title: 'Second Round',
                    sort: false,
                },
                offered: {
                    title: 'Offered',
                    sort: false,
                },
                jd_id: {
                    title: 'JD ID',
                    type: 'html',
                    sort: false,
                    editor: {
                        type: 'list',
                        config: {
                            list: this.jdId
                        },
                    },
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
    InterviewScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://localhost:6600/getInterview').subscribe(function (data) {
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
        this._http.get('http://localhost:6600/getJD').subscribe(function (data) {
            if (data != undefined || data != null) {
                _this.jdId = [];
                data.forEach(function (obj) {
                    _this.jdId.push({ value: obj.id, title: obj.id });
                });
                console.log(_this.jdId);
            }
            localStorage.setItem('jdIds', JSON.stringify(_this.jdId));
        }, function (error) { console.log(error); });
        this._http.get('http://localhost:6600/getInterviewType').subscribe(function (data) {
            if (data != undefined || data != null) {
                _this.interviewType = [];
                data.forEach(function (obj) {
                    _this.interviewType.push({ value: obj.id, title: obj.id });
                });
                console.log(_this.interviewType);
            }
            localStorage.setItem('interType', JSON.stringify(_this.interviewType));
        }, function (error) { console.log(error); });
        // this._mySqlService.getDataObservable(this.getUrl).subscribe(
        //   data => {
        //     this._mySqlService = data;
        //     this.source.load(data);
        //     console.log(this.source)
        //   }
        // ); 
    };
    InterviewScheduleComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this._http.post('http://localhost:6600/deleteInterview', event.data).subscribe(function (res) {
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
    InterviewScheduleComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/saveInterview', event.newData).subscribe(function (res) {
            _this.displayMsg = true;
            _this.successMsg = " Details of ID" + " ' " + event.newData.id + " ' " + " created successfully ";
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
    InterviewScheduleComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/updateInterview', event.newData).subscribe(function (res) {
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
    InterviewScheduleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-interview',
            templateUrl: './interview.component.html',
            styleUrls: ['./interview.component.css'],
            providers: [mysql_service_1.MySqlService],
        }),
        tslib_1.__metadata("design:paramtypes", [mysql_service_1.MySqlService, http_1.HttpClient])
    ], InterviewScheduleComponent);
    return InterviewScheduleComponent;
}());
exports.InterviewScheduleComponent = InterviewScheduleComponent;
//# sourceMappingURL=interview.component.js.map