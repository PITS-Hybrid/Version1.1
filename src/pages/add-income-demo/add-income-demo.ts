
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
declare var require: any;


@Component({
	selector: 'page-add-income-demo',
	templateUrl: 'add-income-demo.html',
})
export class AddIncomeDemoPage {

	private require;
	@ViewChild('amt') amountofIncome;
	@ViewChild('date') date;
	@ViewChild('note') note;
	@ViewChild('year') year;
	@ViewChild('month') month;
	@ViewChild('day') day;

	myDate: String = new Date().toISOString().substring(0, 10);
	endDate;
	languageSelected;



	public categoryParam;
	public nepalicategoryParam;
	public catParam;
	userID;
	userInfo;
	customflag;
	iconName;
	newIncome;
	isToggled: boolean ;
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
	eligibilityDate;
	constructor(public navCtrl: NavController, public navParams: NavParams, 
		public toastCtrl: ToastController, public alertCtrl: AlertController, private auth: AuthServiceProvider) {

		this.adbs = require("ad-bs-converter");
		this.today_date = this.adbs.ad2bs(this.res.toString());
		console.log(this.today_date);


this.nepali_date_year = this.today_date.en.year;
console.log(this.nepali_date_year);

this.current_month = parseInt(this.today_date.en.month);
console.log(this.current_month);
//parseInt(this.nepali_date_year)
for(var i=2070; i<=2076 ;i++){
	this.nep_year.push(i);

}


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

this.categoryParam = navParams.get("catName");
this.nepalicategoryParam = navParams.get("nepalicatName"); 
this.customflag = navParams.get("customflag");
console.log(this.customflag);
this.iconName = navParams.get("iconName");
console.log(this.iconName);
this.languageSelected=this.userInfo.language;


if(this.languageSelected == 1){ 
	this.catParam= navParams.get("catName");
}
else if(this.languageSelected == 2 ){
	this.catParam= navParams.get("nepalicatName");
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
}

notifyStatus(event)
{
	this.isToggled = event.checked;
}

addIncome(){




	var timestamp = new Date().getTime();

	

	



	if(this.customflag == undefined ||  this.iconName== undefined ){


		if(this.userInfo.calendar == "AD"){


			//this.temp_nepali_date = this.adbs.ad2bs(new Date(parseInt(this.myDate.slice(0,4)),parseInt(this.myDate.slice(5,7)),parseInt(this.myDate.slice(8,10))).toISOString().slice(0,10).replace(/-/g,"/").toString());
			var temp_year = (this.myDate.slice(0,4));
			var temp_month = (this.myDate.slice(5,7));
			var temp_day = 	(this.myDate.slice(8,10));
			this.eligibilityDate = temp_year+ '/' + temp_month + '/' + temp_day;
			this.temp_nepali_date = this.adbs.ad2bs(this.eligibilityDate);

			console.log(this.temp_nepali_date);

			var converted_nepali_date = this.temp_nepali_date.en.year+ "/"+ this.temp_nepali_date.en.month + "/" + this.temp_nepali_date.en.day
			console.log(converted_nepali_date);



			this.newIncome= {
				type : 'Income',
				amount : this.amountofIncome.value,
				category_name_nepali : this.nepalicategoryParam,
				category_name : this.categoryParam,
				date : this.myDate,
				ID : timestamp,
				note : this.note.value,
				userID : this.userID,
				enddate : this.endDate,
				status : this.isToggled,
				statusFlag : '0',
				nepali_date : converted_nepali_date
			};
		}


		else if (this.userInfo.calendar == "BS"){

			var nep_date = this.year.value + "/"+  this.month.value + "/" +this.day.value
			console.log(nep_date);
			this.month.value = parseInt(this.month.value)-1;
			this.day.value = parseInt(this.day.value)+1;

			this.eng_date = this.adbs.bs2ad(new Date(this.year.value,this.month.value,this.day.value).toISOString().slice(0,10).replace(/-/g,"/").toString());
			var converted_english_date = this.eng_date.year + "/"+  this.eng_date.month + "/" + this.eng_date.day



			this.newIncome= {
				type : 'Income',
				amount : this.amountofIncome.value,
				category_name_nepali : this.nepalicategoryParam,
				category_name : this.categoryParam,
				date : converted_english_date,
				ID : timestamp,
				note : this.note.value,
				userID : this.userID,
				enddate : this.endDate,
				status : this.isToggled,
				statusFlag : '0',
				nepali_date : nep_date
			};
			
		}


	}


	if(this.customflag != undefined ||  this.iconName != undefined ){

		if(this.userInfo.calendar == "AD"){
			this.temp_nepali_date = this.adbs.ad2bs(new Date(parseInt(this.myDate.slice(0,4)),parseInt(this.myDate.slice(5,7)),parseInt(this.myDate.slice(8,10))).toISOString().slice(0,10).replace(/-/g,"/").toString());
			console.log(this.temp_nepali_date);

			var converted_nepali_date = this.temp_nepali_date.en.year+ "/"+ this.temp_nepali_date.en.month + "/" + this.temp_nepali_date.en.day
			console.log(converted_nepali_date);

			this.newIncome= {

				type : 'Income',
				amount : this.amountofIncome.value,
				category_name_nepali : this.nepalicategoryParam,
				category_name : this.categoryParam,
				date : this.myDate,
				ID : timestamp,
				note : this.note.value,
				userID : this.userID,
				enddate : this.endDate,
				icon : this.iconName,
				status : this.isToggled,
				statusFlag : '0',
				nepali_date : converted_nepali_date

			};
		}

		else if (this.userInfo.calendar == "BS"){

			var nep_date = this.year.value + "/"+  this.month.value + "/" +this.day.value
			console.log(nep_date);
			this.month.value = parseInt(this.month.value)-1;
			this.day.value = parseInt(this.day.value)+1;

			this.eng_date = this.adbs.bs2ad(new Date(this.year.value,this.month.value,this.day.value).toISOString().slice(0,10).replace(/-/g,"/").toString());
			var converted_english_date = this.eng_date.year + "/"+  this.eng_date.month + "/" + this.eng_date.day

			this.newIncome= {

				type : 'Income',
				amount : this.amountofIncome.value,
				category_name_nepali : this.nepalicategoryParam,
				category_name : this.categoryParam,
				date : converted_english_date,
				ID : timestamp,
				note : this.note.value,
				userID : this.userID,
				enddate : this.endDate,
				icon : this.iconName,
				status : this.isToggled,
				statusFlag : '0',
				nepali_date : nep_date

			};


		}



	}




	if(this.amountofIncome.value=="" || this.userInfo.calendar == "AD" && this.myDate==undefined ||  this.userInfo.calendar == "BS" && nep_date==undefined){            
		if(this.languageSelected == "1"){
			let toast = this.toastCtrl.create({
				message: 'Please fill in the missing fields',
				duration: 1000
			});
			toast.present();
		}
		else  if(this.languageSelected == "2"){
			let toast = this.toastCtrl.create({
				message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
				duration: 1000
			});
			toast.present();
		}
	}
	







	if(this.isToggled == true && this.endDate == undefined){
		if(this.languageSelected == "1"){
			let toast = this.toastCtrl.create({
				message: 'Please fill in the missing fields',
				duration: 1000
			});
			toast.present();
		}
		else  if(this.languageSelected == "2"){
			let toast = this.toastCtrl.create({
				message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
				duration: 1000
			});
			toast.present();
		}
	}

	else{
		if(this.languageSelected == "1"){
			let toast = this.toastCtrl.create({
				message: 'New Income Added',
				duration: 1000
			});
			toast.present();
		}
		else  if(this.languageSelected == "2"){
			let toast = this.toastCtrl.create({
				message: 'नयाँ आम्दनी थप् भएको छ',
				duration: 1000
			});
			toast.present();
		}
		localStorage.setItem(timestamp.toString(), JSON.stringify(this.newIncome));
		console.log(this.newIncome);
		this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
	}


}


}


