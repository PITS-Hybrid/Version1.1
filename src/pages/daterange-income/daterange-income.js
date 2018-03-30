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
import { DaterangeIncomeReportPage } from '../daterange-income-report/daterange-income-report';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the DaterangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DaterangeIncomePage = /** @class */ (function () {
    function DaterangeIncomePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.languageSelected = localStorage.getItem('LV');
    }
    DaterangeIncomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaterangePage');
    };
    DaterangeIncomePage.prototype.setRange = function () {
        if (this.myStartDate == undefined || this.myEndDate == undefined) {
            if (this.languageSelected == 1) {
                var toast = this.toastCtrl.create({
                    message: 'Please fill in all the details',
                    duration: 1000
                });
                toast.present();
            }
            else if (this.languageSelected == 2) {
                var toast = this.toastCtrl.create({
                    message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
                    duration: 1000
                });
                toast.present();
            }
        }
        else {
            this.navCtrl.push(DaterangeIncomeReportPage, { 'startDateValue': this.myStartDate,
                'endDateValue': this.myEndDate
            }, { animate: true, direction: 'forward' });
        }
    };
    DaterangeIncomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-daterange-income',
            templateUrl: 'daterange-income.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ToastController])
    ], DaterangeIncomePage);
    return DaterangeIncomePage;
}());
export { DaterangeIncomePage };
//# sourceMappingURL=daterange-income.js.map