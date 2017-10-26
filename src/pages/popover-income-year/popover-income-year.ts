import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YearlyIncomeReportPage } from '../yearly-income-report/yearly-income-report';

/**
 * Generated class for the PopoverIncomeYearPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-income-year',
  templateUrl: 'popover-income-year.html',
})
export class PopoverIncomeYearPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverIncomeYearPage');
  }



yearName(yearID){
    this.navCtrl.push(YearlyIncomeReportPage,
      {'yearName' : yearID})

    
  }

}
