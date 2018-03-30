import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { Chart } from 'chart.js';
import { PopoverController } from 'ionic-angular';
import { PopoverIncomeYearPage } from '../popover-income-year/popover-income-year';
import { MoreReportIncomePage } from '../more-report-income/more-report-income';
declare var require: any;
/**

/**
 * Generated class for the YearlyIncomeReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
   selector: 'page-yearly-income-report',
   templateUrl: 'yearly-income-report.html',
 })
 export class YearlyIncomeReportPage {
   public yearSelected;

   
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

   message;
   yearName;
   yearNameinNavBar;
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
     this.yearSelected = navParams.get("yearName");

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
     
     

     var current = navParams.get('yearName');
     var currentDay = new Date().toISOString().slice(0,10)
  

     

     

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
         console.log(transactionYear);

         
         if(singleTransaction.type == "Income" && transactionYear == this.yearSelected ){
           this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
           this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
           this.incomeIndex++;
         }

       }


     }

      if(this.userInfo.calendar == "BS"){
               if(singleTransaction.nepali_date != undefined ){
             var transactionDate = singleTransaction.nepali_date;  
             var transactionYear = parseInt(transactionDate.slice(0,4));
             var transactionMonth = parseInt(transactionDate.slice(5,7));
             if(singleTransaction.type == "Income" && transactionYear == this.yearSelected ){
               this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
               this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
               this.incomeIndex++;
             }
            
           }

         }

     }
   }

   if(this.incomeIndex == 0){
     if(this.languageSelected == 1){
       this.message = 'Could not find any income, Please add income first';
     }
     else if(this.languageSelected == 2){
       this.message = 'आम्दानि भेटीएन, कृपया पहिला आम्दानिको विवरण थप्नुहोस';
     }
   }
   else{	
     
     if(this.languageSelected == 1){
       this.message = 'No. of Incomes : ' + this.incomeIndex;
     }

     else  if(this.languageSelected == 2){
       this.message = 'कुल आम्दानि संख्या :' + this.incomeIndex;
     }
   }

 }
}


deleteItem(ID){
  window.localStorage.removeItem(ID);
  if(this.languageSelected == 1){
    let toast = this.toastCtrl.create({
      message: 'Income has been deleted',
      duration: 2000
    });
    toast.present();
  }

  else if(this.languageSelected == 2){
    let toast = this.toastCtrl.create({
      message: 'आम्दानि डिलिट भयो ।',
      duration: 2000
    });
    toast.present();
  }
  this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

}

editItem(ID){
  this.navCtrl.push(Edit, {'id': ID}, {animate: true, direction: 'forward'})

}


ionViewDidLoad() {

  var noOfIncome = this.incomes.length;

  for(var i = 0; i<=noOfIncome; i++){
    if(this.incomes[i] != undefined){
      if(this.languageSelected == 1){
        this.incomeTitle.push(this.incomes[i].category_name);
      }
      else if(this.languageSelected == 2){
        if(this.incomes[i].icon != undefined){
          this.incomeTitle.push(this.incomes[i].category_name);
        }
        else{
          this.incomeTitle.push(this.incomes[i].category_name_nepali);
        }
      }
      this.incomeRupeesAmount.push(this.incomes[i].amount);
    }
  }

    var hash = Object.create(null),
    i = 0;
    while (i < this.incomeTitle.length) {
      if (this.incomeTitle[i] in hash) {
        this.incomeRupeesAmount[hash[this.incomeTitle[i]]] = (+this.incomeRupeesAmount[hash[this.incomeTitle[i]]] + +this.incomeRupeesAmount[i]).toString();
        this.incomeTitle.splice(i, 1);
        this.incomeRupeesAmount.splice(i, 1);
        continue;
      }
      hash[this.incomeTitle[i]] = i;
      i++;
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
            beginAtZero:true
          }
        }]
      }
    }
    
  });

}

presentPopover(myEvent) {
  let popover = this.popoverCtrl.create(PopoverIncomeYearPage);
  popover.present({
    ev: myEvent
  });
}


}

