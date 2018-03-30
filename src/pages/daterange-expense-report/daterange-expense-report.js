var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IonicPage } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { PopoverController } from 'ionic-angular';
/**
 * Generated class for the DaterangeExpenseReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DaterangeExpenseReportPage = /** @class */ (function () {
    function DaterangeExpenseReportPage(navCtrl, navParams, toastCtrl, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.expensesTitle = [];
        this.expenseRupeesAmount = [];
        this.expenses = [];
        this.expenseSum = 0;
        this.expenseIndex = 0;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.languageSelected = this.userInfo.language;
        if (this.languageSelected == 1) {
            this.languageEnglish = this.languageSelected;
        }
        else if (this.languageSelected == 2) {
            this.languageNepali = this.languageSelected;
        }
        this.myStartDate = navParams.get("startDateValue");
        this.myEndDate = navParams.get("endDateValue");
        var currentMonth = (new Date().getMonth()) + 1;
        var currentYear = new Date().getFullYear();
        var numberOfIncomeAndExpense = 0;
        if (localStorage.length > 1) {
            for (var i = 0; i <= numberOfIncomeAndExpense; i++) {
                var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if (singleTransaction.type == "Income" || singleTransaction.type == "Expense"
                    || singleTransaction.type == "LoanGiven" || singleTransaction.type == "LoanTaken"
                    || singleTransaction.type == "Saving") {
                    numberOfIncomeAndExpense++;
                }
                if (singleTransaction.date != undefined) {
                    var transactionDate = singleTransaction.date;
                    var transactionYear = parseInt(transactionDate.slice(0, 4));
                    var transactionMonth = parseInt(transactionDate.slice(5, 7));
                    if (singleTransaction.type == "Expense" && transactionDate >= this.myStartDate && transactionDate <= this.myEndDate) {
                        this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount) + this.expenseSum;
                        this.expenseIndex++;
                    }
                }
            }
        }
        if (this.expenseIndex == 0) {
            if (this.languageSelected == 1) {
                this.message = 'Could not find any expense, Please add expenses first';
            }
            else if (this.languageSelected == 2) {
                this.message = 'खर्च भेटीएन, कृपया पहिला  खर्चको विवरण थप्नुहोस';
            }
        }
        else {
            if (this.languageSelected == 1) {
                this.message = 'No. of Expenses: ' + this.expenseIndex;
            }
            else if (this.languageSelected == 2) {
                this.message = 'कुल खर्च संख्या: ' + this.expenseIndex;
            }
        }
    }
    DaterangeExpenseReportPage.prototype.deleteItem = function (ID) {
        window.localStorage.removeItem(ID);
        if (this.languageSelected == 1) {
            var toast = this.toastCtrl.create({
                message: 'Expense has been deleted',
                duration: 2000
            });
            toast.present();
        }
        else if (this.languageSelected == 1) {
            var toast = this.toastCtrl.create({
                message: 'खर्च डिलिट भयो ।',
                duration: 2000
            });
            toast.present();
        }
        this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
    };
    DaterangeExpenseReportPage.prototype.editItem = function (ID) {
        this.navCtrl.push(Edit, { 'id': ID }, { animate: true, direction: 'forward' });
    };
    DaterangeExpenseReportPage.prototype.ionViewDidLoad = function () {
        var noOfExpense = this.expenses.length;
        for (var i = 0; i <= noOfExpense; i++) {
            if (this.expenses[i] != undefined) {
                this.expensesTitle.push(this.expenses[i].category_name_nepali);
                this.expenseRupeesAmount.push(this.expenses[i].amount);
            }
        }
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.expensesTitle,
                datasets: [{
                        label: '',
                        data: this.expenseRupeesAmount,
                        backgroundColor: [
                            'rgba(153, 102, 255, 0.2)'
                        ]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        ViewChild('barCanvas'),
        __metadata("design:type", Object)
    ], DaterangeExpenseReportPage.prototype, "barCanvas", void 0);
    DaterangeExpenseReportPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-daterange-expense-report',
            templateUrl: 'daterange-expense-report.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ToastController, ModalController, PopoverController])
    ], DaterangeExpenseReportPage);
    return DaterangeExpenseReportPage;
}());
export { DaterangeExpenseReportPage };
//# sourceMappingURL=daterange-expense-report.js.map