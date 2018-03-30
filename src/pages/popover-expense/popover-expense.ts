import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, AlertController, ToastController, App } from 'ionic-angular';
import { MonthwiseExpenseReportPage } from '../monthwise-expense-report/monthwise-expense-report';
import { DailyExpenseReportPage } from '../daily-expense-report/daily-expense-report';
import { YearlyExpenseReportPage } from '../yearly-expense-report/yearly-expense-report';
import { DaterangeExpensePage } from '../daterange-expense/daterange-expense';


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


  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController, public toastCtrl: ToastController, public appCtrl: App, public viewCtrl: ViewController) {
 
  }


  
  daily(){
    this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(DailyExpenseReportPage);
  }
  
  monthly(){
  this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(MonthwiseExpenseReportPage);
  }
 
  yearly(){
    this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(YearlyExpenseReportPage)
  }

   daterange(){
   this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(DaterangeExpensePage)

    


    



  }


}
