import { IonicPage } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { PopoverController, AlertController } from 'ionic-angular';
import { PopoverExpenseYearPage } from '../popover-expense-year/popover-expense-year';
@IonicPage()
@Component({
  selector: 'page-yearly-expense-report',
  templateUrl: 'yearly-expense-report.html',
})
export class YearlyExpenseReportPage {
public yearSelected;
 
  @ViewChild('barCanvas') barCanvas;
  barChart: any;




  expensesTitle = [];
  expenseRupeesAmount = [];

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;

  message;

  monthName;
  languageSelected;
  languageEnglish;
  languageNepali;
  userInfo;

     adbs;
 today_date;
 current_nepali_month;
 current_nepali_year;
 current_nepali_day;
 calendarSelected;
 res: String = new Date().toISOString().slice(0,10).replace(/-/g,"/");

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {

 this.adbs = require("ad-bs-converter");
   this.today_date = this.adbs.ad2bs(this.res.toString());
   console.log(this.today_date);
   this.current_nepali_month = parseInt(this.today_date.en.month)
   console.log(this.current_nepali_month)
   this.current_nepali_year = parseInt(this.today_date.en.year)
   console.log(this.current_nepali_year)
   this.current_nepali_day = parseInt(this.today_date.en.day)
   console.log(this.current_nepali_day)
     
     


  this.yearSelected = navParams.get("yearName");
  var current = navParams.get('yearName');

    var currentDay = new Date().toISOString().slice(0,10)
    var currentYear = new Date().getFullYear();
     console.log(currentYear);
     this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.languageSelected=this.userInfo.language;
    if(this.languageSelected == 1){
      this.languageEnglish=this.languageSelected;
    }

    else if(this.languageSelected == 2){
      this.languageNepali=this.languageSelected;
    }


    if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";

        var currentYear = new Date().getFullYear();
        console.log(currentYear);
        if(this.yearSelected == undefined){
       this.yearSelected = currentYear;
     }
   }
     
      else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";
     var currentYear = parseInt(this.today_date.en.year);
     if(this.yearSelected == undefined){
       this.yearSelected = currentYear;
     }
}
var numberOfIncomeAndExpense = 0;
    if(localStorage.length>1){
       for(var i=0; i<= numberOfIncomeAndExpense ; i++){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if(singleTransaction !=undefined){

          if(singleTransaction.type == "Income" || singleTransaction.type == "Expense" 
               || singleTransaction.type == "LoanGiven" || singleTransaction.type == "LoanTaken"
               || singleTransaction.type == "Saving" || singleTransaction.type =="userInfo"
               || singleTransaction.type =="NewCategoryIncome" || singleTransaction.type =="NewCategoryExpense"
               || singleTransaction.type == "Saving Goal" || singleTransaction.type == "Saving For Goal" ){
            numberOfIncomeAndExpense++;
        }


      }
    }

  for (var i = 0; i <= numberOfIncomeAndExpense; i++){
    var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if(singleTransaction !=null){
 if(this.userInfo.calendar == "AD"){
      if(singleTransaction.date != undefined){
        var transactionDate = singleTransaction.date;
        var transactionYear = parseInt(transactionDate.slice(0,4));
        var transactionMonth = parseInt(transactionDate.slice(5,7));

        if(singleTransaction.type == "Expense" && transactionYear == this.yearSelected){
          this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
          this.expenseIndex++;
        }

      }
    }

       if(this.userInfo.calendar == "BS"){
               if(singleTransaction.nepali_date != undefined ){
             var transactionDate = singleTransaction.nepali_date;  
             var transactionYear = parseInt(transactionDate.slice(0,4));
             var transactionMonth = parseInt(transactionDate.slice(5,7));
             if(singleTransaction.type == "Expense" && transactionYear == this.yearSelected ){
               this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
          this.expenseIndex++;
             }
            
           }

         }



  }
    }
 if(this.expenseIndex == 0){
    if(this.languageSelected == 1){
      this.message = 'Could not find any expense, Please add expenses first';
    }

    else if(this.languageSelected == 2){
      this.message = 'खर्च भेटीएन, कृपया पहिला  खर्चको विवरण थप्नुहोस';
    }

  }
  else{  
    if(this.languageSelected == 1){
      this.message = 'No. of Expenses: ' + this.expenseIndex;
    }
    else if(this.languageSelected == 2){
      this.message = 'कुल खर्च संख्या: ' + this.expenseIndex;
    }
  }

  }

}

 deleteItem(ID){
     let prompt = this.alertCtrl.create({
      title: 'के तपाईं पक्का यो गर्न चाहनुहुन्छ?',
      message: "यो रेकर्ड स्थायी रूपमा मेटाइने छ",
     
      buttons: [
     
      {
         cssClass: 'buttoncss',
        text: 'हुन्छ',
        handler: () => {

    window.localStorage.removeItem(ID);

    let toast = this.toastCtrl.create({
      message: 'खर्च डिलिट भयो ।',
      duration: 2000
    });
    toast.present();

    this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
          
        }
      },
       {
         cssClass: 'buttoncss',
        text: 'हुदैन',
        role: 'cancel',
        handler: () => {
         
        }
      }
    ]
  });
  prompt.present();
  }
  editItem(ID){
    this.navCtrl.push(Edit, {'id': ID}, {animate: true, direction: 'forward'})

  }


 ionViewDidLoad() {

  var noOfExpense = this.expenses.length;

  for(var i = 0; i<=noOfExpense; i++){
    if(this.expenses[i] != undefined){
      if(this.languageSelected == 1){
        this.expensesTitle.push(this.expenses[i].category_name);
      }
      else if(this.languageSelected == 2){
         if(this.expenses[i].icon != undefined){
          this.expensesTitle.push(this.expenses[i].category_name);
        }
        else{
        this.expensesTitle.push(this.expenses[i].category_name_nepali);
      }
      }
      this.expenseRupeesAmount.push(this.expenses[i].amount);
     
    }
  }

   var hash = Object.create(null),
    i = 0;
    while (i < this.expensesTitle.length) {
      if (this.expensesTitle[i] in hash) {
        this.expenseRupeesAmount[hash[this.expensesTitle[i]]] = (+this.expenseRupeesAmount[hash[this.expensesTitle[i]]] + +this.expenseRupeesAmount[i]).toString();
        this.expensesTitle.splice(i, 1);
        this.expenseRupeesAmount.splice(i, 1);
        continue;
      }
      hash[this.expensesTitle[i]] = i;
      i++;
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
            beginAtZero:true
          }
        }]
      }
    }
    
  });

}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverExpenseYearPage);
    popover.present({
      ev: myEvent
    });
  }

}
