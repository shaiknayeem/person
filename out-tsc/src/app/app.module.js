"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_charts_1 = require("ng2-charts");
var ng2_smart_table_1 = require("ng2-smart-table");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var person_info_component_1 = require("./person-info/person-info.component");
var address_component_1 = require("./address/address.component");
var client_details_component_1 = require("./client-details/client-details.component");
var country_component_1 = require("./country/country.component");
var project_details_component_1 = require("./project-details/project-details.component");
var jd_details_component_1 = require("./jd-details/jd-details.component");
var interview_type_component_1 = require("./interview-type/interview-type.component");
var interviewer_component_1 = require("./interviewer/interviewer.component");
var interview_component_1 = require("./interviewSchedule/interview.component");
var person_jd_details_component_1 = require("./person-jd-details/person-jd-details.component");
var person_reference_component_1 = require("./person-reference/person-reference.component");
var person_reference_type_component_1 = require("./person-reference-type/person-reference-type.component");
var resume_component_1 = require("./resume/resume.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material.module");
var material_1 = require("@angular/material");
var mysql_service_1 = require("./services/mysql.service");
var add_dialog_component_1 = require("./dialog/add/add.dialog.component");
var edit_dialog_component_1 = require("./dialog/edit/edit.dialog.component");
var delete_dialog_component_1 = require("./dialog/delete/delete.dialog.component");
var forms_2 = require("@angular/forms");
var radio_1 = require("@angular/material/radio");
var material_2 = require("@angular/material");
var appRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'personInfo', component: person_info_component_1.PersonInfoComponent },
    { path: 'address', component: address_component_1.AddressComponent },
    { path: 'country', component: country_component_1.CountryComponent },
    { path: 'projectDetails', component: project_details_component_1.ProjectDetailsComponent },
    { path: 'clientDetails', component: client_details_component_1.ClientDetailsComponent },
    { path: 'jdDetails', component: jd_details_component_1.JdDetailsComponent },
    { path: 'pjdDetails', component: person_jd_details_component_1.PersonJdDetailsComponent },
    { path: 'interviewType', component: interview_type_component_1.InterviewTypeComponent },
    { path: 'interviewer', component: interviewer_component_1.InterviewerComponent },
    { path: 'interview', component: interview_component_1.InterviewScheduleComponent },
    { path: 'personRefType', component: person_reference_type_component_1.PersonReferenceTypeComponent },
    { path: 'personRef', component: person_reference_component_1.PersonReferenceComponent },
    { path: 'resume', component: resume_component_1.ResumeComponent },
    { path: 'matTable', component: register_component_1.RegisterComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                dashboard_component_1.DashboardComponent,
                person_info_component_1.PersonInfoComponent,
                address_component_1.AddressComponent,
                client_details_component_1.ClientDetailsComponent,
                country_component_1.CountryComponent,
                project_details_component_1.ProjectDetailsComponent,
                jd_details_component_1.JdDetailsComponent,
                interview_type_component_1.InterviewTypeComponent,
                interviewer_component_1.InterviewerComponent,
                interview_component_1.InterviewScheduleComponent,
                person_jd_details_component_1.PersonJdDetailsComponent,
                person_reference_component_1.PersonReferenceComponent,
                person_reference_type_component_1.PersonReferenceTypeComponent,
                resume_component_1.ResumeComponent,
                add_dialog_component_1.AddDialogComponent,
                edit_dialog_component_1.EditDialogComponent,
                delete_dialog_component_1.DeleteDialogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'universal' }),
                platform_browser_1.BrowserModule, ng2_charts_1.ChartsModule,
                http_1.HttpModule, ng2_smart_table_1.Ng2SmartTableModule,
                forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes), material_module_1.MaterialModule, animations_1.BrowserAnimationsModule,
                material_1.MatDialogModule,
                material_1.MatButtonModule,
                material_1.MatInputModule,
                material_1.MatIconModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatToolbarModule,
                material_1.MatPaginatorModule,
                forms_2.ReactiveFormsModule,
                radio_1.MatRadioModule,
                material_1.MatSelectModule,
                material_2.MatDatepickerModule,
                material_2.MatNativeDateModule,
            ],
            entryComponents: [
                add_dialog_component_1.AddDialogComponent,
                edit_dialog_component_1.EditDialogComponent,
                delete_dialog_component_1.DeleteDialogComponent
            ],
            exports: [],
            providers: [mysql_service_1.MySqlService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map