import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AddExpenseDemoPage } from '../add-expense-demo/add-expense-demo';


@IonicPage()
@Component({
  selector: 'page-add-expense',
  templateUrl: 'add-expense.html',
})
export class AddExpensePage {

  myDate: String ;

  titleExpense: string = "daily";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
  }

  expenseCategory(categoryID, name){


      this.navCtrl.push(AddExpenseDemoPage,
      {'catName' : categoryID,
      'nepalicatName' : name})

  }

}
