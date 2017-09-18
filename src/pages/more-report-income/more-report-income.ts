import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';

@Component({
  selector: 'more-report-income',
  templateUrl: 'more-report-income.html',
})
export class MoreReportIncomePage {
  year;

  monthName;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.year = new Date().getFullYear();
	}

  ionViewDidLoad() {

  }

  public monthWise(event){
    this.navCtrl.push(MonthWiseIncomeReport, {'monthName': this.monthName}, {animate: true, direction: 'forward'})
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
