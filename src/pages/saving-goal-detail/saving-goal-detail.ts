import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'saving-goal-detail-page',
  templateUrl: 'saving-goal-detail.html',
})
export class SavingGoalDetailPage {

  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  savingGoalSwitch;
  savingGoal;

  savingGoals = [];
  remainingDays;
  savingForGoal = [];
  savingForGoalIndex = 0;
  contributingSavingSum;
  daily;
  weekly;
  monthly;
  savingForGoalAmounts = [];
  savingForGoalTitles = [];
  savingForGoalTitlesLength;
  savingForGoalContrbutingTotalAmount =0;
  goal;
  userInfo;
  calendarSelected;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController, public toastCtrl: ToastController) {
  	
  	this.savingGoalSwitch = "summary";
    this.contributingSavingSum = parseInt('0');

    var id = navParams.get('id');

    this.savingGoal = JSON.parse(localStorage.getItem(id));

    var endDate = new Date(this.savingGoal.endDateEng);
    var today = new Date();

    this.remainingDays = Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) ) /(1000 * 60 * 60 * 24));
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(this.userInfo.calendar == "AD"){
  this.calendarSelected = "AD";
}
else if(this.userInfo.calendar == "BS"){
  this.calendarSelected = "BS";
}

    var numberOfItemsInLocalStorage = 0;
    
    if(localStorage.length>1){
      for(var i = 0 ; i <= numberOfItemsInLocalStorage ; i++ ){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(singleTransaction.type == "Income" || singleTransaction.type == "Expense" 
          || singleTransaction.type == "LoanGiven" || singleTransaction.type == "LoanTaken"
          || singleTransaction.type == "Saving" || singleTransaction.type =="userInfo"
          || singleTransaction.type =="NewCategoryIncome" || singleTransaction.type =="NewCategoryExpense"
          || singleTransaction.type == "Saving Goal" || singleTransaction.type == "Saving For Goal" ){
          numberOfItemsInLocalStorage++;
      }

      if(singleTransaction.type == "Saving For Goal" && singleTransaction.savingPurpose == this.savingGoal.goalTitle){
        this.savingForGoal[this.savingForGoalIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
         //this.savingForGoalContrbutingTotalAmount = parseFloat(this.savingForGoal[this.savingForGoalIndex].amount)+this.savingForGoalContrbutingTotalAmount;
        this.savingForGoalIndex++;
      }
      
      console.log(this.savingForGoal);
    }

    for(var i = 0; i < this.savingForGoalIndex ; i++){
      this.contributingSavingSum = parseInt(this.contributingSavingSum) + parseInt(this.savingForGoal[i].amount);
      this.savingForGoalAmounts.push(this.savingForGoal[i].amount);
      this.savingForGoalTitles.push(this.savingForGoal[i].institute);
    }
    console.log(this.savingForGoalTitles);
    

    this.daily = ((this.savingGoal.amount-this.contributingSavingSum)/this.remainingDays).toString().split('.')[0];
    this.weekly = parseInt(this.daily)*7;
    this.monthly = parseInt(this.daily)*30;


    if(this.contributingSavingSum >= this.savingGoal.amount){

      this.goal = {
         ID : this.savingGoal.ID,
         type: this.savingGoal.type,
         goalTitle: this.savingGoal.goalTitle,
         amount: this.savingGoal.amount,
         note: this.savingGoal.note,
         startDateEng: this.savingGoal.startDateEng,
         endDateEng: this.savingGoal.endDateEng,
         startDateNep: this.savingGoal.startDateNep,
         endDateNep: this.savingGoal.endDateNep,
         remaining: this.savingGoal.remaining,
         remainingFromToday : this.savingGoal.remainingFromToday,
         status: "Complete"
       };
      console.log('amt exceeds');
      console.log(this.savingGoal.ID);
      localStorage.setItem('this.savingGoal.ID', JSON.stringify(this.goal));
    }
  }
}

ionViewDidLoad(){


if(this.savingForGoalTitles.length == 0){
  this.savingForGoalTitlesLength =this.savingForGoalTitles.length;

}
else{
  
  this.barChart = new Chart(this.barCanvas.nativeElement, {
    
    type: 'doughnut',
    data: {
      labels: this.savingForGoalTitles,
      datasets: [{
        label: '',
        data: this.savingForGoalAmounts,
        backgroundColor: [
        '#f1c40f','#e67e22','#f1c40f','#16a085','#95a5a6','#1abc9c','#2ecc71','#3498db','#16a085','#34495e'
        ]
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
    
  });
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


}
