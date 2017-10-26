import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-add-expense-demo',
  templateUrl: 'add-expense-demo.html',
})
export class AddExpenseDemoPage {



myDate: String ;
myAmount: String;
myNote: String;
public categoryParam;
public nepalicategoryParam;
 languageSelected;
 public catParam;



constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  	

  	this.categoryParam = navParams.get("catName");
    this.nepalicategoryParam = navParams.get("nepalicatName"); 
    this.languageSelected=localStorage.getItem('LV');


if(this.languageSelected == 1){
 
this.catParam= navParams.get("catName");

}

else if(this.languageSelected == 2 ){
this.catParam= navParams.get("nepalicatName");
}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpenseDemoPage');
  }



  addExpense(){
     this.languageSelected=localStorage.getItem('LV');

    var timestamp = new Date().getTime();

    var newExpense= {
      type : 'Expense',
      amount : this.myAmount,
      category_name_nepali : this.nepalicategoryParam,
      category_name : this.categoryParam,
      date : this.myDate,
      ID : timestamp,
      note : this.myNote


    };


    
    if(this.myAmount=="" || this.myDate==undefined){
             if(this.languageSelected == 1){

            let toast = this.toastCtrl.create({
                message: 'Please fill in the missing fields',
                duration: 1000
              });
              toast.present();
            }
           else  if(this.languageSelected == 2){

            let toast = this.toastCtrl.create({
                message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
                duration: 1000
              });
              toast.present();
            }
     }
                else{

        if(this.languageSelected == 1){
              let toast = this.toastCtrl.create({
                message: 'New Income Added',
                duration: 1000
              });
               toast.present();
}

     else  if(this.languageSelected == 2){
              let toast = this.toastCtrl.create({
                message: 'नयाँ आम्दनी थप् भएको छ',
                duration: 1000
              });
               toast.present();
}

    localStorage.setItem(timestamp.toString(), JSON.stringify(newExpense));
    


     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

}
}



}
