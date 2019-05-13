"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
require("Rxjs/add/operator/map");
require("rxjs/Rx"); //get everything from Rx  
require("rxjs/add/operator/toPromise");
var MySqlService = /** @class */ (function () {
    function MySqlService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://api.github.com/repos/angular/angular/issues';
        this.API_URL1 = 'http://localhost:6600/getInterviewer';
        this.dataChange = new rxjs_1.BehaviorSubject([]);
        this.dataChange2 = new rxjs_1.BehaviorSubject([]);
    }
    Object.defineProperty(MySqlService.prototype, "data", {
        get: function () {
            console.log(this.dataChange2.value);
            return this.dataChange2.value;
        },
        enumerable: true,
        configurable: true
    });
    MySqlService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    MySqlService.prototype.getDialogData2 = function () {
        return this.dialogData2;
    };
    /** CgetAllIssues2RUD METHODS */
    MySqlService.prototype.getAllIssues = function () {
        var _this = this;
        this.httpClient.get(this.API_URL).subscribe(function (data) {
            console.log(data);
            _this.dataChange.next(data);
        }, function (error) {
            console.log(error.name + ' ' + error.message);
        });
    };
    MySqlService.prototype.getAllIssues2 = function () {
        var _this = this;
        this.httpClient.get(this.API_URL1).subscribe(function (data) {
            console.log(data);
            _this.dataChange2.next(data);
        }, function (error) {
            console.log(error.name + ' ' + error.message);
        });
    };
    // DEMO ONLY, you can find working methods below
    MySqlService.prototype.addIssue = function (issue) {
        this.dialogData = issue;
    };
    MySqlService.prototype.addIssue2 = function (issue) {
        console.log("dataservice :" + issue);
        this.httpClient.post('http://localhost:6600/saveInterviewer', issue).subscribe(function (res) {
            // event.confirm.resolve(event.newData);
            // this.displayMsg = true;
            // this.successMsg =" Person Info of  Name"+" ' " + event.newData.name+" ' "+" created successfully "
            // setTimeout(() => {
            //   this.displayMsg = false;
            // }, 5000);
            console.log(res);
        }, function (error) {
            // this.dangerMsg = true;
            // this.msg = error.error.sqlMessage;
            setTimeout(function () {
                // this.dangerMsg = false;
            }, 6000);
            console.log(error);
        });
        this.dialogData2 = issue;
    };
    MySqlService.prototype.updateIssue = function (issue) {
        this.dialogData = issue;
    };
    MySqlService.prototype.updateIssue2 = function (issue) {
        this.dialogData2 = issue;
    };
    MySqlService.prototype.deleteIssue = function (id) {
        console.log(id);
    };
    MySqlService.prototype.deleteIssue2 = function (id) {
        console.log(id);
    };
    MySqlService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], MySqlService);
    return MySqlService;
}());
exports.MySqlService = MySqlService;
//
/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:
    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }
    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/ 
//# sourceMappingURL=mysql.service.js.map