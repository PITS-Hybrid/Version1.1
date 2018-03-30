var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';
var MoreReportIncomePage = /** @class */ (function () {
    function MoreReportIncomePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.year = new Date().getFullYear();
    }
    MoreReportIncomePage.prototype.ionViewDidLoad = function () {
    };
    MoreReportIncomePage.prototype.monthWise = function (event) {
        this.navCtrl.push(MonthWiseIncomeReport, { 'monthName': this.monthName }, { animate: true, direction: 'forward' });
    };
    MoreReportIncomePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MoreReportIncomePage = __decorate([
        Component({
            selector: 'more-report-income',
            templateUrl: 'more-report-income.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController])
    ], MoreReportIncomePage);
    return MoreReportIncomePage;
}());
export { MoreReportIncomePage };
//# sourceMappingURL=more-report-income.js.map