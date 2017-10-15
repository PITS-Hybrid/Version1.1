import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonthwiseExpenseReportPage } from '../monthwise-expense-report/monthwise-expense-report';
import { DailyExpenseReportPage } from '../daily-expense-report/daily-expense-report';
import { YearlyExpenseReportPage } from '../yearly-expense-report/yearly-expense-report';


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


  
  daily(){
    this.navCtrl.push(DailyExpenseReportPage);
  }
  
  monthly(){
  this.navCtrl.push(MonthwiseExpenseReportPage);
  }
 
  yearly(){
    this.navCtrl.push(YearlyExpenseReportPage)
  }

}
