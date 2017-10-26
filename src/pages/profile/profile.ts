import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


public age: number = 30;

  incomeJSON = [];
  expenseJSON = [];
  incomes = [];
  incomeSum = 0;
  incomeIndex = 0;

  incomeTitle = [];
  incomeRupeesAmount = [];


   expensesTitle = [];
  expenseRupeesAmount = [];

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;


  constructor(public translate: TranslateService, public translateService: TranslateService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    var currentYear = new Date().getFullYear();





      if(localStorage.length>1){
      for (var i = 0; i < localStorage.length; i++){


        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

         if(singleTransaction.date != undefined){
        var transactionDate = singleTransaction.date;
        var transactionYear = parseInt(transactionDate.slice(0,4));
        var transactionMonth = parseInt(transactionDate.slice(5,7));

        if(singleTransaction.type == "Income"  ){
          this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
          this.incomeIndex++;
        }
         if(singleTransaction.type == "Expense" ){
          this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
          this.expenseIndex++;
        }

      }

      }
  }

}

  ionViewDidLoad() {

      var noOfIncome = this.incomes.length;

    for(var i = 0; i<=noOfIncome; i++){
      if(this.incomes[i] != undefined){
        this.incomeTitle.push(this.incomes[i].category_name_nepali);
        this.incomeRupeesAmount.push(this.incomes[i].amount);
        this.incomeJSON.push(this.incomes[i]);
       // console.log(this.incomeJSON);
      }
    
  }

var noOfExpense = this.expenses.length;

    for(var i = 0; i<=noOfExpense; i++){
      if(this.expenses[i] != undefined){
        this.expensesTitle.push(this.expenses[i].category_name_nepali);
        this.expenseRupeesAmount.push(this.expenses[i].amount);
        this.expenseJSON.push(this.expenses[i]);
       // console.log(this.expenseJSON);
      }}



}


  clearAll(){
    window.localStorage.clear();
    let alert = this.alertCtrl.create({
      title: 'सफल भयो!',
      subTitle: 'सबै रेकोर्द्सहरु मेटियो',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
  }







languageOption(languageValue){

 if(languageValue == 1 ){
   window.localStorage.setItem('LV', languageValue);
    //this.translateService.use('en');
  this.translate.setDefaultLang('en');

}
else if(languageValue == 2 ){
  this.translate.setDefaultLang('nep');
   //this.translateService.use('nep');
  window.localStorage.setItem('LV', languageValue);
}

  }

  }




