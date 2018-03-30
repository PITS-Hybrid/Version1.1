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
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AddLoanPage } from '../add-loan/add-loan';
import { Edit } from '../edit/edit';
import { LoanDescriptionPage } from '../loan-description/loan-description';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoanReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoanReportPage = /** @class */ (function () {
    function LoanReportPage(navCtrl, navParams, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loan = "loangiven";
        this.loansGiven = [];
        this.abc = [];
        this.loansGivenIndex = 0;
        this.loansGivenIndexChecked = [];
        this.loansGivenSum = 0;
        this.loansTaken = [];
        this.loansTakenIndex = 0;
        this.loansTakenSum = 0;
        var idx;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.languageSelected = this.userInfo.language;
        ;
        if (this.languageSelected == 1) {
            this.languageEnglish = this.languageSelected;
            this.languageSelected = "english";
            console.log("english selected");
        }
        else if (this.languageSelected == 2) {
            this.languageNepali = this.languageSelected;
            this.languageSelected = "nepali";
            console.log("nepali selected");
        }
        var currentMonth = (new Date().getMonth()) + 1;
        var currentYear = new Date().getFullYear();
        if (currentMonth == 1) {
            this.monthName = "January";
        }
        else if (currentMonth == 2) {
            this.monthName = "Febraury";
        }
        else if (currentMonth == 3) {
            this.monthName = "March";
        }
        else if (currentMonth == 4) {
            this.monthName = "April";
        }
        else if (currentMonth == 5) {
            this.monthName = "May";
        }
        else if (currentMonth == 6) {
            this.monthName = "June";
        }
        else if (currentMonth == 7) {
            this.monthName = "July";
        }
        else if (currentMonth == 8) {
            this.monthName = "August";
        }
        else if (currentMonth == 9) {
            this.monthName = "September";
        }
        else if (currentMonth == 10) {
            this.monthName = "October";
        }
        else if (currentMonth == 11) {
            this.monthName = "November";
        }
        else if (currentMonth == 12) {
            this.monthName = "December";
        }
        var numberOfLoan = 0;
        var sessionItem = localStorage.getItem('sessionItem');
        if (localStorage.length > 1) {
            for (var i = 0; i <= numberOfLoan; i++) {
                var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
                // if(singleTransaction.status !=undefined){
                // 	this.isToggled = singleTransaction.status;
                // }
                if (singleTransaction.type == "Income" || singleTransaction.type == "Expense" || singleTransaction.type == "LoanGiven"
                    || singleTransaction.type == "LoanTaken" || singleTransaction.type == "Saving") {
                    numberOfLoan++;
                }
                if (singleTransaction.type == "LoanGiven") {
                    this.loansGiven[this.loansGivenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    this.loansGivenSum = parseFloat(this.loansGiven[this.loansGivenIndex].amount) + this.loansGivenSum;
                    this.loansGivenIndex++;
                }
                console.log(this.loansGiven);
                if (singleTransaction.type == "LoanTaken") {
                    this.loansTaken[this.loansTakenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    this.loansTakenSum = parseFloat(this.loansTaken[this.loansTakenIndex].amount) + this.loansTakenSum;
                    this.loansTakenIndex++;
                }
            }
        }
        if (this.loansGivenIndex == 0) {
            if (this.languageSelected == 1) {
                this.message = 'Could not find any income, Please add income first';
            }
            else if (this.languageSelected == 2) {
                this.message = 'आम्दानि भेटीएन,कृपया पहिला आम्दानिको विवरण थप्नुहोस';
            }
        }
        else {
            if (this.languageSelected == 1) {
                this.message = 'No. of Incomes : ' + this.loansGivenIndex;
            }
            else if (this.languageSelected == 2) {
                this.message = 'कुल आम्दानि संख्या:' + this.loansGivenIndex;
            }
        }
    }
    LoanReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoanReportPage');
    };
    LoanReportPage.prototype.loanGiven = function () {
        var Modal = this.modalCtrl.create(AddLoanPage, { 'loanType': "Loan Given" });
        Modal.present();
    };
    LoanReportPage.prototype.loanTaken = function () {
        var Modal = this.modalCtrl.create(AddLoanPage, { 'loanType': "Loan Taken" });
        Modal.present();
    };
    LoanReportPage.prototype.editItem = function (ID) {
        this.navCtrl.push(Edit, { 'id': ID }, { animate: true, direction: 'forward' });
    };
    LoanReportPage.prototype.deleteItem = function (ID) {
        window.localStorage.removeItem(ID);
        if (this.languageSelected == 1) {
            var toast = this.toastCtrl.create({
                message: 'Loan has been deleted',
                duration: 2000
            });
            toast.present();
        }
        else if (this.languageSelected == 2) {
            var toast = this.toastCtrl.create({
                message: 'loan डिलिट भयो ।',
                duration: 2000
            });
            toast.present();
        }
        this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
    };
    LoanReportPage.prototype.loanInformation = function (info) {
        console.log(info);
        var Modal = this.modalCtrl.create(LoanDescriptionPage, { 'LOAN': info });
        Modal.present();
    };
    LoanReportPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-loan-report',
            templateUrl: 'loan-report.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController,
            ToastController])
    ], LoanReportPage);
    return LoanReportPage;
}());
export { LoanReportPage };
//# sourceMappingURL=loan-report.js.map