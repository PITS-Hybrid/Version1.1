import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { MoreReportIncomePage } from '../more-report-income/more-report-income';

@Component({
  selector: 'page-income-report',
  templateUrl: 'income-report.html',
})
export class IncomeReportPage {
 
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController) {

  	var currentMonth = (new Date().getMonth())+1;
    var currentYear = new Date().getFullYear();

    if(localStorage.length>0){
      for (var i = 0; i < localStorage.length; i++){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var transactionDate = singleTransaction.date;
        var transactionYear = parseInt(transactionDate.slice(0,4));
        var transactionMonth = parseInt(transactionDate.slice(5,7));

        if(singleTransaction.type == "Income" && transactionYear == currentYear && transactionMonth == currentMonth){
          this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
          this.incomeIndex++;
        }

      }
    }

    if(this.incomeIndex == 0){
    	this.message = 'आम्दनी भेटेन! कृपया नयाँ आम्दनी थप्नुहोस् पहिला';
    }
    else{	
    	this.message = 'कुल आम्दनी संक्या: ' + this.incomeIndex;
    }

  }

  deleteItem(ID){
  	window.localStorage.removeItem(ID);

   let toast = this.toastCtrl.create({
	    message: 'आम्दनी डिलिट भयो ।',
	    duration: 2000
	  });
  	toast.present();

  	this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

  }

  editItem(ID){
    this.navCtrl.push(Edit, {'id': ID}, {animate: true, direction: 'forward'})

  }


  ionViewDidLoad() {

    var noOfIncome = this.incomes.length;

    for(var i = 0; i<=noOfIncome; i++){
      if(this.incomes[i] != undefined){
        this.incomeTitle.push(this.incomes[i].category_name_nepali);
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


  settings(){
    let modal = this.modalCtrl.create(MoreReportIncomePage);
    modal.present();
  }

}
