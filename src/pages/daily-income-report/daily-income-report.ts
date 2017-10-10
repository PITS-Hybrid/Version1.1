import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { Chart } from 'chart.js';

import { MoreReportIncomePage } from '../more-report-income/more-report-income';
/**
 * Generated class for the DailyIncomeReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-daily-income-report',
  templateUrl: 'daily-income-report.html',
})
export class DailyIncomeReportPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController) {

  	var currentDay = new Date().toISOString().slice(0,10)
  
  	

    if(localStorage.length>0){
      for (var i = 0; i < localStorage.length; i++){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var transactionDate = singleTransaction.date;
       
        if(singleTransaction.type == "Income" && transactionDate == currentDay ){
          this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
          this.incomeIndex++;
        }

      }
    }

    if(this.incomeIndex == 0){
    	this.message = 'आम्दानि भेटीएन, कृपया पहिला आम्दानिको विवरण थप्नुहोस';
    }
    else{	
    	this.message = 'कुल आम्दानि संख्या:' + this.incomeIndex;
    }

  }

  deleteItem(ID){
  	window.localStorage.removeItem(ID);

   let toast = this.toastCtrl.create({
	    message: 'आम्दानि डिलिट भयो ।',
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


}
