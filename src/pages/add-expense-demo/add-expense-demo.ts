import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddExpensePage} from '../add-expense/add-expense';

/**
 * Generated class for the AddExpenseDemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-expense-demo',
  templateUrl: 'add-expense-demo.html',
})
export class AddExpenseDemoPage {


 @ViewChild('amt') amountofExpense;
 @ViewChild('date') date;
 @ViewChild('note') note;
myDate: String ;
public categoryParam;
public nepalicategoryParam;



constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  	

  	this.categoryParam = navParams.get("catName");
    this.nepalicategoryParam = navParams.get("nepalicatName"); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpenseDemoPage');
  }



  addExpense(){

    var timestamp = new Date().getTime();

    var newExpense= {
      type : 'Expense',
      amount : this.amountofExpense.value,
      category_name_nepali : this.nepalicategoryParam,
      category_name : this.categoryParam,
      date : this.myDate,
      ID : timestamp,
      note : this.note.value


    };


    console.log(this.myDate);
    if(this.amountofExpense.value=="" || this.myDate==undefined){
            let toast = this.toastCtrl.create({
                message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
                duration: 2000
              });
              toast.present();
            }
            else{
              let toast = this.toastCtrl.create({
                message: 'नयाँ खर्च थप् भएको छ',
                duration: 2000
              });

    localStorage.setItem(timestamp.toString(), JSON.stringify(newExpense));
    


     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

}
}



}
