import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { PopoverController } from 'ionic-angular';

import { MoreReportIncomePage } from '../more-report-income/more-report-income';

@Component({
  selector: 'page-expense-report',
  templateUrl: 'expense-report.html',
})
export class ExpenseReportPage {
 
  @ViewChild('barCanvas') barCanvas;
  barChart: any;


	incomes = [];
  incomeSum = 0;
  incomeIndex = 0;

  expensesTitle = [];
  expenseRupeesAmount = [];

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;

  message;

  monthName;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {

  	var currentMonth = (new Date().getMonth())+1;
    var currentYear = new Date().getFullYear();


    if(currentMonth == 1){
      this.monthName = "January";
    }
    else if(currentMonth == 2){
      this.monthName = "Febraury";
    }
    else if(currentMonth == 3){
      this.monthName = "March";
    }
    else if(currentMonth == 4){
      this.monthName = "April";
    }
    else if(currentMonth == 5){
      this.monthName = "May";
    }
    else if(currentMonth == 6){
      this.monthName = "June";
    }
    else if(currentMonth == 7){
      this.monthName = "July";
    }
    else if(currentMonth == 8){
      this.monthName = "August";
    }
    else if(currentMonth == 9){
      this.monthName = "September";
    }
    else if(currentMonth == 10){
      this.monthName = "October";
    }
    else if(currentMonth == 11){
      this.monthName = "November";
    }
    else if(currentMonth == 12){
      this.monthName = "December";
    }

    if(localStorage.length>0){
      for (var i = 0; i < localStorage.length; i++){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var transactionDate = singleTransaction.date;
        var transactionYear = parseInt(transactionDate.slice(0,4));
        var transactionMonth = parseInt(transactionDate.slice(5,7));

        if(singleTransaction.type == "Expense" && transactionYear == currentYear && transactionMonth == currentMonth){
          this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
          this.expenseIndex++;
        }

      }
    }

    if(this.expenseIndex == 0){
    	this.message = 'खर्च भेटीएन, कृपया पहिला  खर्चको विवरण थप्नुहोस';
    }
    else{	
    	this.message = 'कुल खर्च संख्या: ' + this.expenseIndex;
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
        this.expensesTitle.push(this.expenses[i].category_name_nepali);
        this.expenseRupeesAmount.push(this.expenses[i].amount);
      }
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
    let popover = this.popoverCtrl.create('PopoverExpensePage');
    popover.present({
      ev: myEvent
    });
  }

 

  // settings(){
  //   let modal = this.modalCtrl.create(MoreReportIncomePage);
  //   modal.present();
  // }

}
