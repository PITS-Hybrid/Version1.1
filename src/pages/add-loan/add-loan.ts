import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController ,ToastController } from 'ionic-angular';
import { LoanReportPage } from '../loan-report/loan-report';
import { HomePage } from '../home/home';
declare var require: any;

@IonicPage()
@Component({
  selector: 'page-add-loan',
  templateUrl: 'add-loan.html',
})
export class AddLoanPage {
  @ViewChild('amt') Amount;
  @ViewChild('date') Date;
  @ViewChild('nameofperson') NameOfPerson;
  @ViewChild('note') Note;
  @ViewChild('interest') Interest;
  @ViewChild('monthlypayment') monthlypayment;
  @ViewChild('totalpayment') totalpayment;
  @ViewChild('totalinterest') totalinterest;
  @ViewChild('startyear') startyear;
  @ViewChild('startmonth') startmonth;
  @ViewChild('startday') startday;
  @ViewChild('endyear') endyear;
  @ViewChild('endmonth') endmonth;
  @ViewChild('endday') endday;
  startDate;
  endDate;
  paymentDate ;
  loanType;
  languageSelected;
  userID;
  differenceInYear;
  loan;
  userInfo;
  adbs;
  calendarSelected;

  days=[];

  today_date;
  nepali_date_year;
  nep_year = []
  total_month = [];
  current_month;
  change_Date_1;
  temp_nepali_date;
  startdays=[];
  enddays=[];
  eligibilityStartDate;
  eligibilityEndDate;
  converted_start_eng_date;
  converted_end_eng_date;
  converted_start_nepali_date;
  converted_end_nepali_date
  EndYear :string = "Year";
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController,
    public toastCtrl: ToastController) {
    this.adbs = require("ad-bs-converter");
    this.loanType = navParams.get("loanType");
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.languageSelected=this.userInfo.language;
    this.userID =this.userInfo.sessionid;
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


  dismiss(){
    this.viewCtrl.dismiss();
  }

  startDateChange(){
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

  endNepDateChange(){
    if(this.startday.value != undefined){
      this.eligibilityStartDate = this.startyear.value + '/' + this.startmonth.value + '/' + this.startday.value;
      var temp_start_eng_date = this.adbs.bs2ad(this.eligibilityStartDate);   
      console.log(temp_start_eng_date);
      this.converted_start_eng_date = temp_start_eng_date.year+ "/"+ temp_start_eng_date.month + "/" + temp_start_eng_date.day;
      this.eligibilityEndDate = this.endyear.value + '/' + this.endmonth.value + '/' + this.endday.value;
      var temp_end_eng_date = this.adbs.bs2ad(this.eligibilityEndDate);   
      this.converted_end_eng_date = temp_end_eng_date.year+ "/"+ temp_end_eng_date.month + "/" + temp_end_eng_date.day;
      var startDate = Date.parse(this.converted_start_eng_date);
      var endDate = Date.parse(this.converted_end_eng_date);
      var timeDiff = endDate - startDate;
      var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.differenceInYear=this.round (daysDiff / 365);
    }
  }
  endDateChange(){
    var temp_start_nepali_date = this.adbs.ad2bs(this.startDate);
    this.converted_start_nepali_date = temp_start_nepali_date.en.year+ "/"+ temp_start_nepali_date.en.month + "/" + temp_start_nepali_date.en.day;
    var temp_end_nepali_date = this.adbs.ad2bs(this.endDate);
    this.converted_end_nepali_date = temp_end_nepali_date.en.year+ "/"+ temp_end_nepali_date.en.month + "/" + temp_end_nepali_date.en.day
    var startDate = Date.parse(this.startDate);
    var endDate = Date.parse(this.endDate);
    var timeDiff = endDate - startDate;
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    this.differenceInYear=this.round (daysDiff / 365);
  }

  round(x) {
    return Math.round(x*100)/100;
  }

  calculate(){
    var principal = this.Amount.value;
    var interest = this.Interest.value / 100 / 12;
    var payments = this.differenceInYear *12;
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);
    if (!isNaN(monthly) && 
      (monthly != Number.POSITIVE_INFINITY) &&
      (monthly != Number.NEGATIVE_INFINITY)) {
      this.monthlypayment.value = this.round(monthly);
    this.totalpayment.value = this.round(monthly * payments);
    this.totalinterest.value = 
    this.round((monthly * payments) - principal);
  }
    else {
      this.monthlypayment.value = "";
      this.totalpayment.value = "";
      this.totalinterest.value = "";
    }
  }



  addLoan(){
    var timestamp = new Date().getTime();
    if(this.loanType == "Loan Given"){
      if(this.userInfo.calendar == "AD"){
        this.loan= {
          type : 'LoanGiven',
          amount : this.Amount.value,
          startdate : this.startDate,
          enddate : this.endDate,
          interest : this.Interest.value,
          nameofperson : this.NameOfPerson.value,
          monthlypayment : this.monthlypayment.value,
          totalpayment : this.totalpayment.value,
          totalinterest : this.totalinterest.value,
          note : this.Note.value,
          ID : timestamp,
          userID : this.userID,
          status : "",
          nepali_startdate: this.converted_start_nepali_date,
          nepali_enddate :this.converted_end_nepali_date
        };
      }
      if(this.userInfo.calendar == "BS"){
        this.loan= {
          type : 'LoanGiven',
          amount : this.Amount.value,
          startdate : this.converted_start_eng_date,
          enddate : this.converted_end_eng_date,
          interest : this.Interest.value,
          nameofperson : this.NameOfPerson.value,
          monthlypayment : this.monthlypayment.value,
          totalpayment : this.totalpayment.value,
          totalinterest : this.totalinterest.value,
          note : this.Note.value,
          ID : timestamp,
          userID : this.userID,
          status : "",
          nepali_startdate: this.eligibilityStartDate,
          nepali_enddate : this.eligibilityEndDate
        };
      }
    }
    else if (this.loanType == "Loan Taken"){
      if(this.userInfo.calendar == "AD"){
        this.loan= {
          type : 'LoanTaken',
          amount : this.Amount.value,
          startdate : this.startDate,
          enddate : this.endDate,
          interest : this.Interest.value,
          nameofperson : this.NameOfPerson.value,
          monthlypayment : this.monthlypayment.value,
          totalpayment : this.totalpayment.value,
          totalinterest : this.totalinterest.value,
          note : this.Note.value,
          ID : timestamp,
          userID : this.userID,
          status : "",
          nepali_startdate: this.converted_start_nepali_date,
          nepali_enddate :this.converted_end_nepali_date
        };

      }
      if(this.userInfo.calendar == "BS"){
        this.loan= {
          type : 'LoanTaken',
          amount : this.Amount.value,
          startdate : this.startDate,
          enddate : this.endDate,
          interest : this.Interest.value,
          nameofperson : this.NameOfPerson.value,
          monthlypayment : this.monthlypayment.value,
          totalpayment : this.totalpayment.value,
          totalinterest : this.totalinterest.value,
          note : this.Note.value,
          ID : timestamp,
          userID : this.userID,
          status : "",
          nepali_startdate: this.eligibilityStartDate,
          nepali_enddate :this.eligibilityEndDate
        };

      }

    }
    if( this.monthlypayment.value == ""){
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
          message: 'Loan Added',
          duration: 1000
        });
        toast.present();
      }
      else  if(this.languageSelected == 2){
        let toast = this.toastCtrl.create({
          message: 'नयाँ ऋण थप् भएको छ',
          duration: 1000
        });
        toast.present();
      }
      localStorage.setItem(timestamp.toString(), JSON.stringify(this.loan));
      console.log(this.loan);    
     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    }
  }
}



