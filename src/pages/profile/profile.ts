import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';
import { SignInPage } from '../sign-in/sign-in';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild('typeofuser') typeOfUser;
  @ViewChild('language') language;
    @ViewChild('calendar') calendar;
  public age: number = 30;

  incomeJSON = [];
  expenseJSON = [];
  incomes = [];
  incomeSum = 0;
  incomeIndex = 0;

  incomeTitle = [];
  incomeRupeesAmount = [];


  expensesTitle = [];
  expenseRupeesAmount = [];

  expenses = [];
  expenseSum = 0;
  expenseIndex = 0;
  flag =0;
  localStorageLanguageSelected;
  localStorageUserTypeSelected;
  placeholderLanguage;
  placeholderUserType;
  placeholderCalendar;
  userInfo;
  constructor(public loadingCtrl: LoadingController, public translate: TranslateService, public translateService: TranslateService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
 this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
 console.log(this.userInfo);
    this.localStorageLanguageSelected = this.userInfo.language;
   //this.localStorageUserTypeSelected = localStorage.getItem('localStorageUserTypeSelected');
   this.localStorageUserTypeSelected =  this.userInfo.usertype;
   this.placeholderCalendar = this.userInfo.calendar;

    if(this.localStorageLanguageSelected == 1 ){
      this.placeholderLanguage="English";
      if(this.localStorageUserTypeSelected == "Student"){
        this.placeholderUserType = "Student";
      }
      else if(this.localStorageUserTypeSelected == "Professional"){
        this.placeholderUserType = "Professional";
      }
      else if(this.localStorageUserTypeSelected == "Housewife"){
        this.placeholderUserType = "Housewife";
      }
    }

    else if(this.localStorageLanguageSelected == 2 ){
      this.placeholderLanguage="नेपाली";
      if(this.localStorageUserTypeSelected == "Student"){
        this.placeholderUserType = "विद्यार्थी";
      }
      else if(this.localStorageUserTypeSelected == "Professional"){
        this.placeholderUserType = "व्यावसायिक";
      }
      else if(this.localStorageUserTypeSelected == "Housewife"){
        this.placeholderUserType = "गृहिणी";
      }
    }

  }

  //   var currentYear = new Date().getFullYear();



  //   var numberOfIncomeAndExpense = 0;

  //   if(localStorage.length>1){
  //     for (var i = 0; i <= numberOfIncomeAndExpense; i++){


  //       var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

  //       if(singleTransaction.type == "Income" || singleTransaction.type == "Expense"){
  //         numberOfIncomeAndExpense++;
  //       }

  //       if(singleTransaction.date != undefined){
  //         var transactionDate = singleTransaction.date;
  //         var transactionYear = parseInt(transactionDate.slice(0,4));
  //         var transactionMonth = parseInt(transactionDate.slice(5,7));

  //         if(singleTransaction.type == "Income"  ){
  //           this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //           this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
  //           this.incomeIndex++;
  //         }
  //         if(singleTransaction.type == "Expense" ){
  //           this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //           this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
  //           this.expenseIndex++;
  //         }

  //       }

  //     }
  //   }
  //   console.log(this.incomes);

  // }

  // ionViewDidLoad() {

  //   var noOfIncome = this.incomes.length;

  //   for(var i = 0; i<=noOfIncome; i++){
  //     if(this.incomes[i] != undefined){
  //       this.incomeTitle.push(this.incomes[i].category_name_nepali);
  //       this.incomeRupeesAmount.push(this.incomes[i].amount);
  //       this.incomeJSON.push(this.incomes[i]);
  //      // console.log(this.incomeJSON);
  //    }

  //  }

  //  var noOfExpense = this.expenses.length;

  //  for(var i = 0; i<=noOfExpense; i++){
  //    if(this.expenses[i] != undefined){
  //      this.expensesTitle.push(this.expenses[i].category_name_nepali);
  //      this.expenseRupeesAmount.push(this.expenses[i].amount);
  //      this.expenseJSON.push(this.expenses[i]);
  //      // console.log(this.expenseJSON);
  //    }}



  //  }


   // clearAll(){
   //   window.localStorage.clear();
   //   let alert = this.alertCtrl.create({
   //     title: 'सफल भयो!',
   //     subTitle: 'सबै रेकोर्द्सहरु मेटियो',
   //     buttons: ['OK']
   //   });
   //   alert.present();
   //   this.navCtrl.setRoot(HomePage);
   // }







// languageOption(languageValue){


//  if(languageValue == 1 ){
//    window.localStorage.setItem('LV', languageValue);
//     //this.translateService.use('en');
//   this.translate.setDefaultLang('en');

//  this.navCtrl.setRoot(this.navCtrl.getActive().component).then(() => {

//         // this.navCtrl.setRoot(HomePage);
//             })



//   // window.location.reload(true);

// }
// else if(languageValue == 2 ){
//   this.translate.setDefaultLang('nep');
//    //this.translateService.use('nep');
//   window.localStorage.setItem('LV', languageValue);
//  // this.navCtrl.setRoot(this.navCtrl.getActive().component);
//    // window.location.reload(true);

//  this.navCtrl.setRoot(this.navCtrl.getActive().component).then(() => {

//         // this.navCtrl.setRoot(HomePage);
//             })
// }


//   }







saveSettings() {
  console.log(this.typeOfUser.value);
  console.log(this.language.value);

  if(this.language.value == "" ){
    this.language.value = this.localStorageLanguageSelected;

    
  }

  else if(this.language.value == "English" ){

    this.localStorageLanguageSelected ="1";
    //this.translateService.use('en');
    this.translate.setDefaultLang('en');


  }
  else if(this.language.value == "Nepali" ){
    this.translate.setDefaultLang('nep');

    this.localStorageLanguageSelected = "2";


  }


           


  if(this.typeOfUser.value == ""){
   
    this.localStorageUserTypeSelected = this.localStorageUserTypeSelected;
  }

  else {
    this.localStorageUserTypeSelected = this.typeOfUser.value;
   
  }


this.userInfo= {
             type : this.userInfo.type,
             usertype :  this.localStorageUserTypeSelected,
             sessionid : this.userInfo.sessionid,
             language :   this.localStorageLanguageSelected,
             calendar : this.calendar.value,
           };

           localStorage.setItem('userInfo', JSON.stringify(this.userInfo));

           console.log(this.userInfo);

  this.navCtrl.setRoot(this.navCtrl.getActive().component).then(() => {
   this.navCtrl.setRoot(HomePage, {'localStorageUserTypeSelected': this.localStorageUserTypeSelected}, {animate: true, direction: 'forward'});
            
    //this.navCtrl.setRoot(HomePage);
  })


  // const loading = this.loadingCtrl.create({
  //   spinner: 'hide',
  //   content: 'Changing Language Please Wait...',
  //    dismissOnPageChange: true
  // });

  // loading.present();

  // setTimeout(() => {

  // }, 500);



   // window.location.reload(true);
 }




 logOut(){

   // this.userInfo= {
   //           type : this.userInfo.type,
   //           usertype :  this.localStorageUserTypeSelected,
   //           sessionid : "",
   //           language :   this.localStorageLanguageSelected 
   //         };

   //         localStorage.setItem('userInfo', JSON.stringify(this.userInfo));

   //         console.log(this.userInfo);

  localStorage.removeItem('userInfo');
   // window.localStorage.removeItem('localStorageUserTypeSelected');
   // window.localStorage.removeItem('LV');
   this.navCtrl.setRoot(SignInPage);
 }

}




