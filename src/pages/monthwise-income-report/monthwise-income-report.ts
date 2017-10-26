import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { MoreReportIncomePage } from '../more-report-income/more-report-income';
import { PopoverController } from 'ionic-angular';
import { PopoverIncomeMonthPage } from '../popover-income-month/popover-income-month';

@Component({
  selector: 'monthwise-income-report',
  templateUrl: 'monthwise-income-report.html'
})
export class MonthWiseIncomeReport {
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

  message;
  monthName;
  languageSelected;
   languageEnglish;
  languageNepali;

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController) {


    var currentTime = new Date();
    var currentMonth = currentTime.getMonth() + 1
    this.monthSelected = navParams.get('monthName');
    this.languageSelected=localStorage.getItem('LV');
    if(this.languageSelected == 1){
    this.languageEnglish=this.languageSelected;
        }

 else if(this.languageSelected == 2){
    this.languageNepali=this.languageSelected;
        }
  

      if(this.monthSelected == undefined){
      this.monthSelected=currentMonth;
    }
 
     if (this.monthSelected == 1){
      this.monthName = "January";
    }
    else if(this.monthSelected == 2){
      this.monthName = "Febraury";
    }
    else if(this.monthSelected == 3){
      this.monthName = "March";
    }
    else if(this.monthSelected == 4){
      this.monthName = "April";
    }
    else if(this.monthSelected == 5){
      this.monthName = "May";
    }
    else if(this.monthSelected == 6){
      this.monthName = "June";
    }
    else if(this.monthSelected == 7){
      this.monthName = "July";
    }
    else if(this.monthSelected == 8){
      this.monthName = "August";
    }
    else if(this.monthSelected == 9){
      this.monthName = "September";
    }
    else if(this.monthSelected == 10){
      this.monthName = "October";
    }
    else if(this.monthSelected == 11){
      this.monthName = "November";
    }
    else if(this.monthSelected == 12){
      this.monthName = "December";
    }
    
  
    var currentYear = new Date().getFullYear();

    if(localStorage.length>1){
      for (var i = 0; i < localStorage.length; i++){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
         if(singleTransaction.date != undefined){
        var transactionDate = singleTransaction.date;
        var transactionYear = parseInt(transactionDate.slice(0,4));
        var transactionMonth = parseInt(transactionDate.slice(5,7));


        if(singleTransaction.type == "Income" && transactionYear == currentYear && transactionMonth == this.monthSelected){  
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
      this.message = 'कुल आम्दानि संख्या:' + this.incomeIndex;
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
        this.incomeTitle.push(this.incomes[i].category_name_nepali);
      }
        this.incomeRupeesAmount.push(this.incomes[i].amount);
      }
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
    let popover = this.popoverCtrl.create(PopoverIncomeMonthPage);
    popover.present({
      ev: myEvent
    });
  }


}
