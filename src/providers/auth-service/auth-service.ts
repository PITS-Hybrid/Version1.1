import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
  	*/
  @Injectable()
  export class AuthServiceProvider {

  	constructor(public http: Http) {
  		console.log('Hello AuthServiceProvider Provider');
  	}

//10.10.10.43:9090
//139.59.60.49:9090
signUp(User){
  return this.http.post('http://139.59.25.81:9090/add', User).map(res => res.json());
}

checkSignUp(detail){
  return this.http.get('http://139.59.25.81:9090/user/check/'+detail).map(res => res.json());
}


checkLogin(username, password){
  return this.http.get('http://139.59.25.81:9090/user/'+username + '/' + password).map(res => res.json());
}

getUser(userID){
  return this.http.get('http://139.59.25.81:9090/user/'+userID).map(res => res.json());
}

addIncome(newIncome){
  console.log(newIncome);
  return this.http.post('http://139.59.25.81:9090/add/income', newIncome).map(res => res.json());
}  
addExpense(newExpense){
  console.log(newExpense);
  return this.http.post('http://139.59.25.81:9090/add/expense', newExpense).map(res => res.json());
}
getRates(){
  return this.http.get('https://api.fixer.io/latest?base=INR').map(res => res.json());
}


}
