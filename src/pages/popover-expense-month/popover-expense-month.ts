import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App, ViewController} from 'ionic-angular';
import { MonthwiseExpenseReportPage } from '../monthwise-expense-report/monthwise-expense-report';


@IonicPage()
@Component({
  selector: 'page-popover-expense-month',
  templateUrl: 'popover-expense-month.html',
})
export class PopoverExpenseMonthPage {
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
    console.log('ionViewDidLoad PopoverExpenseMonthPage');
  }

  monthName(monthValue){
  this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(MonthwiseExpenseReportPage, {'monthName': monthValue}, {animate: true, direction: 'forward'})
  
  }

}
