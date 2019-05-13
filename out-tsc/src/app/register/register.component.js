"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var mysql_service_1 = require("../services/mysql.service");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var collections_1 = require("@angular/cdk/collections");
var add_dialog_component_1 = require("../dialog/add/add.dialog.component");
var edit_dialog_component_1 = require("../dialog/edit/edit.dialog.component");
var delete_dialog_component_1 = require("../dialog/delete/delete.dialog.component");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpClient, dialog, _mySqlService) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this._mySqlService = _mySqlService;
        this.displayedColumns = ['id', 'state', 'url', 'created_at', 'updated_at', 'no', 'fresher', 'actions'];
    }
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        this.getDataObservable();
    };
    RegisterComponent.prototype.refresh = function () {
        this.getDataObservable();
    };
    RegisterComponent.prototype.addNew = function (issue) {
        var _this = this;
        var dialogRef = this.dialog.open(add_dialog_component_1.AddDialogComponent, {
            data: { issue: issue }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                _this.exampleDatabase.dataChange.value.push(_this._mySqlService.getDialogData());
                _this.refreshTable();
            }
        });
    };
    RegisterComponent.prototype.startEdit = function (i, id, state, url, created_at, updated_at, no, fresher) {
        var _this = this;
        this.id = id;
        // index row is used just for debugging proposes and can be removed
        this.index = i;
        console.log(this.index);
        var dialogRef = this.dialog.open(edit_dialog_component_1.EditDialogComponent, {
            data: { id: id, state: state, url: url, created_at: created_at, updated_at: updated_at, no: no, fresher: fresher }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this.exampleDatabase.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // Then you update that record using data from dialogData (values you enetered)
                _this.exampleDatabase.dataChange.value[foundIndex] = _this._mySqlService.getDialogData();
                // And lastly refresh table
                _this.refreshTable();
            }
        });
    };
    RegisterComponent.prototype.deleteItem = function (i, id, state, url) {
        var _this = this;
        this.index = i;
        this.id = id;
        var dialogRef = this.dialog.open(delete_dialog_component_1.DeleteDialogComponent, {
            data: { id: id, state: state, url: url }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                var foundIndex = _this.exampleDatabase.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // for delete we use splice in order to remove single object from DataService
                _this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                _this.refreshTable();
            }
        });
    };
    RegisterComponent.prototype.refreshTable = function () {
        // Refreshing table using paginator
        // Thanks yeager-j for tips
        // https://github.com/marinantonio/angular-mat-table-crud/issues/12
        this.paginator._changePageSize(this.paginator.pageSize);
    };
    /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
      // OLD METHOD:
      // if there's a paginator active we're using it for refresh
      if (this.dataSource._paginator.hasNextPage()) {
        this.dataSource._paginator.nextPage();
        this.dataSource._paginator.previousPage();
        // in case we're on last page this if will tick
      } else if (this.dataSource._paginator.hasPreviousPage()) {
        this.dataSource._paginator.previousPage();
        this.dataSource._paginator.nextPage();
        // in all other cases including active filter we do it like this
      } else {
        this.dataSource.filter = '';
        this.dataSource.filter = this.filter.nativeElement.value;
      }*/
    RegisterComponent.prototype.getDataObservable = function () {
        var _this = this;
        this.exampleDatabase = new mysql_service_1.MySqlService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        console.log(this.dataSource);
        rxjs_1.fromEvent(this.filter.nativeElement, 'keyup')
            // .debounceTime(150)
            // .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild(material_1.MatPaginator),
        tslib_1.__metadata("design:type", material_1.MatPaginator)
    ], RegisterComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        core_1.ViewChild(material_1.MatSort),
        tslib_1.__metadata("design:type", material_1.MatSort)
    ], RegisterComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('filter'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "filter", void 0);
    RegisterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: 'register.component.html',
            styleUrls: ['./register.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
            material_1.MatDialog,
            mysql_service_1.MySqlService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
var ExampleDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs_1.BehaviorSubject('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];
        this._exampleDatabase.getAllIssues();
        return rxjs_1.merge.apply(void 0, displayDataChanges).pipe(operators_1.map(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (issue) {
                var searchStr = (issue.id + issue.title + issue.url).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var _a, _b, _c;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                // case 'title': [propertyA, propertyB] = [a.title, b.title]; break;
                case 'state':
                    _b = [a.state, b.state], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'url':
                    _c = [a.url, b.url], propertyA = _c[0], propertyB = _c[1];
                    break;
                // case 'created_at': [propertyA, propertyB] = [a.created_at, b.created_at]; break;
                // case 'updated_at': [propertyA, propertyB] = [a.updated_at, b.updated_at]; break;
                //case 'no': [propertyA, propertyB] = [a.no, b.no]; break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    return ExampleDataSource;
}(collections_1.DataSource));
exports.ExampleDataSource = ExampleDataSource;
//# sourceMappingURL=register.component.js.map