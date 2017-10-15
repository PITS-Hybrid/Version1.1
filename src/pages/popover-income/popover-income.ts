import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';
import { DailyIncomeReportPage } from '../daily-income-report/daily-income-report';
import { YearlyIncomeReportPage } from '../yearly-income-report/yearly-income-report';



@IonicPage()
@Component({
  selector: 'page-popover-income',
  templateUrl: 'popover-income.html',
})
export class PopoverIncomePage {
  os:string;
  // yearName;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {


  }

 //  monthName(monthValue){
	// this.navCtrl.push(MonthWiseIncomeReport, {'monthName': monthValue}, {animate: true, direction: 'forward'})
 //   console.log(this.os);
 //  }


  monthly(){
  this.navCtrl.push(MonthWiseIncomeReport);
  }
  daily(){
    this.navCtrl.push(DailyIncomeReportPage);
  }
  
  // public yearWise(event){
  //   this.navCtrl.push(YearlyIncomeReportPage, {'yearName': this.yearName}, {animate: true, direction: 'forward'})
  // }

  yearly(yearValue){
    this.navCtrl.push(YearlyIncomeReportPage, {'yearName': yearValue}, {animate: true, direction: 'forward'})
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    
  }


}
