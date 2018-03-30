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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonthwiseExpenseReportPage } from '../monthwise-expense-report/monthwise-expense-report';
import { DailyExpenseReportPage } from '../daily-expense-report/daily-expense-report';
import { YearlyExpenseReportPage } from '../yearly-expense-report/yearly-expense-report';
import { DaterangeExpensePage } from '../daterange-expense/daterange-expense';
/**
 * Generated class for the PopoverExpensePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverExpensePage = /** @class */ (function () {
    function PopoverExpensePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverExpensePage.prototype.daily = function () {
        this.navCtrl.push(DailyExpenseReportPage);
    };
    PopoverExpensePage.prototype.monthly = function () {
        this.navCtrl.push(MonthwiseExpenseReportPage);
    };
    PopoverExpensePage.prototype.yearly = function () {
        this.navCtrl.push(YearlyExpenseReportPage);
    };
    PopoverExpensePage.prototype.daterange = function () {
        this.navCtrl.push(DaterangeExpensePage);
    };
    PopoverExpensePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-popover-expense',
            templateUrl: 'popover-expense.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PopoverExpensePage);
    return PopoverExpensePage;
}());
export { PopoverExpensePage };
//# sourceMappingURL=popover-expense.js.map