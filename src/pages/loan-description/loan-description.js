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
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoanDescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoanDescriptionPage = /** @class */ (function () {
    function LoanDescriptionPage(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loan = navParams.get("LOAN");
        console.log(this.loan);
        this.languageSelected = localStorage.getItem('LV');
        this.loanStatus = this.loan.status;
        if (this.loanStatus == true) {
            this.loanStatusPlaceholder = "Paid";
        }
        else if (this.loanStatus == false) {
            this.loanStatusPlaceholder = "Unpaid";
        }
        console.log(this.loanStatus);
        this.loanAmount = this.loan.amount;
        this.loanStartDate = this.loan.startdate;
        this.loanEndDate = this.loan.enddate;
        this.loanNameOfPerson = this.loan.nameofperson;
        this.loanNote = this.loan.note;
        this.loanInterestRate = this.loan.interest;
        this.loanTotalInterest = this.loan.totalinterest;
        this.loanMonthlyPayment = this.loan.monthlypayment;
        this.loanTotalPayment = this.loan.totalpayment;
        if (this.loanStatus != undefined) {
            if (this.loanStatus == true) {
                this.isToggled = true;
            }
            else if (this.loanStatus == false) {
                this.isToggled = false;
            }
        }
    }
    LoanDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoanDescriptionPage');
    };
    LoanDescriptionPage.prototype.dismiss = function () {
        console.log(this.updatedloan);
        this.navCtrl.setRoot(HomePage);
        if (this.languageSelected == 1) {
            var toast = this.toastCtrl.create({
                message: 'Loan Information has been saved',
                duration: 1000
            });
            toast.present();
        }
        else if (this.languageSelected == 2) {
            var toast = this.toastCtrl.create({
                message: 'सफल भएको छ!',
                duration: 1000
            });
            toast.present();
        }
    };
    LoanDescriptionPage.prototype.notifyStatus = function (event) {
        this.loanStatus = event.checked;
        if (this.loanStatus == true) {
            this.loanStatusPlaceholder = "Paid";
        }
        else if (this.loanStatus == false) {
            this.loanStatusPlaceholder = "Unpaid";
        }
        console.log(event.checked);
        var timestamp = new Date().getTime();
        this.updatedloan = {
            type: this.loan.type,
            amount: this.loan.amount,
            startdate: this.loan.startdate,
            enddate: this.loan.enddate,
            interest: this.loan.interest,
            nameofperson: this.loan.nameofperson,
            monthlypayment: this.loan.monthlypayment,
            totalpayment: this.loan.totalpayment,
            totalinterest: this.loan.totalinterest,
            note: this.loan.note,
            ID: this.loan.ID,
            userID: this.loan.userID,
            status: event.checked
        };
        console.log(this.loan.ID);
        localStorage.setItem(this.loan.ID, JSON.stringify(this.updatedloan));
        console.log(this.updatedloan);
    };
    LoanDescriptionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-loan-description',
            templateUrl: 'loan-description.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, ToastController])
    ], LoanDescriptionPage);
    return LoanDescriptionPage;
}());
export { LoanDescriptionPage };
//# sourceMappingURL=loan-description.js.map