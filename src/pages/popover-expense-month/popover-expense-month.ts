import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonthwiseExpenseReportPage } from '../monthwise-expense-report/monthwise-expense-report';

/**
 * Generated class for the PopoverExpenseMonthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-expense-month',
  templateUrl: 'popover-expense-month.html',
})
export class PopoverExpenseMonthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverExpenseMonthPage');
  }

  monthName(monthValue){
	this.navCtrl.push(MonthwiseExpenseReportPage, {'monthName': monthValue}, {animate: true, direction: 'forward'})
  
  }

}
