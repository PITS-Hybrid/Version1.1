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
import { AddSavingPage } from '../add-saving/add-saving';
import { Edit } from '../edit/edit';
/**
 * Generated class for the SavingReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SavingReportPage = /** @class */ (function () {
    function SavingReportPage(navCtrl, navParams, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.incomes = [];
        this.incomeSum = 0;
        this.incomeIndex = 0;
        this.expenses = [];
        this.expenseSum = 0;
        this.expenseIndex = 0;
        this.previousMonthsaving = 0;
        this.saving = [];
        this.savingIndex = 0;
        this.savingSum = 0;
        var idx;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.languageSelected = this.userInfo.language;
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
        var previousMonth = (new Date().getMonth());
        console.log(previousMonth);
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
                //   this.isToggled = singleTransaction.status;
                // }
                if (singleTransaction.type == "Income" || singleTransaction.type == "Expense" || singleTransaction.type == "LoanGiven"
                    || singleTransaction.type == "LoanTaken" || singleTransaction.type == "Saving") {
                    numberOfLoan++;
                }
                if (singleTransaction.type == "Saving") {
                    this.saving[this.savingIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    this.savingSum = parseFloat(this.saving[this.savingIndex].amount) + this.savingSum;
                    this.savingIndex++;
                    console.log(this.saving);
                }
                if (singleTransaction.date != undefined) {
                    var transactionDate = singleTransaction.date;
                    var transactionYear = parseInt(transactionDate.slice(0, 4));
                    var transactionMonth = parseInt(transactionDate.slice(5, 7));
                    if (singleTransaction.type == "Income" && transactionYear == currentYear && transactionMonth == previousMonth) {
                        this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount) + this.incomeSum;
                        this.incomeIndex++;
                    }
                    if (singleTransaction.type == "Expense" && transactionYear == currentYear && transactionMonth == previousMonth) {
                        this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount) + this.expenseSum;
                        this.expenseIndex++;
                    }
                }
            }
            this.previousMonthsaving = (this.incomeSum) - (this.expenseSum);
            console.log(this.previousMonthsaving);
        }
        if (this.savingIndex == 0) {
            if (this.languageSelected == 1) {
                this.message = 'Could not find any income, Please add income first';
            }
            else if (this.languageSelected == 2) {
                this.message = 'आम्दानि भेटीएन,कृपया पहिला आम्दानिको विवरण थप्नुहोस';
            }
        }
        else {
            if (this.languageSelected == 1) {
                this.message = 'No. of Incomes : ' + this.savingIndex;
            }
            else if (this.languageSelected == 2) {
                this.message = 'कुल आम्दानि संख्या:' + this.savingIndex;
            }
        }
    }
    SavingReportPage_1 = SavingReportPage;
    SavingReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SavingReportPage');
    };
    SavingReportPage.prototype.addSaving = function () {
        var Modal = this.modalCtrl.create(AddSavingPage);
        Modal.present();
    };
    SavingReportPage.prototype.editItem = function (ID) {
        this.navCtrl.push(Edit, { 'id': ID }, { animate: true, direction: 'forward' });
    };
    SavingReportPage.prototype.deleteItem = function (ID) {
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
        this.navCtrl.setRoot(SavingReportPage_1, {}, { animate: true, direction: 'forward' });
    };
    SavingReportPage = SavingReportPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-saving-report',
            templateUrl: 'saving-report.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, ToastController])
    ], SavingReportPage);
    return SavingReportPage;
    var SavingReportPage_1;
}());
export { SavingReportPage };
//# sourceMappingURL=saving-report.js.map