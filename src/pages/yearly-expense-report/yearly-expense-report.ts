import { IonicPage } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { PopoverController } from 'ionic-angular';
import { PopoverExpenseYearPage } from '../popover-expense-year/popover-expense-year';

@IonicPage()
@Component({
  selector: 'page-yearly-expense-report',
  templateUrl: 'yearly-expense-report.html',
})
export class YearlyExpenseReportPage {
public yearSelected;
 
  @ViewChild('barCanvas') barCanvas;
  barChart: any;




  expensesTitle = [];
  expenseRupeesAmount = [];

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;

  message;

  monthName;
  languageSelected;
  languageEnglish;
  languageNepali;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {

  this.yearSelected = navParams.get("yearName");
this.languageSelected=localStorage.getItem('LV');
if(this.languageSelected == 1){
    this.languageEnglish=this.languageSelected;
  }

 else if(this.languageSelected == 2){
    this.languageNepali=this.languageSelected;
  }
	var current = navParams.get('yearName');

  	var currentDay = new Date().toISOString().slice(0,10)
  	var currentYear = new Date().getFullYear();
     console.log(currentYear);

     if(this.yearSelected == undefined){
       this.yearSelected = currentYear;
     }

    if(localStorage.length>1){
      for (var i = 0; i < localStorage.length; i++){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
         if(singleTransaction.date != undefined){
        var transactionDate = singleTransaction.date;
        var transactionYear = parseInt(transactionDate.slice(0,4));
        var transactionMonth = parseInt(transactionDate.slice(5,7));

        if(singleTransaction.type == "Expense" && transactionYear == this.yearSelected){
          this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
          this.expenseIndex++;
        }

      }
    }
    }

  if(this.expenseIndex == 0){
      if(this.languageSelected == 1){
      this.message = 'Could not find any expense, Please add expenses first';
    }

     else if(this.languageSelected == 2){
      this.message = 'खर्च भेटीएन, कृपया पहिला  खर्चको विवरण थप्नुहोस';
    }

    }
    else{  
      if(this.languageSelected == 1){
      this.message = 'No. of Expenses: ' + this.expenseIndex;
    }
 else if(this.languageSelected == 2){
      this.message = 'कुल खर्च संख्या: ' + this.expenseIndex;
    }
  }

  }

   deleteItem(ID){
    window.localStorage.removeItem(ID);
if(this.languageSelected == 1){
   let toast = this.toastCtrl.create({
      message: 'Expense has been deleted',
      duration: 2000
    });
    toast.present();
}
else if(this.languageSelected == 1){
   let toast = this.toastCtrl.create({
      message: 'खर्च डिलिट भयो ।',
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

    var noOfExpense = this.expenses.length;

    for(var i = 0; i<=noOfExpense; i++){
      if(this.expenses[i] != undefined){
       if(this.languageSelected == 1){
        this.expensesTitle.push(this.expenses[i].category_name);
      }
       else if(this.languageSelected == 2){
        this.expensesTitle.push(this.expenses[i].category_name_nepali);
      }
        this.expenseRupeesAmount.push(this.expenses[i].amount);
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
    let popover = this.popoverCtrl.create(PopoverExpenseYearPage);
    popover.present({
      ev: myEvent
    });
  }

}
