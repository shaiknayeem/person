"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatRadioModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatSelectModule,
            ],
            exports: [
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatRadioModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatSelectModule,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map