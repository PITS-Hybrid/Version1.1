import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, AlertController, ToastController } from 'ionic-angular';
import { MonthWiseIncomeReport } from '../monthwise-income-report/monthwise-income-report';
import { DailyIncomeReportPage } from '../daily-income-report/daily-income-report';
import { YearlyIncomeReportPage } from '../yearly-income-report/yearly-income-report';
import { DaterangeIncomePage } from '../daterange-income/daterange-income';
import { App } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-popover-income',
  templateUrl: 'popover-income.html',
})
export class PopoverIncomePage {
  os:string;
  // yearName;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
     public alertCtrl: AlertController, public toastCtrl: ToastController,  public appCtrl: App) {


  }



  monthly(){
    this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(MonthWiseIncomeReport);
  }


  daily(){
    this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(DailyIncomeReportPage);
  }
  
 

  yearly(){
   this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(YearlyIncomeReportPage);
  }


  daterange(){
 this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(DaterangeIncomePage);
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    
  }


}
