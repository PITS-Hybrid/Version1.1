webpackJsonp([0],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverIncomePageModule", function() { return PopoverIncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_income__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverIncomePageModule = (function () {
    function PopoverIncomePageModule() {
    }
    return PopoverIncomePageModule;
}());
PopoverIncomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__popover_income__["a" /* PopoverIncomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_income__["a" /* PopoverIncomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__popover_income__["a" /* PopoverIncomePage */]
        ]
    })
], PopoverIncomePageModule);

//# sourceMappingURL=popover-income.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverIncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monthwise_income_report_monthwise_income_report__ = __webpack_require__(111);
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
 * Generated class for the PopoverIncomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverIncomePage = (function () {
    function PopoverIncomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverIncomePage.prototype.monthName = function (monthValue) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__monthwise_income_report_monthwise_income_report__["a" /* MonthWiseIncomeReport */], { 'monthName': monthValue }, { animate: true, direction: 'forward' });
    };
    PopoverIncomePage.prototype.ionViewDidLoad = function () {
    };
    return PopoverIncomePage;
}());
PopoverIncomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-popover-income',template:/*ion-inline-start:"/Users/samirankc/Desktop/master/src/pages/popover-income/popover-income.html"*/'<ion-list >\n      <ion-list-header>महिना अनुसार</ion-list-header>\n      <button ion-item  (click)="monthName(1)">January</button>\n      <button ion-item  (click)="monthName(2)">Febraury</button>\n      <button ion-item  (click)="monthName(3)">March</button>\n      <button ion-item  (click)="monthName(4)">April</button>\n      <button ion-item  (click)="monthName(5)">May</button>\n      <button ion-item  (click)="monthName(6)">June</button>\n      <button ion-item  (click)="monthName(7)">July</button>\n      <button ion-item  (click)="monthName(8)">August</button>\n      <button ion-item  (click)="monthName(9)">September</button>\n      <button ion-item  (click)="monthName(10)">October</button>\n      <button ion-item  (click)="monthName(11)">November</button>\n      <button ion-item  (click)="monthName(12)">December</button>\n    </ion-list>'/*ion-inline-end:"/Users/samirankc/Desktop/master/src/pages/popover-income/popover-income.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PopoverIncomePage);

//# sourceMappingURL=popover-income.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map