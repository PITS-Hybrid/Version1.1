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

  titleExpense: string = "daily";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
  }

  expenseCategory(categoryID, name){


      this.navCtrl.push(AddExpenseDemoPage,
      {'catName' : categoryID,
      'nepalicatName' : name})


   //  var timestamp = new Date().getTime();
  	// let prompt = this.alertCtrl.create({
   //    title: 'नयाँ खर्च - '+name,
   //    message: "कृपया नयाँ खर्चको बिभरन भर्नुहोस्",
   //    inputs: [
   //       {
   //        type: 'hidden',
   //        name: 'type',
   //        value: 'Expense'
   //      },
   //      {
   //        type: 'date',
   //        name: 'date'
   //      },
   //      {
   //        type: 'number',
   //        name: 'amount',
   //        placeholder: 'रकम'
   //      },
   //      {
   //        type: 'text',
   //        name: 'note',
   //        placeholder: 'नोट'
   //      },
   //      {
   //        type: 'hidden',
   //        name: 'category_name_nepali',
   //        value: name
   //      },
   //       {
   //        type: 'hidden',
   //        name: 'category_name',
   //        value: categoryID
   //      },
   //      {
   //        type: 'hidden',
   //        name:'ID',
   //        value: timestamp
   //      }
   //    ],
   //    buttons: [
   //      {
   //        text: 'रद्द',
   //        handler: data => {
   //          console.log('Cancel clicked');
   //        }
   //      },
   //      {
   //        text: 'शेभ गर्नु ',
   //        handler: data => {
   //          if(data.amount=="" || data.date==""){
   //          let toast = this.toastCtrl.create({
			// 		      message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
			// 		      duration: 2000
			// 		    });
	  //           toast.present();
   //          }
   //          else{
   //          	let toast = this.toastCtrl.create({
			// 		      message: 'नयाँ खर्च थप् भएको छ',
			// 		      duration: 2000
			// 		    });

   //            var newExpense = data;

   //            localStorage.setItem(data.ID, JSON.stringify(newExpense));

   //            toast.present();

   //            this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
   //          }
   //        }
   //      }
   //    ]
   //  });
   //  prompt.present();
  }

}
