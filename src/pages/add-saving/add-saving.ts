import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SavingReportPage } from '../saving-report/saving-report';
import { HomePage } from '../home/home';
declare var require: any;

/**
 * Generated class for the AddSavingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
   selector: 'page-add-saving',
   templateUrl: 'add-saving.html',
 })
 export class AddSavingPage {
   @ViewChild('date') date;
   @ViewChild('note') note;
   @ViewChild('year') year;
   @ViewChild('month') month;
   @ViewChild('day') day;
   @ViewChild('amt') amount;
   @ViewChild('savinginstitute') savinginstitute;
   @ViewChild('incomesource') incomesource;

   myDate: String = new Date().toISOString().substring(0, 10);
   userID;
   languageSelected;
   userInfo;
   today_date;
   nepali_date_year;
   nep_year = []
   total_month = [];
   current_month;
   change_Date_1;
   adbs
   res: String = new Date().toISOString().slice(0,10).replace(/-/g,"/");
   array =[];
   eng_date;
   calendarSelected;
   temp_nepali_date;
   days=[];
   newSaving;
    savingPurpose: String;
    numberOfItems = 0;
 savingGoals = [];

   constructor(public navCtrl: NavController, public navParams: NavParams, 
     public toastCtrl: ToastController) {

     this.adbs = require("ad-bs-converter");
     this.today_date = this.adbs.ad2bs(this.res.toString());
     this.nepali_date_year = this.today_date.en.year;
     this.current_month = parseInt(this.today_date.en.month);
     for(var i=2070; i<=2076 ;i++){
       this.nep_year.push(i);

     }
     console.log(parseInt(this.today_date.en.totalDaysInMonth));


     for(var i=1; i<=12 ;i++){
       this.total_month.push(i);

     }


     this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
     console.log(this.userInfo.calendar);


     this.userID =this.userInfo.sessionid;
     console.log(this.userID);

     if(this.userInfo.calendar == "AD"){
       this.calendarSelected = "AD";
     }
     else if(this.userInfo.calendar == "BS"){
       this.calendarSelected = "BS";
     }

  for(var i = 0; i <= this.numberOfItems; i++){
      var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

      if(singleTransaction.type == "Income" || singleTransaction.type == "Expense" 
               || singleTransaction.type == "LoanGiven" || singleTransaction.type == "LoanTaken"
               || singleTransaction.type == "Saving" || singleTransaction.type =="userInfo"
               || singleTransaction.type =="NewCategoryIncome" || singleTransaction.type =="NewCategoryExpense"
               || singleTransaction.type == "Saving Goal" || singleTransaction.type == "Saving For Goal" ){
         this.numberOfItems++;
     }

     if(singleTransaction.type == "Saving Goal" && singleTransaction.status == "Incomplete"){
       this.savingGoals.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
     }
     console.log(this.savingGoals);

    }

   }


   yearChanged(){
     console.log(this.year.value);



   }

   monthChanged(){
     if(this.userInfo.calendar == "BS"){
       this.days.splice(0,this.days.length)

       if(this.year.value == 2074 && this.month.value == 1){
      this.change_Date_1 =  this.adbs.ad2bs("2017/4/14");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 2){
      this.change_Date_1 = this.adbs.ad2bs("2017/5/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 3){
      this.change_Date_1 = this.adbs.ad2bs("2017/6/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 4){
     this.change_Date_1 = this.adbs.ad2bs("2017/7/16");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 5){
     this.change_Date_1 = this.adbs.ad2bs("2017/8/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 6){
      this.change_Date_1 = this.adbs.ad2bs("2017/9/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 7){
     this.change_Date_1 = this.adbs.ad2bs("2017/10/18");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 8){
      this.change_Date_1 = this.adbs.ad2bs("2017/11/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 9){
      this.change_Date_1 = this.adbs.ad2bs("2017/12/16");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 10){
     this.change_Date_1 = this.adbs.ad2bs("2018/1/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 11){
     this.change_Date_1 = this.adbs.ad2bs("2018/2/13");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2074 && this.month.value == 12){
      this.change_Date_1 = this.adbs.ad2bs("2018/3/15");
      console.log(this.change_Date_1);
    }

    if(this.year.value == 2075 && this.month.value == 1){
     this.change_Date_1 = this.adbs.ad2bs("2018/4/14");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 2){
     this.change_Date_1 = this.adbs.ad2bs("2018/5/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 3){
      this.change_Date_1 = this.adbs.ad2bs("2018/6/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 4){
     this.change_Date_1 = this.adbs.ad2bs("2018/7/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 5){
   this.change_Date_1 = this.adbs.ad2bs("2018/8/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 6){
    this.change_Date_1 = this.adbs.ad2bs("2018/9/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 7){
      this.change_Date_1 = this.adbs.ad2bs("2018/10/18");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 8){
      this.change_Date_1 = this.adbs.ad2bs("2018/11/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 9){
     this.change_Date_1 = this.adbs.ad2bs("2018/12/16");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 10){
    this.change_Date_1 = this.adbs.ad2bs("2019/1/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 11){
      this.change_Date_1 = this.adbs.ad2bs("2019/2/13");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2075 && this.month.value == 12){
       this.change_Date_1 = this.adbs.ad2bs("2019/3/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 1){
       this.change_Date_1 = this.adbs.ad2bs("2019/4/14");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 2){
      this.change_Date_1 = this.adbs.ad2bs("2019/5/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 3){
     this.change_Date_1 = this.adbs.ad2bs("2019/6/16");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 4){
      this.change_Date_1 = this.adbs.ad2bs("2019/7/19");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 5){
       this.change_Date_1 = this.adbs.ad2bs("2019/8/20");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 6){
       this.change_Date_1 = this.adbs.ad2bs("2019/9/20");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 7){
       this.change_Date_1 = this.adbs.ad2bs("2019/10/20");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 8){
       this.change_Date_1 = this.adbs.ad2bs("2019/11/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 9){
      this.change_Date_1 = this.adbs.ad2bs("2019/12/17");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 10){
       this.change_Date_1 = this.adbs.ad2bs("2020/1/15");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 11){
     this.change_Date_1 = this.adbs.ad2bs("2020/2/13");
      console.log(this.change_Date_1);
    }
    if(this.year.value == 2076 && this.month.value == 12){
      this.change_Date_1 = this.adbs.ad2bs("2020/3/14");
      console.log(this.change_Date_1);

    }

     }





     for(var i=1; i<=parseInt(this.change_Date_1.en.totalDaysInMonth) ;i++){
       this.days.push(i);

     }

   }


   ionViewDidLoad() {
     console.log('ionViewDidLoad AddSavingPage');
   }


   addSaving(){



     var timestamp = new Date().getTime();




     if(this.userInfo.calendar == "AD"){

       var Year = this.myDate.slice(0,4);
       var Month = this.myDate.slice(5,7);
       var Day = this.myDate.slice(8,10);  

       var eligibilityDate = Year+ '/' + Month + '/' + Day;
       console.log(eligibilityDate);
       this.temp_nepali_date = this.adbs.ad2bs(eligibilityDate);

       // this.temp_nepali_date = this.adbs.ad2bs(new Date(parseInt(this.myDate.slice(0,4)),parseInt(this.myDate.slice(5,7)),parseInt(this.myDate.slice(8,10))).toISOString().slice(0,10).replace(/-/g,"/").toString());
       console.log(this.temp_nepali_date);
       var converted_nepali_date = this.temp_nepali_date.en.year+ "/"+ this.temp_nepali_date.en.month + "/" + this.temp_nepali_date.en.day;
       console.log(converted_nepali_date);

       if(this.savingPurpose == "Misc. Saving"){
       this.newSaving= {
         type : 'Saving',
         amount : this.amount.value,
         institute : this.savinginstitute.value,
         income_source : this.incomesource.value,
         date : this.myDate,
         ID : timestamp,
         note : this.note.value,
         userID : this.userID,
         nepali_date : converted_nepali_date,
         savingPurpose: 'Misc. Saving',
       };
     }
      else{
       this.newSaving= {
         type : 'Saving For Goal',
         amount : this.amount.value,
         institute : this.savinginstitute.value,
         income_source : this.incomesource.value,
         date : this.myDate,
         ID : timestamp,
         note : this.note.value,
         userID : this.userID,
         nepali_date : converted_nepali_date,
         savingPurpose: this.savingPurpose,
       };
     }

   }


     if(this.userInfo.calendar == "BS"){


       var nep_date = this.year.value + "/"+  this.month.value + "/" +this.day.value
       var eligibilityDate = this.year.value+ '/' + this.month.value + '/' + this.day.value;
       var temp_eng_date = this.adbs.bs2ad(eligibilityDate);
       var converted_english_date = temp_eng_date.year + "/"+ temp_eng_date.month + "/" + temp_eng_date.day
        if(this.savingPurpose == "Misc. Saving"){
       this.newSaving= {
         type : 'Saving',
         amount : this.amount.value,
         institute : this.savinginstitute.value,
         income_source : this.incomesource.value,
         date : converted_english_date,
         ID : timestamp,
         note : this.note.value,
         userID : this.userID,
         nepali_date : nep_date,
          savingPurpose: 'Misc. Saving',
       };
     }
     else {
       this.newSaving= {
         type : 'Saving For Goal',
         amount : this.amount.value,
         institute : this.savinginstitute.value,
         income_source : this.incomesource.value,
         date : converted_english_date,
         ID : timestamp,
         note : this.note.value,
         userID : this.userID,
         nepali_date : nep_date,
         savingPurpose: this.savingPurpose,
       };
     }
     }




     if(this.amount.value=="" || this.myDate==undefined){


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
           message: 'New Saving Added',
           duration: 1000
         });
         toast.present();
       }

       else  if(this.languageSelected == 2){
         let toast = this.toastCtrl.create({
           message: 'नयाँ बचत थप् भएको छ',
           duration: 1000
         });
         toast.present();
       }

       localStorage.setItem(timestamp.toString(), JSON.stringify(this.newSaving));


       console.log(this.newSaving);



       this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

       
     }
   }

 }

