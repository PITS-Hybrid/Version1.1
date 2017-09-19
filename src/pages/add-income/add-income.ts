import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';


import { AddIncomeDemoPage } from '../add-income-demo/add-income-demo';

@IonicPage()
@Component({
  selector: 'page-add-income',
  templateUrl: 'add-income.html',
})
export class AddIncomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
  }

  incomeCategory(categoryID, name){
    this.navCtrl.push(AddIncomeDemoPage,
      {'catName' : categoryID,
      'nepalicatName' : name})

    
  }

}
