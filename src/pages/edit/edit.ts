import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'edit',
  templateUrl: 'edit.html',
})
export class Edit {
	
	itemID;
	item;
  languageSelected;
  categorySelected;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  	this.itemID = navParams.get('id');

  	this.item = JSON.parse(window.localStorage.getItem(this.itemID));
    this.languageSelected=localStorage.getItem('LV');
    

    if(this.languageSelected == 1){
   
    this.categorySelected= this.item.category_name;

  }

 else if(this.languageSelected == 2){
    this.categorySelected= this.item.category_name_nepali;
  }

     
  }

  edit(id, dateAdded, amount, cat_name, cat_name_nep, type, note){

    
    if(amount == ""){
      if(this.languageSelected == 1){
      let toast = this.toastCtrl.create({
        message: 'Please fill in the details',
        duration: 2000
      });
      toast.present();
    }
     else if(this.languageSelected == 2){
      let toast = this.toastCtrl.create({
        message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
        duration: 2000
      });
      toast.present();
    }
    }
    else{

      var updateData = {
        ID: id,
        amount: amount,
        date: dateAdded,
        category_name: cat_name,
        category_name_nepali: cat_name_nep,
        note: note,
        type: type
      };



      window.localStorage.removeItem(id);
    
      window.localStorage.setItem(id, JSON.stringify(updateData));

      let toast = this.toastCtrl.create({
          message: 'एडिट सफल भएको छ!',
          duration: 2000
        });

      toast.present();
      this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

    }
  }

  deleteItem(id){
    let confirm = this.alertCtrl.create({
      title: 'रेकोर्द डिलिट',
      message: 'यो रेकोर्दलाई पक्का डिलिट गर्ने?',
      buttons: [
        {
          text: 'होइन',
          handler: () => {
            /* Chill and do nothing */
          }
        },
        {
          text: 'हो',
          handler: () => {
           window.localStorage.removeItem(id);

           let toast = this.toastCtrl.create({
              message: 'रेकोर्द डिलिट भयो ।',
              duration: 2000
            });
            toast.present();

            this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    
  }

}
