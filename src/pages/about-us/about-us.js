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
import { NavController, NavParams } from 'ionic-angular';
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.year = new Date().getFullYear();
        this.languageSelected = localStorage.getItem('LV');
        if (this.languageSelected == 1) {
            this.languageSelected = "english";
            console.log("english selected");
        }
        else if (this.languageSelected == 2) {
            this.languageSelected = "nepali";
            console.log("nepali selected");
        }
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
    };
    AboutUsPage = __decorate([
        Component({
            selector: 'page-about-us',
            templateUrl: 'about-us.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AboutUsPage);
    return AboutUsPage;
}());
export { AboutUsPage };
//# sourceMappingURL=about-us.js.map