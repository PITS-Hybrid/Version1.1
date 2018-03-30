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
import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Md5 } from 'ts-md5/dist/md5';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, translate, auth, toastCtrl) {
        // var sessionId= localStorage.getItem('sessionItem');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.userInfo = localStorage.getItem('userInfo');
        console.log(this.userInfo);
        // if(sessionItem == undefined ){
        if (this.userInfo != undefined) {
            this.navCtrl.setRoot(HomePage);
        }
        else if (this.userInfo == undefined) {
            console.log('undefined found');
        }
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.changeToEnglish = function () {
        this.translate.setDefaultLang('eng');
    };
    SignInPage.prototype.changeToNepali = function () {
        this.translate.setDefaultLang('nep');
    };
    SignInPage.prototype.signIn = function () {
        var _this = this;
        this.username = this.username.toLowerCase();
        if (this.username == undefined || this.password == undefined) {
            var toast = this.toastCtrl.create({
                message: 'Please fill in the missing fields',
                duration: 1000,
                position: 'top'
            });
            toast.present();
            console.log(this.username);
            console.log(this.password);
        }
        else {
            var User = {
                username: this.username,
                password: Md5.hashStr(this.password)
            };
            this.auth.checkLogin(this.username, this.password).subscribe(function (data) {
                var timestamp = new Date().getTime();
                _this.userInfo = {
                    type: 'userInfo',
                    usertype: "",
                    sessionid: data[0]._id,
                    language: ""
                };
                if (data == '') {
                    var toast = _this.toastCtrl.create({
                        message: 'Incorrect username or password',
                        duration: 1000,
                        position: 'top'
                    });
                    toast.present();
                }
                else {
                    // window.localStorage.setItem('sessionItem', data[0]._id);
                    //window.localStorage.setItem('sessionItem', '1');
                    //console.log(localStorage.getItem('sessionItem'));
                    //console.log(window.localStorage.getItem('sessionItem'));
                    // window.localStorage.setItem('userinfo', JSON.stringify(User));
                    localStorage.setItem('userInfo', JSON.stringify(_this.userInfo));
                    _this.navCtrl.setRoot(HomePage);
                    console.log(_this.userInfo);
                }
            });
        }
    };
    SignInPage.prototype.languageOption = function (languageValue) {
        if (languageValue == 1) {
            this.translate.setDefaultLang('en');
            this.navCtrl.setRoot(this.navCtrl.getActive().component).then(function () { });
        }
        else if (languageValue == 2) {
            this.navCtrl.setRoot(this.navCtrl.getActive().component).then(function () { });
            this.translate.setDefaultLang('nep');
        }
    };
    SignInPage.prototype.createAccount = function () {
        this.navCtrl.push(SignUpPage, { 'tempLanguageSelected': this.translate.getDefaultLang() });
    };
    SignInPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-sign-in',
            templateUrl: 'sign-in.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, TranslateService,
            AuthServiceProvider, ToastController])
    ], SignInPage);
    return SignInPage;
}());
export { SignInPage };
//# sourceMappingURL=sign-in.js.map