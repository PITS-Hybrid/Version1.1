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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
var AddExpenseDemoPage = /** @class */ (function () {
    function AddExpenseDemoPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.myDate = new Date().toISOString().substring(0, 10);
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userID = this.userInfo.sessionid;
        this.categoryParam = navParams.get("catName");
        this.nepalicategoryParam = navParams.get("nepalicatName");
        console.log(this.nepalicategoryParam);
        this.languageSelected = this.userInfo.language;
        if (this.languageSelected == 1) {
            this.catParam = navParams.get("catName");
        }
        else if (this.languageSelected == 2) {
            this.catParam = navParams.get("nepalicatName");
        }
    }
    AddExpenseDemoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddExpenseDemoPage');
    };
    AddExpenseDemoPage.prototype.addExpense = function () {
        this.languageSelected = localStorage.getItem('LV');
        var timestamp = new Date().getTime();
        var newExpense = {
            type: 'Expense',
            amount: this.myAmount,
            category_name_nepali: this.nepalicategoryParam,
            category_name: this.categoryParam,
            date: this.myDate,
            ID: timestamp,
            note: this.myNote,
            userID: this.userID
        };
        if (this.myAmount == "" || this.myDate == undefined) {
            if (this.languageSelected == 1) {
                var toast = this.toastCtrl.create({
                    message: 'Please fill in the missing fields',
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
            if (this.languageSelected == 1) {
                var toast = this.toastCtrl.create({
                    message: 'New Income Added',
                    duration: 1000
                });
                toast.present();
            }
            else if (this.languageSelected == 2) {
                var toast = this.toastCtrl.create({
                    message: 'नयाँ आम्दनी थप् भएको छ',
                    duration: 1000
                });
                toast.present();
            }
            localStorage.setItem(timestamp.toString(), JSON.stringify(newExpense));
            this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        }
    };
    AddExpenseDemoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-add-expense-demo',
            templateUrl: 'add-expense-demo.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ToastController, AlertController])
    ], AddExpenseDemoPage);
    return AddExpenseDemoPage;
}());
export { AddExpenseDemoPage };
//# sourceMappingURL=add-expense-demo.js.map