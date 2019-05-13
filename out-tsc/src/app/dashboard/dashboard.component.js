"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.pieChartOptions = {
            responsive: true,
            plugins: {
                datalabels: {
                    formatter: function (value, ctx) {
                        var label = ctx.chart.data.labels[ctx.dataIndex];
                        return label;
                    },
                },
            }
        };
        this.pieChartLabels = ['Interviewer', ' Interviews', 'Candidates', 'Selected'];
        this.pieChartData = [30, 300, 200, 50];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DashboardComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DashboardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map