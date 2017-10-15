import { Component, ViewChild } from '@angular/core';
//import { Chart } from 'chart.js';

import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController, ToastController } from 'ionic-angular';

import { AddIncomePage } from '../add-income/add-income';
import { AddIncomeDemoPage } from '../add-income-demo/add-income-demo';
import { AddExpensePage } from '../add-expense/add-expense';
import { ProfilePage } from '../profile/profile';
import { AlertController } from 'ionic-angular';
import { IncomeReportPage } from '../income-report/income-report';
import { ExpenseReportPage } from '../expense-report/expense-report';
import { Edit } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  
 //@ViewChild('doughnutCanvas') doughnutCanvas;
    
 //doughnutChart: any;

  incomeexpense: string = "income";
  isAndroid: boolean = false;

  incomes = [];
  incomeSum = 0;
  incomeIndex = 0;

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;
  monthName;

  constructor(public navParams: NavParams, public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  	
  
    this.isAndroid = platform.is('android');

    window.localStorage.removeItem('ionic_labmenu');
    window.localStorage.removeItem('ionic_lastdevices');
    window.localStorage.removeItem('ionic_viewpop');
    
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

        if(singleTransaction.type == "Income" && transactionYear == currentYear && transactionMonth == currentMonth){
          this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
          this.incomeIndex++;
        }

        if(singleTransaction.type == "Expense" && transactionYear == currentYear && transactionMonth == currentMonth){
          this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
          this.expenseIndex++;
        }

      }
      
    }

  }


  /*ionViewDidLoad() {
 this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["आम्दनी ", "खर्च"],
                datasets: [{
                    label: 'Rs. ',
                    data: [this.incomeSum, this.expenseSum],
                    backgroundColor: [
                        "#85bb65",
                        "#ff3b30"
                    ],
                    hoverBackgroundColor: [
                        "#85bb65",
                        "#ff3b30"
                    ]
                }]
            }
 
        });
 }*/


  itemClicked(itemName, amount, addedOn, ID){
    let actionSheet = this.actionsheetCtrl.create({
      title: itemName +' - '+' ('+addedOn+')',
      buttons: [
        {
          text: ' एडिट',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
          
             this.navCtrl.push(Edit, {'id': ID}, {animate: true, direction: 'forward'});

          }
        },
        {
          text: 'डिलिट',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
             window.localStorage.removeItem(ID);

             let toast = this.toastCtrl.create({
              message: 'डिलिट भयो ।',
              duration: 2000
            });
            toast.present();

            this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  loadProfile(){
    this.navCtrl.push(ProfilePage);
  }

  loadAddIncome(){
  	this.navCtrl.push(AddIncomePage);
  }

  loadIncomeReport(){
    this.navCtrl.push(IncomeReportPage);
  }

  loadExpenseReport(){
    this.navCtrl.push(ExpenseReportPage);
  }

  loadAddExpense(){
    this.navCtrl.push(AddExpensePage);
  }

}
