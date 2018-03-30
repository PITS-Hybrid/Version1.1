var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyIncomeReportPage } from './daily-income-report';
var DailyIncomeReportPageModule = /** @class */ (function () {
    function DailyIncomeReportPageModule() {
    }
    DailyIncomeReportPageModule = __decorate([
        NgModule({
            declarations: [
                DailyIncomeReportPage,
            ],
            imports: [
                IonicPageModule.forChild(DailyIncomeReportPage),
            ],
            exports: [
                DailyIncomeReportPage
            ]
        })
    ], DailyIncomeReportPageModule);
    return DailyIncomeReportPageModule;
}());
export { DailyIncomeReportPageModule };
//# sourceMappingURL=daily-income-report.module.js.map