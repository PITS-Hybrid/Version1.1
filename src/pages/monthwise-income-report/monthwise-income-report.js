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
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { PopoverController } from 'ionic-angular';
import { PopoverIncomeMonthPage } from '../popover-income-month/popover-income-month';
var MonthWiseIncomeReport = /** @class */ (function () {
    function MonthWiseIncomeReport(popoverCtrl, navCtrl, navParams, toastCtrl, modalCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.incomes = [];
        this.incomeSum = 0;
        this.incomeIndex = 0;
        this.incomeTitle = [];
        this.incomeRupeesAmount = [];
        this.expenses = [];
        this.expenseSum = 0;
        this.expenseIndex = 0;
        var currentTime = new Date();
        var currentMonth = currentTime.getMonth() + 1;
        this.monthSelected = navParams.get('monthName');
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.languageSelected = this.userInfo.language;
        if (this.languageSelected == 1) {
            this.languageEnglish = this.languageSelected;
        }
        else if (this.languageSelected == 2) {
            this.languageNepali = this.languageSelected;
        }
        if (this.monthSelected == undefined) {
            this.monthSelected = currentMonth;
        }
        if (this.monthSelected == 1) {
            this.monthName = "January";
        }
        else if (this.monthSelected == 2) {
            this.monthName = "Febraury";
        }
        else if (this.monthSelected == 3) {
            this.monthName = "March";
        }
        else if (this.monthSelected == 4) {
            this.monthName = "April";
        }
        else if (this.monthSelected == 5) {
            this.monthName = "May";
        }
        else if (this.monthSelected == 6) {
            this.monthName = "June";
        }
        else if (this.monthSelected == 7) {
            this.monthName = "July";
        }
        else if (this.monthSelected == 8) {
            this.monthName = "August";
        }
        else if (this.monthSelected == 9) {
            this.monthName = "September";
        }
        else if (this.monthSelected == 10) {
            this.monthName = "October";
        }
        else if (this.monthSelected == 11) {
            this.monthName = "November";
        }
        else if (this.monthSelected == 12) {
            this.monthName = "December";
        }
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
                    if (singleTransaction.type == "Income" && transactionYear == currentYear && transactionMonth == this.monthSelected) {
                        this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount) + this.incomeSum;
                        this.incomeIndex++;
                    }
                }
            }
        }
        if (this.incomeIndex == 0) {
            if (this.languageSelected == 1) {
                this.message = 'Could not find any income, Please add income first';
            }
            else if (this.languageSelected == 2) {
                this.message = 'आम्दानि भेटीएन, कृपया पहिला आम्दानिको विवरण थप्नुहोस';
            }
        }
        else {
            if (this.languageSelected == 1) {
                this.message = 'No. of Incomes : ' + this.incomeIndex;
            }
            else if (this.languageSelected == 2) {
                this.message = 'कुल आम्दानि संख्या:' + this.incomeIndex;
            }
        }
    }
    MonthWiseIncomeReport.prototype.deleteItem = function (ID) {
        window.localStorage.removeItem(ID);
        if (this.languageSelected == 1) {
            var toast = this.toastCtrl.create({
                message: 'Income has been deleted',
                duration: 2000
            });
            toast.present();
        }
        else if (this.languageSelected == 2) {
            var toast = this.toastCtrl.create({
                message: 'आम्दानि डिलिट भयो ।',
                duration: 2000
            });
            toast.present();
        }
        this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
    };
    MonthWiseIncomeReport.prototype.editItem = function (ID) {
        this.navCtrl.push(Edit, { 'id': ID }, { animate: true, direction: 'forward' });
    };
    MonthWiseIncomeReport.prototype.ionViewDidLoad = function () {
        var noOfIncome = this.incomes.length;
        for (var i = 0; i <= noOfIncome; i++) {
            if (this.incomes[i] != undefined) {
                if (this.languageSelected == 1) {
                    this.incomeTitle.push(this.incomes[i].category_name);
                }
                else if (this.languageSelected == 2) {
                    this.incomeTitle.push(this.incomes[i].category_name_nepali);
                }
                this.incomeRupeesAmount.push(this.incomes[i].amount);
            }
        }
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.incomeTitle,
                datasets: [{
                        label: '',
                        data: this.incomeRupeesAmount,
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
    MonthWiseIncomeReport.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(PopoverIncomeMonthPage);
        popover.present({
            ev: myEvent
        });
    };
    __decorate([
        ViewChild('barCanvas'),
        __metadata("design:type", Object)
    ], MonthWiseIncomeReport.prototype, "barCanvas", void 0);
    MonthWiseIncomeReport = __decorate([
        Component({
            selector: 'monthwise-income-report',
            templateUrl: 'monthwise-income-report.html'
        }),
        __metadata("design:paramtypes", [PopoverController, NavController, NavParams, ToastController, ModalController])
    ], MonthWiseIncomeReport);
    return MonthWiseIncomeReport;
}());
export { MonthWiseIncomeReport };
//# sourceMappingURL=monthwise-income-report.js.map