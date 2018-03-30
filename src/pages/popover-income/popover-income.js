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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';
import { DailyIncomeReportPage } from '../daily-income-report/daily-income-report';
import { YearlyIncomeReportPage } from '../yearly-income-report/yearly-income-report';
import { DaterangeIncomePage } from '../daterange-income/daterange-income';
var PopoverIncomePage = /** @class */ (function () {
    // yearName;
    function PopoverIncomePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    //  monthName(monthValue){
    // this.navCtrl.push(MonthWiseIncomeReport, {'monthName': monthValue}, {animate: true, direction: 'forward'})
    //   console.log(this.os);
    //  }
    PopoverIncomePage.prototype.monthly = function () {
        this.navCtrl.push(MonthWiseIncomeReport);
    };
    PopoverIncomePage.prototype.daily = function () {
        this.navCtrl.push(DailyIncomeReportPage);
    };
    // public yearWise(event){
    //   this.navCtrl.push(YearlyIncomeReportPage, {'yearName': this.yearName}, {animate: true, direction: 'forward'})
    // }
    PopoverIncomePage.prototype.yearly = function () {
        this.navCtrl.push(YearlyIncomeReportPage);
    };
    PopoverIncomePage.prototype.daterange = function () {
        this.navCtrl.push(DaterangeIncomePage);
    };
    PopoverIncomePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverIncomePage.prototype.ionViewDidLoad = function () {
    };
    PopoverIncomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-popover-income',
            templateUrl: 'popover-income.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController])
    ], PopoverIncomePage);
    return PopoverIncomePage;
}());
export { PopoverIncomePage };
//# sourceMappingURL=popover-income.js.map