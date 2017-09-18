

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddIncomePage} from '../add-income/add-income';

@Component({
  selector: 'page-add-income-demo',
  templateUrl: 'add-income-demo.html',
})
export class AddIncomeDemoPage {


 @ViewChild('amt') amountofIncome;
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
    
  }

  addIncome(){

    var timestamp = new Date().getTime();

    var newIncome= {
      type : 'Income',
      amount : this.amountofIncome.value,
      category_name_nepali : this.nepalicategoryParam,
      category_name : this.categoryParam,
      date : this.myDate,
      ID : timestamp,
      note : this.note.value


    };

    console.log(this.myDate);
    if(this.amountofIncome.value=="" || this.myDate==undefined){
            let toast = this.toastCtrl.create({
                message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
                duration: 2000
              });
              toast.present();
            }
            else{
              let toast = this.toastCtrl.create({
                message: 'नयाँ आम्दनी थप् भएको छ',
                duration: 2000
              });


    localStorage.setItem(timestamp.toString(), JSON.stringify(newIncome));
    

    console.log(newIncome);

     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
}
  }

}


