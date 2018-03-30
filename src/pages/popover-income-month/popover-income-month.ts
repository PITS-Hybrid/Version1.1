import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';
import { App, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverIncomeMonthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-income-month',
  templateUrl: 'popover-income-month.html',
})
export class PopoverIncomeMonthPage {
userInfo;
calendarSelected;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController, public appCtrl: App) {
   this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";
   }
    else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";
   }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverIncomeMonthPage');
  }

monthName(monthValue){
  this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(MonthWiseIncomeReport, {'monthName': monthValue}, {animate: true, direction: 'forward'})
  
  }






}
