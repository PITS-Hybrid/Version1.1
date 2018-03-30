import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';


import { AddIncomeDemoPage } from '../add-income-demo/add-income-demo';
import { AddCategoryPage } from '../add-category/add-category';
@IonicPage()
@Component({
  selector: 'page-add-income',
  templateUrl: 'add-income.html',
})
export class AddIncomePage {
  userInfo;
  userType;
  userTypeSelected;
  newcategoryincome = [];
  
  newcategoryincomeIndex = 0;
  languageSelected;
  incomes = [];
  incomeSum = 0;
  incomeIndex = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
    public toastCtrl: ToastController) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.userType = this.userInfo.usertype;
    this.languageSelected=this.userInfo.language;
    if(this.userType == "Student"){
      this.userTypeSelected = "Student";
    }
    else if(this.userType == "Professional"){
      this.userTypeSelected = "Professional";
    }
    else if(this.userType == "Housewife"){
      this.userTypeSelected = "Housewife";
    }
    console.log(this.userType);
  }

  ionViewDidLoad() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    var sessionItem = 12;
     // var sessionItem = this.userInfo.sessionid;

     var numberOfIncomeAndExpense = 0;

     if(localStorage.length >= 1  ){
       if(sessionItem != undefined ){

         for(var i=0; i<= numberOfIncomeAndExpense ; i++){
           var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

           if(singleTransaction !=undefined){

             if(singleTransaction.type == "Income" || singleTransaction.type == "Expense" 
               || singleTransaction.type == "LoanGiven" || singleTransaction.type == "LoanTaken"
               || singleTransaction.type == "Saving" || singleTransaction.type =="userInfo"
               || singleTransaction.type =="NewCategoryIncome" || singleTransaction.type =="NewCategoryExpense"
               || singleTransaction.type == "Saving Goal" || singleTransaction.type == "Saving For Goal" ){

               numberOfIncomeAndExpense++;
           }


         }
       }

       console.log(numberOfIncomeAndExpense)





       for (var i = 0; i <= numberOfIncomeAndExpense; i++){
         var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
         console.log(singleTransaction);
         if(singleTransaction !=null){

         
             if(singleTransaction.type == "Income" ){
               this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
               this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
               this.incomeIndex++;

             }           

           if(singleTransaction.type == "NewCategoryIncome"){
             this.newcategoryincome[this.newcategoryincomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
             
             this.newcategoryincomeIndex++;

           }
           console.log(this.newcategoryincome);
           
           

         }
       }
     }
   }
 }


 incomeCategory(categoryID, name){
   this.navCtrl.push(AddIncomeDemoPage,
     {'catName' : categoryID,
     'nepalicatName' : name})

   
 }

 customisedIncomeCategory(categoryname, iconname){
   this.navCtrl.push(AddIncomeDemoPage,
     {'catName' : categoryname,
     'iconName' : iconname,
     'customflag' : 1})

 }

 addCategory(){
   this.navCtrl.push(AddCategoryPage,
     {'categoryType' : 'Income'});

 }

 itemPressed(info){
   if(this.languageSelected == 1){
     let prompt = this.alertCtrl.create({
       title: 'Do you want to delete this category?',
       message: "This category will be permanently deleted",    
       buttons: [    
       {
         cssClass: 'buttoncss',
         text: 'Delete',
         handler: () => {
           let toast = this.toastCtrl.create({
             message: 'category deleted',
             duration: 2000
           });
           toast.present(); 
           window.localStorage.removeItem(info.ID);
           this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});       
         }
       },
       {
         cssClass: 'buttoncss',
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           
         }
       }
       ]
     });
     prompt.present();
   }

   else  if(this.languageSelected == 2){
     let prompt = this.alertCtrl.create({
       title: 'के तपाई यो वर्ग मेटाउन चाहनुहुन्छ?',
       message: "यो वर्ग स्थायी रूपमा मेटाइने छ",    
       buttons: [    
       {
         cssClass: 'buttoncss',
         text: 'हुन्छ',
         handler: () => {
           let toast = this.toastCtrl.create({
             message: 'वर्ग डिलिट भयो ।',
             duration: 2000
           });
           toast.present(); 
           window.localStorage.removeItem(info.ID);
           this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});       
         }
       },
       {
         cssClass: 'buttoncss',
         text: 'हुदैन',
         role: 'cancel',
         handler: () => {
           
         }
       }
       ]
     });
     prompt.present();
   }

   
 }    
 


}


