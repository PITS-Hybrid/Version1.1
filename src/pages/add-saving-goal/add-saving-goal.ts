import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
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
   selector: 'page-add-saving-goal',
   templateUrl: 'add-saving-goal.html',
 })
 export class AddSavingGoalPage {
   @ViewChild('amt') amount;
   @ViewChild('savingGoalTitle') savingGoalTitle;
   @ViewChild('note') note;
   @ViewChild('startyear') startyear;
   @ViewChild('startmonth') startmonth;
   @ViewChild('startday') startday;
   @ViewChild('endyear') endyear;
   @ViewChild('endmonth') endmonth;
   @ViewChild('endday') endday;
   myDate: String ;
   myDate2;
   userID;
   languageSelected;
   userInfo;
   customflag;

   isToggled: boolean ;
   endDate;
   days=[];

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
   startdays=[];
   enddays=[];
   goal;

   constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController,
     public toastCtrl: ToastController) {
     this.adbs = require("ad-bs-converter");

     this.today_date = this.adbs.ad2bs(this.res.toString());
     this.nepali_date_year = this.today_date.en.year;
     this.current_month = parseInt(this.today_date.en.month);
     for(var i=2070; i<=2076 ;i++){
       this.nep_year.push(i);
     }
     for(var i=1; i<=12 ;i++){
       this.total_month.push(i);
     }
     this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
     this.userID =this.userInfo.sessionid;
     if(this.userInfo.calendar == "AD"){
       this.calendarSelected = "AD";
     }
     else if(this.userInfo.calendar == "BS"){
       this.calendarSelected = "BS";
     }
   }


   startMonthChanged(){
     if(this.userInfo.calendar == "BS"){
       this.startdays.splice(0,this.startdays.length)
       if(this.startyear.value == 2074 && this.startmonth.value == 1){
         this.change_Date_1 =  this.adbs.ad2bs("2017/4/14");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 2){
         this.change_Date_1 = this.adbs.ad2bs("2017/5/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 3){
         this.change_Date_1 = this.adbs.ad2bs("2017/6/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 4){
         this.change_Date_1 = this.adbs.ad2bs("2017/7/16");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 5){
         this.change_Date_1 = this.adbs.ad2bs("2017/8/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 6){
         this.change_Date_1 = this.adbs.ad2bs("2017/9/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 7){
         this.change_Date_1 = this.adbs.ad2bs("2017/10/18");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 8){
         this.change_Date_1 = this.adbs.ad2bs("2017/11/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 9){
         this.change_Date_1 = this.adbs.ad2bs("2017/12/16");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 10){
         this.change_Date_1 = this.adbs.ad2bs("2018/1/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 11){
         this.change_Date_1 = this.adbs.ad2bs("2018/2/13");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2074 && this.startmonth.value == 12){
         this.change_Date_1 = this.adbs.ad2bs("2018/3/15");
         console.log(this.change_Date_1);
       }

       if(this.startyear.value == 2075 && this.startmonth.value == 1){
         this.change_Date_1 = this.adbs.ad2bs("2018/4/14");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 2){
         this.change_Date_1 = this.adbs.ad2bs("2018/5/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 3){
         this.change_Date_1 = this.adbs.ad2bs("2018/6/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 4){
         this.change_Date_1 = this.adbs.ad2bs("2018/7/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 5){
         this.change_Date_1 = this.adbs.ad2bs("2018/8/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 6){
         this.change_Date_1 = this.adbs.ad2bs("2018/9/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 7){
         this.change_Date_1 = this.adbs.ad2bs("2018/10/18");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 8){
         this.change_Date_1 = this.adbs.ad2bs("2018/11/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 9){
         this.change_Date_1 = this.adbs.ad2bs("2018/12/16");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 10){
         this.change_Date_1 = this.adbs.ad2bs("2019/1/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 11){
         this.change_Date_1 = this.adbs.ad2bs("2019/2/13");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2075 && this.startmonth.value == 12){
         this.change_Date_1 = this.adbs.ad2bs("2019/3/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 1){
         this.change_Date_1 = this.adbs.ad2bs("2019/4/14");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 2){
         this.change_Date_1 = this.adbs.ad2bs("2019/5/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 3){
         this.change_Date_1 = this.adbs.ad2bs("2019/6/16");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 4){
         this.change_Date_1 = this.adbs.ad2bs("2019/7/19");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 5){
         this.change_Date_1 = this.adbs.ad2bs("2019/8/20");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 6){
         this.change_Date_1 = this.adbs.ad2bs("2019/9/20");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 7){
         this.change_Date_1 = this.adbs.ad2bs("2019/10/20");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 8){
         this.change_Date_1 = this.adbs.ad2bs("2019/11/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 9){
         this.change_Date_1 = this.adbs.ad2bs("2019/12/17");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 10){
         this.change_Date_1 = this.adbs.ad2bs("2020/1/15");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 11){
         this.change_Date_1 = this.adbs.ad2bs("2020/2/13");
         console.log(this.change_Date_1);
       }
       if(this.startyear.value == 2076 && this.startmonth.value == 12){
         this.change_Date_1 = this.adbs.ad2bs("2020/3/14");
         console.log(this.change_Date_1);

       }

     }


     for(var i=1; i<=parseInt(this.change_Date_1.en.totalDaysInMonth) ;i++){
       this.startdays.push(i);

     }

   }

   endMonthChanged(){

     if(this.userInfo.calendar == "BS"){
       this.enddays.splice(0,this.enddays.length)

       if(this.endyear.value == 2074 && this.endmonth.value == 1){
         this.change_Date_1 =  this.adbs.ad2bs("2017/4/14");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 2){
         this.change_Date_1 = this.adbs.ad2bs("2017/5/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 3){
         this.change_Date_1 = this.adbs.ad2bs("2017/6/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 4){
         this.change_Date_1 = this.adbs.ad2bs("2017/7/16");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 5){
         this.change_Date_1 = this.adbs.ad2bs("2017/8/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 6){
         this.change_Date_1 = this.adbs.ad2bs("2017/9/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 7){
         this.change_Date_1 = this.adbs.ad2bs("2017/10/18");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 8){
         this.change_Date_1 = this.adbs.ad2bs("2017/11/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 9){
         this.change_Date_1 = this.adbs.ad2bs("2017/12/16");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 10){
         this.change_Date_1 = this.adbs.ad2bs("2018/1/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 11){
         this.change_Date_1 = this.adbs.ad2bs("2018/2/13");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2074 && this.endmonth.value == 12){
         this.change_Date_1 = this.adbs.ad2bs("2018/3/15");
         console.log(this.change_Date_1);
       }

       if(this.endyear.value == 2075 && this.endmonth.value == 1){
         this.change_Date_1 = this.adbs.ad2bs("2018/4/14");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 2){
         this.change_Date_1 = this.adbs.ad2bs("2018/5/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 3){
         this.change_Date_1 = this.adbs.ad2bs("2018/6/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 4){
         this.change_Date_1 = this.adbs.ad2bs("2018/7/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 5){
         this.change_Date_1 = this.adbs.ad2bs("2018/8/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 6){
         this.change_Date_1 = this.adbs.ad2bs("2018/9/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 7){
         this.change_Date_1 = this.adbs.ad2bs("2018/10/18");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 8){
         this.change_Date_1 = this.adbs.ad2bs("2018/11/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 9){
         this.change_Date_1 = this.adbs.ad2bs("2018/12/16");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 10){
         this.change_Date_1 = this.adbs.ad2bs("2019/1/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 11){
         this.change_Date_1 = this.adbs.ad2bs("2019/2/13");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2075 && this.endmonth.value == 12){
         this.change_Date_1 = this.adbs.ad2bs("2019/3/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 1){
         this.change_Date_1 = this.adbs.ad2bs("2019/4/14");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 2){
         this.change_Date_1 = this.adbs.ad2bs("2019/5/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 3){
         this.change_Date_1 = this.adbs.ad2bs("2019/6/16");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 4){
         this.change_Date_1 = this.adbs.ad2bs("2019/7/19");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 5){
         this.change_Date_1 = this.adbs.ad2bs("2019/8/20");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 6){
         this.change_Date_1 = this.adbs.ad2bs("2019/9/20");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 7){
         this.change_Date_1 = this.adbs.ad2bs("2019/10/20");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 8){
         this.change_Date_1 = this.adbs.ad2bs("2019/11/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 9){
         this.change_Date_1 = this.adbs.ad2bs("2019/12/17");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 10){
         this.change_Date_1 = this.adbs.ad2bs("2020/1/15");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 11){
         this.change_Date_1 = this.adbs.ad2bs("2020/2/13");
         console.log(this.change_Date_1);
       }
       if(this.endyear.value == 2076 && this.endmonth.value == 12){
         this.change_Date_1 = this.adbs.ad2bs("2020/3/14");
         console.log(this.change_Date_1);

       }

     }

     for(var i=1; i<=parseInt(this.change_Date_1.en.totalDaysInMonth) ;i++){
       this.enddays.push(i);

     }


   }

   dismiss(){
     this.viewCtrl.dismiss();
   }

   addGoal(){
     this.languageSelected=this.userInfo.language;


     var timestamp = new Date().getTime();
     if(this.userInfo.calendar == "AD"){

       var startYear = this.myDate.slice(0,4);
       var startMonth = this.myDate.slice(5,7);
       var startDay = this.myDate.slice(8,10);

       var startDate = new Date(parseInt(startYear), parseInt(startMonth)-1, parseInt(startDay),0,0,0);

       var endYear = this.myDate2.slice(0,4);
       var endMonth = this.myDate2.slice(5,7);
       var endDay = this.myDate2.slice(8,10);

       var endDate = new Date(parseInt(endYear), parseInt(endMonth)-1, parseInt(endDay),0,0,0);

       var remaining = Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ) /(1000 * 60 * 60 * 24));
       console.log(remaining);
       
       var eligibilityStartDate = startYear+ '/' + startMonth + '/' + startDay;
       var temp_start_nepali_date = this.adbs.ad2bs(eligibilityStartDate);
       var converted_start_nepali_date = temp_start_nepali_date.en.year+ "/"+ temp_start_nepali_date.en.month + "/" + temp_start_nepali_date.en.day;
       var eligibilityEndDate = endYear+ '/' + endMonth + '/' + endDay;
       var temp_end_nepali_date = this.adbs.ad2bs(eligibilityEndDate);
       var converted_end_nepali_date = temp_end_nepali_date.en.year+ "/"+ temp_end_nepali_date.en.month + "/" + temp_end_nepali_date.en.day
       

       

       this.goal = {
         ID : timestamp,
         type: 'Saving Goal',
         goalTitle: this.savingGoalTitle.value,
         amount: this.amount.value,
         note: this.note.value,
         startDateEng: this.myDate,
         endDateEng: this.myDate2,
         startDateNep: converted_start_nepali_date,
         endDateNep: converted_end_nepali_date,
         remaining: remaining,
         status: "Incomplete"
       };

     }
     if(this.userInfo.calendar == "BS"){


       var startNepYear = this.startyear.value;
       var startNepMonth = this.startmonth.value;
       var startNepDay = this.startday.value;
       var eligibilityStartDate = this.startyear.value + '/' + this.startmonth.value + '/' + this.startday.value;
       var temp_start_eng_date = this.adbs.bs2ad(eligibilityStartDate);   
       console.log(temp_start_eng_date);
       var converted_start_eng_date = temp_start_eng_date.year+ "/"+ temp_start_eng_date.month + "/" + temp_start_eng_date.day;
       
       
       var startDate = new Date((temp_start_eng_date.year), (temp_start_eng_date.month)-1, (temp_start_eng_date.day),0,0,0);
       console.log(startDate);
       var endNepYear = this.endyear.value;
       var endNepMonth = this.endmonth.value;
       var endNepDay = this.endday.value;

       var eligibilityEndDate = this.endyear.value + '/' + this.endmonth.value + '/' + this.endday.value;
       var temp_end_eng_date = this.adbs.bs2ad(eligibilityEndDate);   
       var converted_end_eng_date = temp_end_eng_date.year+ "/"+ temp_end_eng_date.month + "/" + temp_end_eng_date.day;
       


       var endDate = new Date(parseInt(temp_end_eng_date.year), parseInt(temp_end_eng_date.month)-1, parseInt(temp_end_eng_date.day),0,0,0);
       console.log(endDate);
       var remaining = Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ) /(1000 * 60 * 60 * 24));
       console.log(remaining);

       
       

       this.goal = {
         ID : timestamp,
         type: 'Saving Goal',
         goalTitle: this.savingGoalTitle.value,
         amount: this.amount.value,
         note: this.note.value,
         startDateNep: eligibilityStartDate,
         endDateNep: eligibilityEndDate,
         startDateEng: converted_start_eng_date,
         endDateEng: converted_end_eng_date,
         remaining: remaining,
         status: "Incomplete"
       };

     }

     if(this.amount.value=="" ){
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
           message: 'New Saving Goal Added',
           duration: 1000
         });
         toast.present();
       }

       else  if(this.languageSelected == 2){
         let toast = this.toastCtrl.create({
           message: 'नयाँ बचत लक्ष्य थप् भएको छ',
           duration: 1000
         });
         toast.present();
       }

       localStorage.setItem(timestamp.toString(), JSON.stringify(this.goal));
       console.log(this.goal);

       this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
     }



   }


 }
