var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
    */
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    //10.10.10.43:9090
    AuthServiceProvider.prototype.signUp = function (User) {
        return this.http.post('http://10.10.10.43:9090/add', User).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.checkSignUp = function (detail) {
        return this.http.get('http://10.10.10.43:9090/user/check/' + detail).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.checkLogin = function (username, password) {
        return this.http.get('http://10.10.10.43:9090/user/' + username + '/' + password).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.getUser = function (userID) {
        return this.http.get('http://10.10.10.43:9090/user/' + userID).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.addIncome = function (newIncome) {
        console.log(newIncome);
        return this.http.post('http://10.10.10.43:9090/add/income', newIncome).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.addExpense = function (newExpense) {
        console.log(newExpense);
        return this.http.post('http://10.10.10.43:9090/add/expense', newExpense).map(function (res) { return res.json(); });
    };
    AuthServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());
export { AuthServiceProvider };
//# sourceMappingURL=auth-service.js.map