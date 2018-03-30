import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AddSavingPage } from '../add-saving/add-saving';
import { AddSavingGoalPage } from '../add-saving-goal/add-saving-goal';
import { SavingGoalDetailPage } from '../saving-goal-detail/saving-goal-detail';
import { Edit } from '../edit/edit';
declare var require: any;

@IonicPage()
@Component({
  selector: 'page-saving-report',
  templateUrl: 'saving-report.html',
})
export class SavingReportPage {
  languageSelected;
  languageEnglish;
  languageNepali;
  incomes = [];
  incomeSum = 0;
  incomeIndex = 0;

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;
  monthName;

  previousMonthsaving =0;

  saving =[];
  savingIndex = 0;

  savingSum =0;
  savingSwitch;


  message;

  loanStatus ;

  savingGoals = [];
  savingGoalIndex = 0;
  savingGoalsLength;
  remainingDays = [];
  accomplishedSavingGoals = [];

  savingForGoal = [];
  savingForGoalIndex = 0;
  userInfo;
  today_date;
  nepali_date_year;
  nep_year = []
  total_month = [];
  current_month;
  change_Date_1;
  adbs
  res: String = new Date().toISOString().slice(0,10).replace(/-/g,"/");
  array =[];
  eng_date;
  calendarSelected;
  temp_nepali_date;
  userID;
  localStorageLanguageSelected;
  segmentSelected;

  savingForGoalContrbutingTotalAmount = 0;
  allTransactions;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public toastCtrl: ToastController) {
    this.adbs = require("ad-bs-converter");
    this.savingSwitch = "miscSaving";
    this.segmentSelected = "misc";

    
    var idx;
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.languageSelected=this.userInfo.language;

    if(this.languageSelected == 1){

      this.localStorageLanguageSelected = "english";

    }

    else if(this.languageSelected == 2){

      this.localStorageLanguageSelected = "nepali";
      console.log("nepali selected");
    }



    this.today_date = this.adbs.ad2bs(this.res.toString());
    console.log(this.today_date);
//console.log(adbs.ad2bs(this.today_date));

this.nepali_date_year = this.today_date.en.year;
console.log(this.nepali_date_year);

this.current_month = parseInt(this.today_date.en.month);
console.log(this.current_month);
//parseInt(this.nepali_date_year)
for(var i=2070; i<=2076 ;i++){
  this.nep_year.push(i);

}
console.log(parseInt(this.today_date.en.totalDaysInMonth));


for(var i=1; i<=12 ;i++){
  this.total_month.push(i);

}


this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log(this.userInfo.calendar);


//this.userID =this.userInfo.sessionid;
this.userID =12;
console.log(this.userID);

if(this.userInfo.calendar == "AD"){
  this.calendarSelected = "AD";
}
else if(this.userInfo.calendar == "BS"){
  this.calendarSelected = "BS";
}


var currentMonth = (new Date().getMonth())+1;
var previousMonth = (new Date().getMonth());
var currentYear = new Date().getFullYear();
if(currentMonth == 1){this.monthName = "January";}
else if(currentMonth == 2){this.monthName = "Febraury";}
else if(currentMonth == 3){this.monthName = "March";}
else if(currentMonth == 4){this.monthName = "April";}
else if(currentMonth == 5){this.monthName = "May";}
else if(currentMonth == 6){this.monthName = "June";}
else if(currentMonth == 7){this.monthName = "July";}
else if(currentMonth == 8){this.monthName = "August";}
else if(currentMonth == 9){this.monthName = "September";}
else if(currentMonth == 10){this.monthName = "October";}
else if(currentMonth == 11){this.monthName = "November";}
else if(currentMonth == 12){this.monthName = "December";}

var numberOfLoan = 0;
var sessionItem = localStorage.getItem('sessionItem');

if(localStorage.length>1){

  for (var i = 0; i <=numberOfLoan; i++){
    var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
    this.allTransactions = singleTransaction;
         //console.log(singleTransaction);
         if(singleTransaction.type == "Income" || singleTransaction.type == "Expense" 
           || singleTransaction.type == "LoanGiven" || singleTransaction.type == "LoanTaken"
           || singleTransaction.type == "Saving" || singleTransaction.type =="userInfo"
           || singleTransaction.type =="NewCategoryIncome" || singleTransaction.type =="NewCategoryExpense"
           || singleTransaction.type == "Saving Goal" || singleTransaction.type == "Saving For Goal" ){
           numberOfLoan++;
       }

       if(singleTransaction.type == "Saving"){
         this.saving[this.savingIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));

         this.savingSum = parseFloat(this.saving[this.savingIndex].amount)+this.savingSum;
         this.savingIndex++;
       }

       if(singleTransaction.type == "Saving For Goal"){
         this.savingForGoal[this.savingForGoalIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
         //this.savingForGoalContrbutingTotalAmount = parseFloat(this.savingForGoal[this.savingForGoalIndex].amount)+this.savingForGoalContrbutingTotalAmount;
         this.savingForGoalIndex++;
       }
       //console.log(this.savingForGoalContrbutingTotalAmount);


       if(singleTransaction.type == "Saving Goal" && singleTransaction.status == "Incomplete"){
         this.savingGoals.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
       }
       console.log(this.savingGoals);

       if(singleTransaction.type == "Saving Goal" && singleTransaction.status == "Complete"){
         this.accomplishedSavingGoals.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
       }



     }

     if(this.savingGoals.length > 0){
       this.savingGoalsLength = this.savingGoals.length;
     }

     this.previousMonthsaving =(this.incomeSum) -(this.expenseSum);


   }

   if(this.savingIndex == 0){
     if(this.languageSelected == 1){
       this.message = 'Could not find any income, Please add income first';
     }
     else if(this.languageSelected == 2){
       this.message = 'आम्दानि भेटीएन,कृपया पहिला आम्दानिको विवरण थप्नुहोस';
     }

   }
   else{  

     if(this.languageSelected == 1){
       this.message = 'No. of Incomes : ' + this.savingIndex;
     }

     else  if(this.languageSelected == 2){
       this.message = 'कुल आम्दानि संख्या:' + this.savingIndex;
     }

   }

   this.savingForGoal.sort(this.fieldSorter(['savingPurpose']));

   for(var i = 0; i < this.savingForGoal.length; i++){
     if(this.savingForGoal[i+1] != undefined){
       if(this.savingForGoal[i].savingPurpose == this.savingForGoal[i+1].savingPurpose){
         this.savingForGoal[i+1].amount = parseFloat(this.savingForGoal[i].amount)+parseFloat(this.savingForGoal[i+1].amount);
         this.savingForGoal.splice(i, 1);
       }
     }
   }

   for(var i = 0 ; i< this.savingGoalsLength; i++){

    // Donald needs to think for Nepali Date here (Current Date) //
    // DONALD !!!

    var today = new Date();
    var endDate = new Date (this.savingGoals[i].endDateEng);

    var remainingDays = Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) ) /(1000 * 60 * 60 * 24));

    this.savingGoals[i].remainingFromToday = remainingDays;

    if(this.savingForGoal[i] != undefined){
      for(var j = 0; j < this.savingGoalsLength ; j++){
        if(this.savingForGoal[i].savingPurpose == this.savingGoals[j].goalTitle){
          var remainingAmount = this.savingGoals[j].amount-this.savingForGoal[i].amount;
          this.savingGoals[j].remainingAmount = remainingAmount;

          var paidPercentage = (this.savingGoals[j].remainingAmount/this.savingGoals[j].amount)*100;
          this.savingGoals[j].paidPercentage = 100-paidPercentage;
        }
      }
    }

  }


}

