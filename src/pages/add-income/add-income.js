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
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AddIncomeDemoPage } from '../add-income-demo/add-income-demo';
var AddIncomePage = /** @class */ (function () {
    function AddIncomePage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userType = this.userInfo.usertype;
        if (this.userType == "Student") {
            this.userTypeSelected = "Student";
        }
        else if (this.userType == "Professional") {
            this.userTypeSelected = "Professional";
        }
        else if (this.userType == "Housewife") {
            this.userTypeSelected = "Housewife";
        }
        console.log(this.userType);
    }
    AddIncomePage.prototype.ionViewDidLoad = function () {
    };
    AddIncomePage.prototype.incomeCategory = function (categoryID, name) {
        this.navCtrl.push(AddIncomeDemoPage, { 'catName': categoryID,
            'nepalicatName': name });
    };
    AddIncomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-add-income',
            templateUrl: 'add-income.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController,
            ToastController])
    ], AddIncomePage);
    return AddIncomePage;
}());
export { AddIncomePage };
//# sourceMappingURL=add-income.js.map