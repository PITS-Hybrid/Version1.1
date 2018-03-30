import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
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
  userInfo;
calendarSelected;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
   this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";
   }
    else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";
   }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverExpenseYearPage');
  }

  yearName(yearID){
    this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(YearlyExpenseReportPage,
      {'yearName' : yearID})


}

}
