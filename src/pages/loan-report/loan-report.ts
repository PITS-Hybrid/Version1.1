import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,  ToastController } from 'ionic-angular';
import { AddLoanPage } from '../add-loan/add-loan';
import { Edit } from'../edit/edit';
import { LoanDescriptionPage } from '../loan-description/loan-description';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoanReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-loan-report',
 	templateUrl: 'loan-report.html',
 })
 export class LoanReportPage {
 	loan: string = "loangiven";
 	updatedloan;
 	languageSelected;
 	languageEnglish;
 	languageNepali;
 	monthName;
 	loansGiven =[];
 	abc =[];
 	loansGivenIndex = 0;
 	loansGivenIndexChecked =[];
 	loansGivenSum =0;

 	loansTaken =[];
 	loansTakenIndex = 0;
 	loansTakenSum =0;
 	message;
 	singleTransaction1;
 	statusSelected;
 

 	loanStatus ;
 	userInfo;
 	calendarSelected;
 	
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams, 
 		public toastCtrl: ToastController) {
 		var idx;
 		this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
 		this.languageSelected=this.userInfo.language;;

 		if(this.languageSelected == 1){
 			this.languageEnglish=this.languageSelected;
 			this.languageSelected = "english";
 			console.log("english selected");
 		}

 		else if(this.languageSelected == 2){
 			this.languageNepali=this.languageSelected;
 			this.languageSelected = "nepali";
 			console.log("nepali selected");
 		}
 		  if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";
   }
    else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";
   }


 		var currentMonth = (new Date().getMonth())+1;
 		var currentYear = new Date().getFullYear();
 		if(currentMonth == 1){this.monthName = "January";}
 		else if(currentMonth == 2){this.monthName = "Febraury";}
 		else if(currentMonth == 3){this.monthName = "March";}
 		else if(currentMonth == 4){this.monthName = "April";}
 		else if(currentMonth == 5){this.monthName = "May";}
 		else if(currentMonth == 6){this.monthName = "June";}
 		else if(currentMonth == 7){this.monthName = "July";}
 		else if(currentMonth == 8){this.monthName = "August";}
 		else if(currentMonth == 9){this.monthName = "September";}
 		else if(currentMonth == 10){this.monthName = "October";}
 		else if(currentMonth == 11){this.monthName = "November";}
 		else if(currentMonth == 12){this.monthName = "December";}

 		var numberOfIncomeAndExpense = 0;
 		// var sessionItem = this.userInfo.sessionid;
 		var sessionItem =12;

 		if(localStorage.length>1){


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
       for (var i = 0; i <= numberOfIncomeAndExpense; i++){
         var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));
         if(singleTransaction !=null){


           

 			if(singleTransaction.type == "LoanGiven" ){
 				this.loansGiven[this.loansGivenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
 			this.loansGivenSum = parseFloat(this.loansGiven[this.loansGivenIndex].amount)+this.loansGivenSum;
 			this.loansGivenIndex++;
	

 		}

 		console.log(this.loansGiven);




 		if(singleTransaction.type == "LoanTaken" ){
 			this.loansTaken[this.loansTakenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
 			this.loansTakenSum = parseFloat(this.loansTaken[this.loansTakenIndex].amount)+this.loansTakenSum;
 			this.loansTakenIndex++;

 		}



 	

 }

}


console.log(this.loansTakenIndex);
 if(this.loansTakenIndex == 0){
 	if(this.languageSelected == 1){
 		this.message = 'Could not find any income, Please add income first';
 	}
 	else if(this.languageSelected == 2){
 		this.message = 'आम्दानि भेटीएन,कृपया पहिला आम्दानिको विवरण थप्नुहोस';
 	}

 }
 else{  

 	if(this.languageSelected == 1){
 		this.message = 'No. of Incomes : ' + this.loansGivenIndex;
 	}

 	else  if(this.languageSelected == 2){
 		this.message = 'कुल आम्दानि संख्या:' + this.loansGivenIndex;
 	}

 }

}
}

}




ionViewDidLoad() {
	
	console.log('ionViewDidLoad LoanReportPage');

}

loanGiven(){ 	
	// let Modal = this.modalCtrl.create(AddLoanPage, {'loanType' : "Loan Given"});
	// Modal.present();
	this.navCtrl.push(AddLoanPage, {'loanType': "Loan Given"}, {animate: true, direction: 'forward'});

}

loanTaken(){
	// let Modal = this.modalCtrl.create(AddLoanPage, {'loanType' : "Loan Taken"}, {showBackdrop: true, enableBackdropDismiss: true});
	// Modal.present();
	this.navCtrl.push(AddLoanPage, {'loanType': "Loan Taken"}, {animate: true, direction: 'forward'});
}



editItem(ID){
	this.navCtrl.push(Edit, {'id': ID}, {animate: true, direction: 'forward'})

}

deleteItem(ID){
	window.localStorage.removeItem(ID);
	if(this.languageSelected == 1){
		let toast = this.toastCtrl.create({
			message: 'Loan has been deleted',
			duration: 2000
		});
		toast.present();
	}

	else if(this.languageSelected == 2){
		let toast = this.toastCtrl.create({
			message: 'loan डिलिट भयो ।',
			duration: 2000
		});
		toast.present();
	}
	this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

}



loanInformation(info){
// console.log(info);
// 	let Modal = this.modalCtrl.create(LoanDescriptionPage, {'LOAN' : info});
// 	Modal.present();
		this.navCtrl.push(LoanDescriptionPage,{'LOAN' : info}, {animate: true, direction: 'forward'});
	
}






}
