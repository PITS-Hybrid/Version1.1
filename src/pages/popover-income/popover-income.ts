import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';
import { DailyIncomeReportPage } from '../daily-income-report/daily-income-report';



@IonicPage()
@Component({
  selector: 'page-popover-income',
  templateUrl: 'popover-income.html',
})
export class PopoverIncomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  monthName(monthValue){
	this.navCtrl.push(MonthWiseIncomeReport, {'monthName': monthValue}, {animate: true, direction: 'forward'})
  }

  daily(){
    this.navCtrl.push(DailyIncomeReportPage);
  }
  
  // yearly(){
  //   this.navCtrl.push('YearlyIncomeReportPage');
  // }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    
  }

}
