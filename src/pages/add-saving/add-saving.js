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
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddSavingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddSavingPage = /** @class */ (function () {
    function AddSavingPage(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userID = this.userInfo.sessionid;
    }
    AddSavingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSavingPage');
    };
    AddSavingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddSavingPage.prototype.addSaving = function () {
        this.languageSelected = localStorage.getItem('LV');
        var timestamp = new Date().getTime();
        var newSaving = {
            type: 'Saving',
            amount: this.amount.value,
            institute: this.savinginstitute.value,
            income_source: this.incomesource.value,
            date: this.myDate,
            ID: timestamp,
            note: this.note.value,
            userID: this.userID
        };
        if (this.amount.value == "" || this.myDate == undefined) {
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
            localStorage.setItem(timestamp.toString(), JSON.stringify(newSaving));
            console.log(newSaving);
            this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        }
    };
    __decorate([
        ViewChild('amt'),
        __metadata("design:type", Object)
    ], AddSavingPage.prototype, "amount", void 0);
    __decorate([
        ViewChild('savinginstitute'),
        __metadata("design:type", Object)
    ], AddSavingPage.prototype, "savinginstitute", void 0);
    __decorate([
        ViewChild('incomesource'),
        __metadata("design:type", Object)
    ], AddSavingPage.prototype, "incomesource", void 0);
    __decorate([
        ViewChild('note'),
        __metadata("design:type", Object)
    ], AddSavingPage.prototype, "note", void 0);
    AddSavingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-add-saving',
            templateUrl: 'add-saving.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController,
            ToastController])
    ], AddSavingPage);
    return AddSavingPage;
}());
export { AddSavingPage };
//# sourceMappingURL=add-saving.js.map