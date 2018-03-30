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
import { Config, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutUsPage } from '../pages/about-us/about-us';
import { IncomeReportPage } from '../pages/income-report/income-report';
import { ExpenseReportPage } from '../pages/expense-report/expense-report';
import { TranslateService } from '@ngx-translate/core';
import { SignInPage } from '../pages/sign-in/sign-in';
var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, statusBar, splashScreen, config) {
        this.translate = translate;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.config = config;
        this.rootPage = SignInPage;
        this.initTranslate();
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.initTranslate = function () {
        this.translate.setDefaultLang('nep');
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log(this.userInfo);
        if (this.userInfo == "" || this.userInfo == null) {
            this.translate.setDefaultLang('en');
            this.languageSelected = "english";
        }
        else if (this.userInfo.language == 1) {
            this.languageSelected = "english";
            console.log('english selected');
            this.translate.setDefaultLang('en');
        }
        else if (this.userInfo.language == 2) {
            this.languageSelected = "nepali";
            console.log('nepali selected');
            this.translate.setDefaultLang('nep');
        }
        // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
        //     this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        //   });
    };
    MyApp.prototype.openIncomeReportPage = function () {
        this.nav.push(IncomeReportPage);
    };
    MyApp.prototype.openExpenseReportPage = function () {
        this.nav.push(ExpenseReportPage);
    };
    MyApp.prototype.openAboutUsPage = function () {
        this.nav.push(AboutUsPage);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [TranslateService, Platform, StatusBar,
            SplashScreen, Config])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map