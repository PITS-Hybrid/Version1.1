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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpModule } from '@angular/http';
import * as EmailValidator from 'email-validator';
import { ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, auth, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.flag = 0;
        this.tempLanguageSelected = navParams.get('tempLanguageSelected');
        console.log(this.tempLanguageSelected);
        if (this.tempLanguageSelected == "en") {
            this.translate.setDefaultLang('en');
        }
        else if (this.tempLanguageSelected == "nep") {
            this.translate.setDefaultLang('nep');
        }
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signIn = function () {
        this.navCtrl.setRoot(SignInPage);
    };
    SignUpPage.prototype.checkEmail = function (email) {
        var _this = this;
        console.log(email);
        this.email = email.toLowerCase();
        this.auth.checkSignUp(this.email).subscribe(function (data) {
            console.log(data[0]);
            if (data[0] == undefined) {
                console.log("hello");
                if ((EmailValidator.validate(email))) {
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Email Address is not valid',
                        duration: 1000,
                        position: 'top'
                    });
                    toast.present();
                    console.log('email succesful');
                }
            }
            else {
                _this.flag = _this.flag + 1;
                var toast = _this.toastCtrl.create({
                    message: 'Email Address already registered',
                    duration: 1000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    SignUpPage.prototype.checkContactNumber = function (phone) {
        var _this = this;
        this.auth.checkSignUp(phone).subscribe(function (data) {
            console.log(data[0]);
            if (data[0] == undefined) {
                console.log("hello");
            }
            else {
                _this.flag = _this.flag + 1;
                var toast = _this.toastCtrl.create({
                    message: 'Contact Number already registered',
                    duration: 1000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    SignUpPage.prototype.signUp = function () {
        if (this.email == undefined || this.phone == undefined || this.password == undefined) {
            var toast = this.toastCtrl.create({
                message: 'Please fill in the missing fields',
                duration: 500,
                position: 'top'
            });
            toast.present();
        }
        else if (this.flag > 1) {
            var toast = this.toastCtrl.create({
                message: 'Already used details, Please signup with a different email or contact',
                duration: 1000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var newUser = {
                phone: this.phone,
                email: this.email,
                password: this.password,
                info: {
                    userType: this.typeOfUser.value,
                    language: this.language.value
                }
            };
            console.log(newUser);
            this.auth.signUp(newUser).subscribe();
            this.navCtrl.setRoot(SignInPage);
        }
    };
    __decorate([
        ViewChild('typeofuser'),
        __metadata("design:type", Object)
    ], SignUpPage.prototype, "typeOfUser", void 0);
    __decorate([
        ViewChild('language'),
        __metadata("design:type", Object)
    ], SignUpPage.prototype, "language", void 0);
    SignUpPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-sign-up',
            templateUrl: 'sign-up.html',
            providers: [AuthServiceProvider, HttpModule, Md5],
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider,
            ToastController, TranslateService])
    ], SignUpPage);
    return SignUpPage;
}());
export { SignUpPage };
//# sourceMappingURL=sign-up.js.map