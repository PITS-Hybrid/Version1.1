import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { PopoverController } from 'ionic-angular';
import { PopoverExpenseMonthPage } from '../popover-expense-month/popover-expense-month';
declare var require: any;

@Component({
  selector: 'page-monthwise-expense-report',
  templateUrl: 'monthwise-expense-report.html',
})
export class MonthwiseExpenseReportPage {
  
  public monthSelected;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;


  incomes = [];
  incomeSum = 0;
  incomeIndex = 0;

  incomeTitle = [];
  incomeRupeesAmount = [];

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;

  expensesTitle = [];
  expenseRupeesAmount = [];

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


  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController) {

  	var currentTime = new Date();
    var currentMonth = currentTime.getMonth() + 1
    this.monthSelected = navParams.get('monthName');
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.languageSelected=this.userInfo.language;
    if(this.languageSelected == 1){
      this.languageEnglish=this.languageSelected;
    }

    else if(this.languageSelected == 2){
      this.languageNepali=this.languageSelected;
    }


      this.adbs = require("ad-bs-converter");
   this.today_date = this.adbs.ad2bs(this.res.toString());
   console.log(this.today_date);
   this.current_nepali_month = parseInt(this.today_date.en.month)
   console.log(this.current_nepali_month)
   this.current_nepali_year = parseInt(this.today_date.en.year)
   console.log(this.current_nepali_year)
   this.current_nepali_day = parseInt(this.today_date.en.day)
   console.log(this.current_nepali_day)


var currentTime = new Date();
    
     this.monthSelected = navParams.get('monthName');

    if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";
  var currentMonth = currentTime.getMonth() + 1

 if(this.monthSelected == undefined){
      this.monthSelected=currentMonth;
    }

    if (this.monthSelected == 1){this.monthName = "January";}
    else if(this.monthSelected == 2){this.monthName = "Febraury";}
    else if(this.monthSelected == 3){this.monthName = "March";}
    else if(this.monthSelected == 4){this.monthName = "April";}
    else if(this.monthSelected == 5){this.monthName = "May";}
    else if(this.monthSelected == 6){this.monthName = "June";}
    else if(this.monthSelected == 7){this.monthName = "July";}
    else if(this.monthSelected == 8){this.monthName = "August";}
    else if(this.monthSelected == 9){this.monthName = "September";}
    else if(this.monthSelected == 10){this.monthName = "October";}
    else if(this.monthSelected == 11){this.monthName = "November";}
    else if(this.monthSelected == 12){this.monthName = "December";}

   }

    else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";


      var currentMonth = parseInt(this.today_date.en.month);

 if(this.monthSelected == undefined){
      this.monthSelected=currentMonth;
    }

    if (this.monthSelected == 1){this.monthName = "Baisakh";}
    else if(this.monthSelected == 2){this.monthName = "Jestha";}
    else if(this.monthSelected == 3){this.monthName = "Ashadh";}
    else if(this.monthSelected == 4){this.monthName = "Shrawan";}
    else if(this.monthSelected == 5){this.monthName = "Bhadra";}
    else if(this.monthSelected == 6){this.monthName = "Ashwin";}
    else if(this.monthSelected == 7){this.monthName = "Kartik";}
    else if(this.monthSelected == 8){this.monthName = "Mangsir";}
    else if(this.monthSelected == 9){this.monthName = "Poush";}
    else if(this.monthSelected == 10){this.monthName = "Magh";}
    else if(this.monthSelected == 11){this.monthName = "Falgun";}
    else if(this.monthSelected == 12){this.monthName = "Chaitra";}


   }
    
    var currentYear = new Date().getFullYear();
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
        

        if(singleTransaction.type == "Expense" && transactionYear == currentYear && transactionMonth == this.monthSelected){
          this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
          this.expenseIndex++;
          console.log(this.expenses);
        }


      }
    }


    if(this.userInfo.calendar == "BS"){
               if(singleTransaction.nepali_date != undefined ){
             var transactionDate = singleTransaction.nepali_date;  
             var transactionYear = parseInt(transactionDate.slice(0,4));
             var transactionMonth = parseInt(transactionDate.slice(5,7));
             if(singleTransaction.type == "Expense" && transactionYear == this.current_nepali_year && transactionMonth == this.monthSelected){
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
  window.localStorage.removeItem(ID);

  let toast = this.toastCtrl.create({
    message: 'खर्च डिलिट भयो ।',
    duration: 2000
  });
  toast.present();

  this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

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
  let popover = this.popoverCtrl.create(PopoverExpenseMonthPage);
  popover.present({
    ev: myEvent
  });
}


}
