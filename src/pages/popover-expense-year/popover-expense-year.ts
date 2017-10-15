import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YearlyExpenseReportPage } from '../yearly-expense-report/yearly-expense-report';


/**
 * Generated class for the PopoverExpenseYearPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-expense-year',
  templateUrl: 'popover-expense-year.html',
})
export class PopoverExpenseYearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverExpenseYearPage');
  }

  yearName(yearID){
    this.navCtrl.push(YearlyExpenseReportPage,
      {'yearName' : yearID})


}

}