fieldSorter(fields) {
  return function (a, b) {
    return fields
    .map(function (o) {
      var dir = 1;
      if (o[0] === '-') {
        dir = -1;
        o=o.substring(1);
      }
      if (a[o] > b[o]) return dir;
      if (a[o] < b[o]) return -(dir);
      return 0;
    })
    .reduce(function firstNonZeroValue (p,n) {
      return p ? p : n;
    }, 0);
  };
}

ionViewDidLoad() {
 // if(this.allTransactions.type == "Saving For Goal"){
 //         this.savingForGoal[this.savingForGoalIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
 //         this.savingForGoalContrbutingTotalAmount = parseFloat(this.savingForGoal[this.savingForGoalIndex].amount)+this.savingForGoalContrbutingTotalAmount;
 //         this.savingForGoalIndex++;
 //       }
 //       console.log(this.savingForGoalContrbutingTotalAmount);

}

segmentChanged(cur_segment){
  console.log(cur_segment._value);
  if(cur_segment._value == "miscSaving"){
    this.segmentSelected = "misc";
  }
  if(cur_segment._value == "savinggoals"){
    this.segmentSelected = "savinggoals";

  }

}
addSaving(){
   // let Modal = this.modalCtrl.create(AddSavingPage);
   // Modal.present();
   this.navCtrl.push(AddSavingPage);
 }

 addGoal(){
   // let Modal = this.modalCtrl.create(AddSavingGoalPage);
   // Modal.present();
   this.navCtrl.push(AddSavingGoalPage);
 }

 editItem(ID){
   this.navCtrl.push(Edit, {'id': ID}, {animate: true, direction: 'forward'})
 }

 detail(ID){
   // let Modal = this.modalCtrl.create(SavingGoalDetailPage, {'id': id});
   // Modal.present();
   this.navCtrl.push(SavingGoalDetailPage, {'id': ID})

 }

 deleteItem(ID){
   window.localStorage.removeItem(ID);
   if(this.languageSelected == 1){
     let toast = this.toastCtrl.create({
       message: 'Saving has been deleted',
       duration: 2000
     });
     toast.present();
   }

   else if(this.languageSelected == 2){
     let toast = this.toastCtrl.create({
       message: 'loan डिलिट भयो ।',
       duration: 2000
     });
     toast.present();
   }
   this.navCtrl.setRoot(SavingReportPage, {}, {animate: true, direction: 'forward'});

 }

}
