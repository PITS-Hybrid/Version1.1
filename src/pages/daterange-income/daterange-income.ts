import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DaterangeIncomeReportPage } from '../daterange-income-report/daterange-income-report';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the DaterangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-daterange-income',
  templateUrl: 'daterange-income.html',
})
export class DaterangeIncomePage {
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
              


     this.navCtrl.push(DaterangeIncomeReportPage, {'startDateValue': this.myStartDate,
								 'endDateValue' : this.myEndDate
									}, {animate: true, direction: 'forward'})
  

}
}
}
