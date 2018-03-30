var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
import { Component } from '@angular/core';
//import { Chart } from 'chart.js';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController, ToastController } from 'ionic-angular';
import { AddIncomePage } from '../add-income/add-income';
import { AddExpensePage } from '../add-expense/add-expense';
import { ProfilePage } from '../profile/profile';
import { AlertController } from 'ionic-angular';
import { IncomeReportPage } from '../income-report/income-report';
import { ExpenseReportPage } from '../expense-report/expense-report';
import { Edit } from '../edit/edit';
import { SignInPage } from '../sign-in/sign-in';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http } from '@angular/http';
import { Network } from '@ionic-native/network';
import { LoanReportPage } from '../loan-report/loan-report';
import { SavingReportPage } from '../saving-report/saving-report';
var HomePage = /** @class */ (function () {
    function HomePage(navParams, navCtrl, platform, actionsheetCtrl, toastCtrl, alertCtrl, auth, http, network) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.http = http;
        this.network = network;
        //@ViewChild('doughnutCanvas') doughnutCanvas;
        //doughnutChart: any;
        this.incomeexpense = "income";
        this.isAndroid = false;
        this.incomes = [];
        this.incomeSum = 0;
        this.incomeIndex = 0;
        this.expenses = [];
        this.expenseSum = 0;
        this.expenseIndex = 0;
        this.loansGiven = [];
        this.loansGivenIndex = 0;
        this.loansGivenSum = 0;
        this.loansTaken = [];
        this.loansTakenIndex = 0;
        this.loansTakenSum = 0;
        this.saving = [];
        this.savingSum = 0;
        this.savingIndex = 0;
        this.loanBalance = 0;
        this.expensesTitle = [];
        this.expenseRupeesAmount = [];
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (this.userInfo == undefined) {
            this.navCtrl.setRoot(SignInPage);
        }
        else {
            var sessionItem = this.userInfo.sessionid;
            this.localStorageLanguageSelected = this.userInfo.language;
            this.localStorageUserTypeSelected = this.userInfo.usertype;
            if (this.localStorageLanguageSelected == "" || this.localStorageUserTypeSelected == "") {
                this.auth.getUser(sessionItem).subscribe(function (data) {
                    _this.defaultUserType = data[0].info.userType;
                    _this.localStorageUserTypeSelected = _this.defaultUserType;
                    if (data[0].info.language == "English") {
                        _this.defaultLanguageSelected = 1;
                    }
                    else if (data[0].info.language == "Nepali") {
                        _this.defaultLanguageSelected = 2;
                    }
                    _this.localStorageLanguageSelected = _this.defaultLanguageSelected;
                    _this.userInfo = {
                        type: _this.userInfo.type,
                        usertype: _this.localStorageUserTypeSelected,
                        sessionid: _this.userInfo.sessionid,
                        language: _this.localStorageLanguageSelected
                    };
                    localStorage.setItem('userInfo', JSON.stringify(_this.userInfo));
                    console.log(_this.userInfo);
                });
            }
            else {
                console.log('usertype and language are not undefined');
            }
            this.languageSelected = this.userInfo.language;
            if (this.languageSelected == 1) {
                this.languageEnglish = this.languageSelected;
                this.languageSelected = "english";
            }
            else if (this.languageSelected == 2) {
                this.languageNepali = this.languageSelected;
                this.languageSelected = "nepali";
            }
            this.isAndroid = platform.is('android');
            window.localStorage.removeItem('ionic_labmenu');
            window.localStorage.removeItem('ionic_lastdevices');
            window.localStorage.removeItem('ionic_viewpop');
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
            var numberOfIncomeAndExpense = 0;
            if (localStorage.length > 1) {
                if (sessionItem != undefined) {
                    for (var i = 0; i <= numberOfIncomeAndExpense; i++) {
                        if (singleTransaction.date != undefined) {
                            var transactionDate = singleTransaction.date;
                            var transactionYear = parseInt(transactionDate.slice(0, 4));
                            var transactionMonth = parseInt(transactionDate.slice(5, 7));
                            if (singleTransaction.type == "Income" && transactionYear == currentYear && transactionMonth == currentMonth) {
                                this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                                this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount) + this.incomeSum;
                                this.incomeIndex++;
                            }
                            if (singleTransaction.type == "Expense" && transactionYear == currentYear && transactionMonth == currentMonth) {
                                this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                                this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount) + this.expenseSum;
                                this.expenseIndex++;
                            }
                        }
                        if (singleTransaction.type == "LoanGiven") {
                            console.log('hello');
                            this.loansGiven[this.loansGivenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                            if (this.loansGiven[this.loansGivenIndex].status == true) {
                                this.loansGivenSum = this.round(parseFloat(this.loansGiven[this.loansGivenIndex].totalinterest) + this.loansGivenSum);
                            }
                            else if (this.loansGiven[this.loansGivenIndex].status == false || this.loansGiven[this.loansGivenIndex].status == "") {
                                this.loansGivenSum = this.round(parseFloat(this.loansGiven[this.loansGivenIndex].amount) - this.loansGivenSum);
                            }
                            this.loansGivenIndex++;
                        }
                        if (singleTransaction.type == "LoanTaken") {
                            this.loansTaken[this.loansTakenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                            if (this.loansTaken[this.loansTakenIndex].status == true) {
                                this.loansTakenSum = this.round(parseFloat(this.loansTaken[this.loansTakenIndex].totalpayment) - this.loansTakenSum);
                            }
                            else if (this.loansTaken[this.loansTakenIndex].status == false || this.loansTaken[this.loansTakenIndex].status == "") {
                                this.loansTakenSum = this.round(parseFloat(this.loansTaken[this.loansTakenIndex].amount) + this.loansTakenSum);
                            }
                            this.loansTakenIndex++;
                        }
                        //console.log(this.loansGivenSum);
                        //console.log(this.loansTakenSum);
                        this.loanBalance = this.round(this.loanBalance - this.loansGivenSum);
                        this.loanBalance = this.round(this.loanBalance + this.loansTakenSum);
                        if (singleTransaction.type == "Saving") {
                            this.saving[this.savingIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                            this.savingSum = parseFloat(this.saving[this.savingIndex].amount) + this.savingSum;
                            this.savingIndex++;
                        }
                    }
                }
            }
        }
    }
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavParams, NavController, Platform, ActionSheetController,
            ToastController, AlertController,
            AuthServiceProvider, Http, Network])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
