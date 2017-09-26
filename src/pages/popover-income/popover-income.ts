import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  monthName(monthValue){
	this.navCtrl.push(MonthWiseIncomeReport, {'monthName': monthValue}, {animate: true, direction: 'forward'})
  }


  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    
  }

}
