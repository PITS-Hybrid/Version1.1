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

      // var incomeType = categoryID;
      // window.localStorage.setItem('typeofIncome',incomeType);

    // this.navCtrl.push(AddIncomeDemoPage);
//console.log('typeofIncome');
  //console.log(window.localStorage.getItem('typeofIncome'));
  //   var timestamp = new Date().getTime();
  // 	let prompt = this.alertCtrl.create({
  //     title: 'नयाँ आम्दनी - '+name,
  //     message: "कृपया नयाँ आम्दनीको बिभरन भर्नुहोस्",
  //     inputs: [
  //      {
  //         type: 'hidden',
  //         name: 'type',
  //         value: 'Income'
  //       },
  //       {
  //         type: 'date',
  //         name: 'date'
  //       },
  //       {
  //       	type: 'number',
  //         name: 'amount',
  //         placeholder: 'रकम'
  //       },
  //       {
  //         type: 'hidden',
  //         name: 'category_name_nepali',
  //         value: name
  //       },
  //        {
  //         type: 'hidden',
  //         name: 'category_name',
  //         value: categoryID
  //       },
  //       {
  //         type: 'text',
  //         name: 'note',
  //         placeholder: 'नोट'
  //       },
  //       {
  //         type: 'hidden',
  //         name:'ID',
  //         value: timestamp
  //       }

  //     ],
  //     buttons: [
  //       {
  //         text: 'रद्द',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'शेभ गर्नु ',
  //         handler: data => {
  //           if(data.amount=="" || data.date==""){
  //           let toast = this.toastCtrl.create({
		// 			      message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
		// 			      duration: 2000
		// 			    });
	 //            toast.present();
  //           }
  //           else{
  //           	let toast = this.toastCtrl.create({
		// 			      message: 'नयाँ आम्दनी थप् भएको छ',
		// 			      duration: 2000
		// 			    });

  //             var newIncome = data;

  //             localStorage.setItem(data.ID, JSON.stringify(newIncome));

	 //            toast.present();

  //             this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  }

}
