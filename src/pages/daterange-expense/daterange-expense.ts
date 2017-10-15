import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DaterangeExpenseReportPage } from '../daterange-expense-report/daterange-expense-report';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the DaterangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-daterange-expense',
  templateUrl: 'daterange-expense.html',
})
export class DaterangeExpensePage {
	 myStartDate: String ;
	 myEndDate: String ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaterangePage');
  }



setRange(){
	
  


    if(this.myStartDate == undefined || this.myEndDate==undefined){
            let toast = this.toastCtrl.create({
                message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
                duration: 1000
              });
              toast.present();
            }
            else{
              


     this.navCtrl.push(DaterangeExpenseReportPage, {'startDateValue': this.myStartDate,
								 'endDateValue' : this.myEndDate
									}, {animate: true, direction: 'forward'})
  

}
}
}
