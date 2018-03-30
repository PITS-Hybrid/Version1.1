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
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
var Edit = /** @class */ (function () {
    function Edit(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.itemID = navParams.get('id');
        this.item = JSON.parse(window.localStorage.getItem(this.itemID));
        console.log(this.item);
        if (this.item.type == "LoanGiven" || this.item.type == "LoanTaken") {
            this.typeSelected = "loan";
            console.log(this.typeSelected);
            var startDate = Date.parse(this.item.startdate);
            console.log(startDate);
            var endDate = Date.parse(this.item.enddate);
            console.log(endDate);
            var timeDiff = endDate - startDate;
            var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            this.differenceInYear = this.round(daysDiff / 365);
            //this.Interest.value = this.item.interest;
            if (this.Amount == undefined) {
                this.Amount = this.item.amount;
            }
        }
        else if (this.item.type == "Saving") {
            this.typeSelected = "saving";
        }
        else {
            this.typeSelected = "notloan";
        }
        this.languageSelected = localStorage.getItem('LV');
        if (this.languageSelected == 1) {
            this.categorySelected = this.item.category_name;
        }
        else if (this.languageSelected == 2) {
            this.categorySelected = this.item.category_name_nepali;
        }
    }
    Edit.prototype.round = function (x) {
        return Math.round(x * 100) / 100;
    };
    Edit.prototype.amountChange = function () {
        if (this.item.type == "LoanGiven" || this.item.type == "LoanTaken") {
            var principal = this.Amount.value;
            var interest = this.Interest.value / 100 / 12;
            var payments = this.differenceInYear * 12;
            var x = Math.pow(1 + interest, payments);
            var monthly = (principal * x * interest) / (x - 1);
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
        }
    };
    Edit.prototype.calculate = function () {
        var principal = this.Amount.value;
        var interest = this.Interest.value / 100 / 12;
        var payments = this.differenceInYear * 12;
        var x = Math.pow(1 + interest, payments);
        var monthly = (principal * x * interest) / (x - 1);
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
    Edit.prototype.edit = function (id, dateAdded, amount, cat_name, cat_name_nep, type, note) {
        if (amount == "") {
            if (this.languageSelected == 1) {
                var toast = this.toastCtrl.create({
                    message: 'Please fill in the details',
                    duration: 2000
                });
                toast.present();
            }
            else if (this.languageSelected == 2) {
                var toast = this.toastCtrl.create({
                    message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            if (this.item.type == "LoanGiven" || this.item.type == "LoanTaken") {
                console.log('hello');
                if (this.Interest.value == "") {
                    this.Interest.value = this.item.interest;
                }
                if (this.monthlypayment.value == "" || this.totalpayment.value == "" || this.totalinterest.value == "") {
                    this.monthlypayment.value = this.item.monthlypayment;
                    this.totalpayment.value = this.item.totalpayment;
                    this.totalinterest.value = this.item.totalinterest;
                }
                this.updateData = {
                    ID: id,
                    userID: this.item.userID,
                    type: type,
                    note: note,
                    amount: amount,
                    startdate: this.item.startdate,
                    enddate: this.item.enddate,
                    interest: this.Interest.value,
                    nameofperson: this.NameOfPerson.value,
                    monthlypayment: this.monthlypayment.value,
                    totalpayment: this.totalpayment.value,
                    totalinterest: this.totalinterest.value,
                };
            }
            if (this.item.type == "Saving") {
                if (this.savinginstitute.value == "" || this.incomesource.value == "") {
                    this.savinginstitute.value = this.item.institute;
                    this.incomesource.value = this.item.income_source;
                }
                this.updateData = {
                    ID: id,
                    amount: this.Amount.value,
                    date: dateAdded,
                    institute: this.savinginstitute.value,
                    income_source: this.incomesource.value,
                    note: note,
                    type: type,
                    userID: this.item.userID
                };
            }
            if (this.item.type == "Income" || this.item.type == "Expense") {
                if (this.Amount.value == "") {
                    this.Amount.value = this.item.amount;
                }
                this.updateData = {
                    ID: id,
                    amount: this.Amount.value,
                    date: dateAdded,
                    category_name: cat_name,
                    category_name_nepali: cat_name_nep,
                    note: note,
                    type: type,
                    userID: this.item.userID
                };
            }
            console.log(this.updateData);
            window.localStorage.removeItem(id);
            window.localStorage.setItem(id, JSON.stringify(this.updateData));
            var toast = this.toastCtrl.create({
                message: 'एडिट सफल भएको छ!',
                duration: 2000
            });
            toast.present();
            this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        }
    };
    Edit.prototype.deleteItem = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'रेकोर्द डिलिट',
            message: 'यो रेकोर्दलाई पक्का डिलिट गर्ने?',
            buttons: [
                {
                    text: 'होइन',
                    handler: function () {
                        /* Chill and do nothing */
                    }
                },
                {
                    text: 'हो',
                    handler: function () {
                        window.localStorage.removeItem(id);
                        var toast = _this.toastCtrl.create({
                            message: 'रेकोर्द डिलिट भयो ।',
                            duration: 2000
                        });
                        toast.present();
                        _this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
                    }
                }
            ]
        });
        confirm.present();
    };
    Edit.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        ViewChild('amount'),
        __metadata("design:type", Object)
    ], Edit.prototype, "Amount", void 0);
    __decorate([
        ViewChild('nameofperson'),
        __metadata("design:type", Object)
    ], Edit.prototype, "NameOfPerson", void 0);
    __decorate([
        ViewChild('interest'),
        __metadata("design:type", Object)
    ], Edit.prototype, "Interest", void 0);
    __decorate([
        ViewChild('monthlypayment'),
        __metadata("design:type", Object)
    ], Edit.prototype, "monthlypayment", void 0);
    __decorate([
        ViewChild('totalpayment'),
        __metadata("design:type", Object)
    ], Edit.prototype, "totalpayment", void 0);
    __decorate([
        ViewChild('totalinterest'),
        __metadata("design:type", Object)
    ], Edit.prototype, "totalinterest", void 0);
    __decorate([
        ViewChild('savinginstitute'),
        __metadata("design:type", Object)
    ], Edit.prototype, "savinginstitute", void 0);
    __decorate([
        ViewChild('incomesource'),
        __metadata("design:type", Object)
    ], Edit.prototype, "incomesource", void 0);
    Edit = __decorate([
        Component({
            selector: 'edit',
            templateUrl: 'edit.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ToastController, AlertController])
    ], Edit);
    return Edit;
}());
export { Edit };
//# sourceMappingURL=edit.js.map