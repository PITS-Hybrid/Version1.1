import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController  } from 'ionic-angular';
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
    console.log('ionViewDidLoad PopoverIncomeYearPage');
  }



yearName(yearID){
    this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(YearlyIncomeReportPage,
      {'yearName' : yearID})

    
  }

}
