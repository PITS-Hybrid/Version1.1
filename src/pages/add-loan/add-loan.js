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
 * Generated class for the AddLoanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddLoanPage = /** @class */ (function () {
    function AddLoanPage(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loanType = navParams.get("loanType");
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userID = this.userInfo.sessionid;
        console.log(this.loanType);
    }
    AddLoanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddLoanPage');
    };
    AddLoanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddLoanPage.prototype.startDateChange = function () {
    };
    AddLoanPage.prototype.endDateChange = function () {
        console.log(this.startDate);
        console.log(this.endDate);
        var startDate = Date.parse(this.startDate);
        console.log(startDate);
        var endDate = Date.parse(this.endDate);
        console.log(endDate);
        var timeDiff = endDate - startDate;
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        this.differenceInYear = this.round(daysDiff / 365);
        console.log(this.differenceInYear);
    };
    AddLoanPage.prototype.round = function (x) {
        return Math.round(x * 100) / 100;
    };
    AddLoanPage.prototype.calculate = function () {
        var principal = this.Amount.value;
        var interest = this.Interest.value / 100 / 12;
        var payments = this.differenceInYear * 12;
        // Now compute the monthly payment figure, using esoteric math.
        var x = Math.pow(1 + interest, payments);
        var monthly = (principal * x * interest) / (x - 1);
        // Check that the result is a finite number. If so, display the results.
        if (!isNaN(monthly) &&
            (monthly != Number.POSITIVE_INFINITY) &&
            (monthly != Number.NEGATIVE_INFINITY)) {
            this.monthlypayment.value = this.round(monthly);
            this.totalpayment.value = this.round(monthly * payments);
            this.totalinterest.value =
                this.round((monthly * payments) - principal);
        }
        else {
            this.monthlypayment.value = "";
            this.totalpayment.value = "";
            this.totalinterest.value = "";
        }
    };
    AddLoanPage.prototype.addLoan = function () {
        this.languageSelected = localStorage.getItem('LV');
        var timestamp = new Date().getTime();
        if (this.loanType == "Loan Given") {
            this.loan = {
                type: 'LoanGiven',
                amount: this.Amount.value,
                startdate: this.startDate,
                enddate: this.endDate,
                interest: this.Interest.value,
                nameofperson: this.NameOfPerson.value,
                monthlypayment: this.monthlypayment.value,
                totalpayment: this.totalpayment.value,
                totalinterest: this.totalinterest.value,
                note: this.Note.value,
                ID: timestamp,
                userID: this.userID,
                status: ""
            };
        }
        else if (this.loanType == "Loan Taken") {
            this.loan = {
                type: 'LoanTaken',
                amount: this.Amount.value,
                startdate: this.startDate,
                enddate: this.endDate,
                interest: this.Interest.value,
                nameofperson: this.NameOfPerson.value,
                monthlypayment: this.monthlypayment.value,
                totalpayment: this.totalpayment.value,
                totalinterest: this.totalinterest.value,
                note: this.Note.value,
                ID: timestamp,
                userID: this.userID,
                status: ""
            };
        }
        if (this.Amount.value == "" || this.startDate == undefined) {
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
                    message: 'Loan Added',
                    duration: 1000
                });
                toast.present();
            }
            else if (this.languageSelected == 2) {
                var toast = this.toastCtrl.create({
                    message: 'नयाँ Loan थप् भएको छ',
                    duration: 1000
                });
                toast.present();
            }
            localStorage.setItem(timestamp.toString(), JSON.stringify(this.loan));
            console.log(this.loan);
            this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        }
    };
    __decorate([
        ViewChild('amt'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "Amount", void 0);
    __decorate([
        ViewChild('date'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "Date", void 0);
    __decorate([
        ViewChild('nameofperson'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "NameOfPerson", void 0);
    __decorate([
        ViewChild('note'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "Note", void 0);
    __decorate([
        ViewChild('interest'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "Interest", void 0);
    __decorate([
        ViewChild('monthlypayment'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "monthlypayment", void 0);
    __decorate([
        ViewChild('totalpayment'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "totalpayment", void 0);
    __decorate([
        ViewChild('totalinterest'),
        __metadata("design:type", Object)
    ], AddLoanPage.prototype, "totalinterest", void 0);
    AddLoanPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-add-loan',
            templateUrl: 'add-loan.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController,
            ToastController])
    ], AddLoanPage);
    return AddLoanPage;
}());
export { AddLoanPage };
//# sourceMappingURL=add-loan.js.map