round(x);
{
    return Math.round(x * 100) / 100;
}
ionViewDidLeave();
{
}
displayNetworkUpdate(connectionState, string);
{
    var networkType = this.network.type;
    this.toastCtrl.create({
        message: "You are now " + connectionState,
        duration: 3000
    }).present();
}
ionViewDidLoad();
{
    this.network.onConnect().subscribe(function (data) {
        _this.displayNetworkUpdate(data.type);
        _this.auth.addIncome(_this.incomes).subscribe();
        _this.auth.addExpense(_this.expenses).subscribe();
    }, function (error) { return console.error(error); });
    this.network.onDisconnect().subscribe(function (data) {
        _this.displayNetworkUpdate(data.type);
    }, function (error) { return console.error(error); });
}
/*ionViewDidLoad() {
this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
              labels: ["आम्दनी ", "खर्च"],
              datasets: [{
                  label: 'Rs. ',
                  data: [this.incomeSum, this.expenseSum],
                  backgroundColor: [
                      "#85bb65",
                      "#ff3b30"
                  ],
                  hoverBackgroundColor: [
                      "#85bb65",
                      "#ff3b30"
                  ]
              }]
          }

      });
    }*/
itemClicked(itemName, amount, addedOn, ID);
{
    if (this.languageSelected == 2) {
        var actionSheet = this.actionsheetCtrl.create({
            // title: itemName +' - '+' ('+addedOn+')',
            buttons: [
                {
                    text: ' एडिट',
                    icon: !this.platform.is('ios') ? 'create' : null,
                    handler: function () {
                        _this.navCtrl.push(Edit, { 'id': ID }, { animate: true, direction: 'forward' });
                    }
                },
                {
                    text: 'डिलिट',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        window.localStorage.removeItem(ID);
                        var toast = _this.toastCtrl.create({
                            message: 'डिलिट भयो ।',
                            duration: 2000
                        });
                        toast.present();
                        _this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    }
    else if (this.languageSelected == 1) {
        var actionSheet = this.actionsheetCtrl.create({
            // title: itemName +' - '+' ('+addedOn+')',
            buttons: [
                {
                    text: 'Edit',
                    icon: !this.platform.is('ios') ? 'create' : null,
                    handler: function () {
                        _this.navCtrl.push(Edit, { 'id': ID }, { animate: true, direction: 'forward' });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        window.localStorage.removeItem(ID);
                        var toast = _this.toastCtrl.create({
                            message: 'Deleted',
                            duration: 2000
                        });
                        toast.present();
                        _this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    }
}
loadProfile();
{
    // this.navCtrl.push(ProfilePage, {'localStorageUserTypeSelected': this.localStorageUserTypeSelected}, {animate: true, direction: 'forward'});
    this.navCtrl.push(ProfilePage);
}
loadAddIncome();
{
    // this.navCtrl.push(AddIncomePage, {'localStorageUserTypeSelected': this.localStorageUserTypeSelected}, {animate: true, direction: 'forward'});
    this.navCtrl.push(AddIncomePage);
}
loadIncomeReport();
{
    this.navCtrl.push(IncomeReportPage);
}
loadExpenseReport();
{
    this.navCtrl.push(ExpenseReportPage);
}
loadAddExpense();
{
    // this.navCtrl.push(AddExpensePage, {'localStorageUserTypeSelected': this.localStorageUserTypeSelected}, {animate: true, direction: 'forward'});
    this.navCtrl.push(AddExpensePage);
}
loadLoanReport();
{
    this.navCtrl.push(LoanReportPage);
}
loadSavingReport();
{
    this.navCtrl.push(SavingReportPage);
}
//# sourceMappingURL=home.js.map