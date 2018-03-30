import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DaterangeExpenseReportPage } from '../daterange-expense-report/daterange-expense-report';
import { ToastController } from 'ionic-angular';
declare var require: any;
/**
 * Generated class for the DaterangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-daterange-expense',
  templateUrl: 'daterange-expense.html',
})
export class DaterangeExpensePage {
	  @ViewChild('startyear') startyear;
   @ViewChild('startmonth') startmonth;
   @ViewChild('startday') startday;
   @ViewChild('endyear') endyear;
   @ViewChild('endmonth') endmonth;
   @ViewChild('endday') endday;


   myStartDate: String ;
   myEndDate: String ;
   languageSelected;
   userInfo;
   calendarSelected;
   nep_year = []
   startdays=[];
   enddays=[];

   today_date;
   nepali_date_year;

   total_month = [];
   current_month;
   change_Date_1;
   adbs
   res: String = new Date().toISOString().slice(0,10).replace(/-/g,"/");
   array =[];
   eng_date;

   temp_nepali_date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
     this.adbs = require("ad-bs-converter");
   this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
     this.languageSelected=this.userInfo.language;
     if(this.userInfo.calendar == "AD"){
       this.calendarSelected = "AD";
     }
     else if(this.userInfo.calendar == "BS"){
       this.calendarSelected = "BS";
     }
     for(var i=2070; i<=2076 ;i++){
       this.nep_year.push(i);

     }

     for(var i=1; i<=12 ;i++){
       this.total_month.push(i);

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



setRange(){
	
 

   

 if(this.userInfo.calendar == "AD"){
       if(this.myStartDate == undefined || this.myEndDate==undefined){
         if(this.languageSelected == 1){

           let toast = this.toastCtrl.create({
             message: 'Please fill in all the details',
             duration: 1000
           });
           toast.present();
         }

         else if(this.languageSelected == 2){

           let toast = this.toastCtrl.create({
             message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
             duration: 1000
           });
           toast.present();
         }
       }


       else{





         this.navCtrl.push(DaterangeExpenseReportPage, {'startDateValue': this.myStartDate,
           'endDateValue' : this.myEndDate
         }, {animate: true, direction: 'forward'})


       }

     }

     else if (this.userInfo.calendar == "BS"){

       if(this.startyear.value == undefined || this.startmonth.value ==undefined || this.startday.value == undefined
         || this.endyear.value == undefined || this.endmonth.value == undefined || this.endday.value == undefined){
         if(this.languageSelected == 1){

           let toast = this.toastCtrl.create({
             message: 'Please fill in all the details',
             duration: 1000
           });
           toast.present();
         }

         else if(this.languageSelected == 2){

           let toast = this.toastCtrl.create({
             message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
             duration: 1000
           });
           toast.present();
         }
       }

       else{

         var eligibilityStartDate = this.startyear.value+ '/' + this.startmonth.value + '/' + this.startday.value;
         var temp_start_eng_date = this.adbs.bs2ad(eligibilityStartDate);
         var converted_start_eng_date = temp_start_eng_date.year+ "/"+ temp_start_eng_date.month + "/" + temp_start_eng_date.day;
         console.log(converted_start_eng_date);
         var eligibilityEndDate = this.endyear.value+ '/' + this.endmonth.value + '/' + this.endday.value;
         var temp_end_eng_date = this.adbs.bs2ad(eligibilityEndDate);
         var converted_end_eng_date = temp_end_eng_date.year+ "/"+ temp_end_eng_date.month + "/" + temp_end_eng_date.day;
         console.log(converted_end_eng_date);
         this.navCtrl.push(DaterangeExpenseReportPage, {'startDateValue': converted_start_eng_date,
           'endDateValue' : converted_end_eng_date, 
           'nepStartDate': eligibilityStartDate, 'nepEndDate' : eligibilityEndDate
         }, {animate: true, direction: 'forward'})


       }

     }


   }
}
