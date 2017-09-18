import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController) {

  	var currentMonth = (new Date().getMonth())+1;
    var currentYear = new Date().getFullYear();

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
    	this.message = 'खर्च भेटेन! कृपया खर्च थप्नुहोस् पहिला';
    }
    else{	
    	this.message = 'कुल खर्च संक्या: ' + this.expenseIndex;
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


  settings(){
    let modal = this.modalCtrl.create(MoreReportIncomePage);
    modal.present();
  }

}