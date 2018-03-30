var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
var AddIncomeDemoPage = /** @class */ (function () {
    function AddIncomeDemoPage(navCtrl, navParams, toastCtrl, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userID = this.userInfo.sessionid;
        console.log(this.userID);
        this.categoryParam = navParams.get("catName");
        this.nepalicategoryParam = navParams.get("nepalicatName");
        this.languageSelected = this.userInfo.language;
        console.log(this.languageSelected);
        if (this.languageSelected == 1) {
            this.catParam = navParams.get("catName");
        }
        else if (this.languageSelected == 2) {
            this.catParam = navParams.get("nepalicatName");
        }
    }
    AddIncomeDemoPage.prototype.ionViewDidLoad = function () {
    };
    AddIncomeDemoPage.prototype.addIncome = function () {
        var timestamp = new Date().getTime();
        var newIncome = {
            type: 'Income',
            amount: this.amountofIncome.value,
            category_name_nepali: this.nepalicategoryParam,
            category_name: this.categoryParam,
            date: this.myDate,
            ID: timestamp,
            note: this.note.value,
            userID: this.userID
        };
        if (this.amountofIncome.value == "" || this.myDate == undefined) {
            if (this.languageSelected == "1") {
                var toast = this.toastCtrl.create({
                    message: 'Please fill in the missing fields',
                    duration: 1000
                });
                toast.present();
            }
            else if (this.languageSelected == "2") {
                var toast = this.toastCtrl.create({
                    message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
                    duration: 1000
                });
                toast.present();
            }
        }
        else {
            if (this.languageSelected == "1") {
                var toast = this.toastCtrl.create({
                    message: 'New Income Added',
                    duration: 1000
                });
                toast.present();
            }
            else if (this.languageSelected == "2") {
                var toast = this.toastCtrl.create({
                    message: 'नयाँ आम्दनी थप् भएको छ',
                    duration: 1000
                });
                toast.present();
            }
            localStorage.setItem(timestamp.toString(), JSON.stringify(newIncome));
            console.log(newIncome);
            this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        }
    };
    __decorate([
        ViewChild('amt'),
        __metadata("design:type", Object)
    ], AddIncomeDemoPage.prototype, "amountofIncome", void 0);
    __decorate([
        ViewChild('date'),
        __metadata("design:type", Object)
    ], AddIncomeDemoPage.prototype, "date", void 0);
    __decorate([
        ViewChild('note'),
        __metadata("design:type", Object)
    ], AddIncomeDemoPage.prototype, "note", void 0);
    AddIncomeDemoPage = __decorate([
        Component({
            selector: 'page-add-income-demo',
            templateUrl: 'add-income-demo.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            ToastController, AlertController, AuthServiceProvider])
    ], AddIncomeDemoPage);
    return AddIncomeDemoPage;
}());
export { AddIncomeDemoPage };
//# sourceMappingURL=add-income-demo.js.map