import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  clearAll(){
  	window.localStorage.clear();
  	let alert = this.alertCtrl.create({
      title: 'सफल भयो!',
      subTitle: 'सबै रेकोर्द्सहरु मेटियो',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
  }

}
