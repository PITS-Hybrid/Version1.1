import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { Chart } from 'chart.js';
declare var require: any;
/**
 * Generated class for the DaterangeIncomeReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-daterange-income-report',
  templateUrl: 'daterange-income-report.html',
})
export class DaterangeIncomeReportPage {
	  public myStartDate;
	  public myEndDate;


	  @ViewChild('barCanvas') barCanvas;
  barChart: any;


	incomes = [];
  incomeSum = 0;
  incomeIndex = 0;

  incomeTitle = [];
  incomeRupeesAmount = [];



  message;
  
  monthName;
  languageSelected;
   languageEnglish;
  languageNepali;
  userInfo;
  adbs;
  calendarSelected;
  nepStartDate;
  nepEndDate;

 constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController) {
this.adbs = require("ad-bs-converter");

  	this.myStartDate = navParams.get("startDateValue");
  	this.myEndDate = navParams.get("endDateValue");
    this.nepStartDate = navParams.get("nepStartDate");
     this.nepEndDate = navParams.get("nepEndDate");
     
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
     }
     else if(this.userInfo.calendar == "BS"){
       this.calendarSelected = "BS";
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


         if(singleTransaction.date != undefined){
        var transactionDate = singleTransaction.date;
      

        if(singleTransaction.type == "Income" && transactionDate >=this.myStartDate && transactionDate <=this.myEndDate   ){
          this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
          this.incomeIndex++;
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
      this.message = 'कुल आम्दानि संख्या : ' + this.incomeIndex;
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

}
