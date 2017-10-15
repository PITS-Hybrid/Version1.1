webpackJsonp([3],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExpenseYearPageModule", function() { return PopoverExpenseYearPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_expense_year__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverExpenseYearPageModule = (function () {
    function PopoverExpenseYearPageModule() {
    }
    return PopoverExpenseYearPageModule;
}());
PopoverExpenseYearPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__popover_expense_year__["a" /* PopoverExpenseYearPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_expense_year__["a" /* PopoverExpenseYearPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__popover_expense_year__["a" /* PopoverExpenseYearPage */]
        ]
    })
], PopoverExpenseYearPageModule);

//# sourceMappingURL=popover-expense-year.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverExpenseYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yearly_expense_report_yearly_expense_report__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PopoverExpenseYearPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverExpenseYearPage = (function () {
    function PopoverExpenseYearPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverExpenseYearPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverExpenseYearPage');
    };
    PopoverExpenseYearPage.prototype.yearName = function (yearID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__yearly_expense_report_yearly_expense_report__["a" /* YearlyExpenseReportPage */], { 'yearName': yearID });
    };
    return PopoverExpenseYearPage;
}());
PopoverExpenseYearPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-popover-expense-year',template:/*ion-inline-start:"/Users/samirankc/Desktop/master/src/pages/popover-expense-year/popover-expense-year.html"*/'<ion-list >\n      <ion-list-header>वार्षिक अनुसार</ion-list-header>  \n      <button ion-item  (click)="yearName(\'2017\')">2020</button>\n      <button ion-item  (click)="yearName(\'2017\')">2019</button>\n      <button ion-item  (click)="yearName(\'2017\')">2018</button>\n      <button ion-item  (click)="yearName(\'2017\')">2017</button>\n      <button ion-item  (click)="yearName(\'2016\')">2016</button>\n      <button ion-item  (click)="yearName(\'2015\')">2015</button>\n      <button ion-item  (click)="yearName(\'2014\')">2014</button>\n      <button ion-item  (click)="yearName(\'2013\')">2013</button>\n      <button ion-item  (click)="yearName(\'2012\')">2012</button>\n      <button ion-item  (click)="yearName(\'2011\')">2011</button>\n      <button ion-item  (click)="yearName(\'2010\')">2010</button>\n    </ion-list>'/*ion-inline-end:"/Users/samirankc/Desktop/master/src/pages/popover-expense-year/popover-expense-year.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PopoverExpenseYearPage);

//# sourceMappingURL=popover-expense-year.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map