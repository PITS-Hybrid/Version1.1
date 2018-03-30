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
import { YearlyExpenseReportPage } from '../yearly-expense-report/yearly-expense-report';
/**
 * Generated class for the PopoverExpenseYearPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverExpenseYearPage = /** @class */ (function () {
    function PopoverExpenseYearPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverExpenseYearPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverExpenseYearPage');
    };
    PopoverExpenseYearPage.prototype.yearName = function (yearID) {
        this.navCtrl.push(YearlyExpenseReportPage, { 'yearName': yearID });
    };
    PopoverExpenseYearPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-popover-expense-year',
            templateUrl: 'popover-expense-year.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PopoverExpenseYearPage);
    return PopoverExpenseYearPage;
}());
export { PopoverExpenseYearPage };
//# sourceMappingURL=popover-expense-year.js.map