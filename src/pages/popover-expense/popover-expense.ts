import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonthwiseExpenseReportPage } from '../monthwise-expense-report/monthwise-expense-report';

/**
 * Generated class for the PopoverExpensePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-expense',
  templateUrl: 'popover-expense.html',
})
export class PopoverExpensePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverExpensePage');
  }

  monthName(monthValue){
	this.navCtrl.push(MonthwiseExpenseReportPage, {'monthName': monthValue}, {animate: true, direction: 'forward'})
  }

}
