import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
import { NavController, NavParams, ToastController, ModalController, IonicPage } from 'ionic-angular';
import { Chart } from 'chart.js';

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

 constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public modalCtrl: ModalController) {

  	this.myStartDate = navParams.get("startDateValue");
  	this.myEndDate = navParams.get("endDateValue");
    this.languageSelected=localStorage.getItem('LV');
 if(this.languageSelected == 1){
    this.languageEnglish=this.languageSelected;
  }

 else if(this.languageSelected == 2){
    this.languageNepali=this.languageSelected;
  }
   

    if(localStorage.length>1){
      for (var i = 0; i < localStorage.length; i++){
        var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
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

}
