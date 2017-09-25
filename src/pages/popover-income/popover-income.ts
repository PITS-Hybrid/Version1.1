import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';


/**
 * Generated class for the PopoverIncomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-income',
  templateUrl: 'popover-income.html',
})
export class PopoverIncomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  monthName(monthValue){
	this.navCtrl.push(MonthWiseIncomeReport, {'monthName': monthValue}, {animate: true, direction: 'forward'})
  }

  ionViewDidLoad() {
    
  }

}
