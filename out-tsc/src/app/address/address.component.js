"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../services/mysql.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var http_1 = require("@angular/common/http");
var AddressComponent = /** @class */ (function () {
    function AddressComponent(_mySqlService, _http) {
        this._mySqlService = _mySqlService;
        this._http = _http;
        this.user = [];
        this.data = [];
        this.displayMsg = false;
        this.updateMsg = false;
        this.deleteMsg = false;
        this.dangerMsg = false;
        this.source = new ng2_smart_table_1.LocalDataSource();
        // errorMessage: string;
        this.countryId = JSON.parse(localStorage.getItem('cntryId') || "[]");
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
                city: {
                    title: 'City'
                },
                line1: {
                    title: 'Line1'
                },
                line2: {
                    title: 'Line2'
                },
                line3: {
                    title: 'Line3'
                },
                pincode: {
                    title: 'Pincode'
                },
                state: {
                    title: 'State',
                    width: 25
                },
                clientDetails_id: {
                    title: 'Client Details Id'
                },
                country_id: {
                    title: 'Country Id',
                    width: 25,
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: this.countryId
                        },
                    },
                },
                person_id: {
                    title: 'Person Id'
                },
            },
            attr: {
                class: 'table table-bordered table-hover table-striped'
            },
        };
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://localhost:6600/getAddress').subscribe(function (data) {
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
        this._http.get('http://localhost:6600/getCountry').subscribe(function (data) {
            if (data != undefined || data != null) {
                _this.countryId = [];
                data.forEach(function (obj) {
                    _this.countryId.push({ value: obj.id, title: obj.id });
                });
                console.log(_this.countryId);
            }
            localStorage.setItem('cntryId', JSON.stringify(_this.countryId));
        }, function (error) { console.log(error); });
        // this._mySqlService.getDataObservable(this.getUrl).subscribe(
        //   data => {
        //     this._mySqlService = data;
        //     this.source.load(data);
        //     console.log(this.source)
        //   }
        // ); 
    };
    AddressComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            this._http.post('http://localhost:6600/deleteAddress', event.data).subscribe(function (res) {
                _this.deleteMsg = true;
                _this.deletedMsg = "Address of Person ID " + " ' " + event.data.person_id + " ' " + " deleted successfully";
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
    AddressComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/saveAddress', event.newData).subscribe(function (res) {
            _this.displayMsg = true;
            _this.successMsg = " Address of Person Id" + " ' " + event.newData.person_id + " ' " + " added successfully";
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
    AddressComponent.prototype.onSaveConfirm = function (event) {
        var _this = this;
        this._http.post('http://localhost:6600/updateAddress', event.newData).subscribe(function (res) {
            _this.updateMsg = true;
            _this.updatedMsg = " Address of Person Id" + " ' " + event.newData.person_id + " ' " + " updated successfully ";
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
    AddressComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-address',
            templateUrl: './address.component.html',
            styleUrls: ['./address.component.css'],
            providers: [mysql_service_1.MySqlService],
        }),
        tslib_1.__metadata("design:paramtypes", [mysql_service_1.MySqlService, http_1.HttpClient])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map