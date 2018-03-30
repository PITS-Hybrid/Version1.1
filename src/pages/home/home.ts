import { Component, ViewChild } from '@angular/core';
//import { Chart } from 'chart.js';

import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController, ToastController } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
import { AddIncomePage } from '../add-income/add-income';
import { AddIncomeDemoPage } from '../add-income-demo/add-income-demo';
import { AddExpensePage } from '../add-expense/add-expense';
import { ProfilePage } from '../profile/profile';
import { AlertController } from 'ionic-angular';
import { IncomeReportPage } from '../income-report/income-report';
import { ExpenseReportPage } from '../expense-report/expense-report';
import { Edit } from '../edit/edit';
import { SignInPage } from'../sign-in/sign-in';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http } from '@angular/http';
import { Network } from '@ionic-native/network';
import { LoanReportPage } from '../loan-report/loan-report';
import { SavingReportPage } from '../saving-report/saving-report';
declare var require: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  abc;
  
 //@ViewChild('doughnutCanvas') doughnutCanvas;

 //doughnutChart: any;

 incomeexpense: string = "income";
 isAndroid: boolean = false;

 incomes = [];
 incomeSum = 0;
 incomeIndex = 0;

 expenses = [];
 expenseSum = 0;
 expenseIndex = 0;
 monthName;

 loansGiven =[];
 loansGivenIndex = 0;
 loansGivenSum = 0;

 loansTaken =[];
 loansTakenIndex = 0;
 loansTakenSum = 0;

 saving = [];
 savingSum = 0;
 savingIndex = 0;

 loanBalance =0;

 expensesTitle =[];
 expenseRupeesAmount=[];
 incomeTitle;
 incomeRupeesAmount;


 languageSelected;
 languageEnglish;
 languageNepali;
 defaultLanguageSelected;
 defaultUserType;
 localStorageUserTypeSelected;
 localStorageLanguageSelected;
 username;
 message;

 userInfo;
 balance;

 repeatincomes = [];
 repeatTransactionDay = [];
 repeatincomeIndex = 0;
 repeatexpense = [];
 repeatexpenseIndex = 0;
 newIncome;
 repeatMonth;
 repeatMonthExpense;
 originalIncome;
 originalExpense;
 newExpense;
 adbs;
 today_date;
 current_nepali_month;
 current_nepali_year;
 myDate: String = new Date().toISOString().substring(0, 10);

 res: String = new Date().toISOString().slice(0,10).replace(/-/g,"/");
 calendarSelected;
 constructor(public navParams: NavParams, public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController, 
   public toastCtrl: ToastController, public alertCtrl: AlertController,
   private auth: AuthServiceProvider, public http: Http, private network: Network) {


   this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
   


   
   if(this.userInfo == undefined ){
     this.navCtrl.setRoot(SignInPage);
   }
   else{

     //here undefined due to api
     //var sessionItem = this.userInfo.sessionid;
     var sessionItem = 12;
     console.log(sessionItem);
     this.localStorageLanguageSelected = this.userInfo.language;
     this.localStorageUserTypeSelected = this.userInfo.usertype;
     if(this.localStorageLanguageSelected == "" || this.localStorageUserTypeSelected == ""){

       this.auth.getUser(sessionItem).subscribe((data) => {

         this.defaultUserType = data[0].info.userType;
         this.localStorageUserTypeSelected = this.defaultUserType;
         



         if(data[0].info.language == "English"){
           this.defaultLanguageSelected = 1;
         }
         else if (data[0].info.language == "Nepali"){
           this.defaultLanguageSelected = 2;
         }
         this.localStorageLanguageSelected = this.defaultLanguageSelected;


         this.userInfo= {
           type : this.userInfo.type,
           usertype :  this.localStorageUserTypeSelected,
           sessionid : this.userInfo.sessionid,
           language :   this.localStorageLanguageSelected 
         };

         localStorage.setItem('userInfo', JSON.stringify(this.userInfo));

         console.log(this.userInfo);

       });

       

     }
     else{
       console.log('usertype and language are not undefined');
     }


     this.adbs = require("ad-bs-converter");
   this.today_date = this.adbs.ad2bs(this.res.toString());
  

   this.current_nepali_month = parseInt(this.today_date.en.month)
   
   this.current_nepali_year = parseInt(this.today_date.en.year)
   
   if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";
   }
    else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";
   }



     this.languageSelected=this.userInfo.language;

     if(this.languageSelected == 1){
       this.languageEnglish=this.languageSelected;
       this.languageSelected = "english";

     }

     else if(this.languageSelected == 2){
       this.languageNepali=this.languageSelected;
       this.languageSelected = "nepali";

     }

     this.isAndroid = platform.is('android');

     window.localStorage.removeItem('ionic_labmenu');
     window.localStorage.removeItem('ionic_lastdevices');
     window.localStorage.removeItem('ionic_viewpop');
     var currentDay =  (new Date().getDate());
     var currentMonth = (new Date().getMonth())+1;
     var currentYear = new Date().getFullYear();

     if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";
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
   }
   else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";
    if(this.current_nepali_month == 1){this.monthName = "Baisakh";}
     else if(this.current_nepali_month == 2){this.monthName = "Jestha";}
     else if(this.current_nepali_month == 3){this.monthName = "Ashadh";}
     else if(this.current_nepali_month == 4){this.monthName = "Shrawan";}
     else if(this.current_nepali_month == 5){this.monthName = "Bhadra";}
     else if(this.current_nepali_month == 6){this.monthName = "Ashwin";}
     else if(this.current_nepali_month == 7){this.monthName = "Kartik";}
     else if(this.current_nepali_month == 8){this.monthName = "Mangsir";}
     else if(this.current_nepali_month == 9){this.monthName = "Poush";}
     else if(this.current_nepali_month == 10){this.monthName = "Magh";}
     else if(this.current_nepali_month == 11){this.monthName = "Falgun";}
     else if(this.current_nepali_month == 12){this.monthName = "Chaitra";}


   }
     var numberOfIncomeAndExpense = 0;
    
     if(localStorage.length >= 1  ){

       if(sessionItem != undefined ){
        

         for(var i=0; i<= numberOfIncomeAndExpense ; i++){
           var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

           if(singleTransaction !=undefined){
            //   console.log(singleTransaction);
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

         if(this.userInfo.calendar == "AD"){
           if(singleTransaction.date != undefined ){
             

            
               var transactionDate = singleTransaction.date;   
             var transactionYear = parseInt(transactionDate.slice(0,4));
             var transactionMonth = parseInt(transactionDate.slice(5,7));

             if(singleTransaction.type == "Income" && transactionYear == currentYear && transactionMonth == currentMonth){
               this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
               this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
               this.incomeIndex++;

             }
             if(singleTransaction.type == "Expense" && transactionYear == currentYear && transactionMonth == currentMonth){
               this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
               this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
               this.expenseIndex++;
             }
           }
            }

             if(this.userInfo.calendar == "BS"){
               if(singleTransaction.nepali_date != undefined ){
             var transactionDate = singleTransaction.nepali_date; 
            
             var transactionYear = parseInt(transactionDate.slice(0,4));
            
             var transactionMonth = parseInt(transactionDate.slice(5,7));
            

             if(singleTransaction.type == "Income" && transactionYear == this.current_nepali_year && transactionMonth == this.current_nepali_month){
               this.incomes[this.incomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
               this.incomeSum = parseFloat(this.incomes[this.incomeIndex].amount)+this.incomeSum;
               this.incomeIndex++;

             }
             if(singleTransaction.type == "Expense" && transactionYear == this.current_nepali_year && transactionMonth == this.current_nepali_month){
               this.expenses[this.expenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
               this.expenseSum = parseFloat(this.expenses[this.expenseIndex].amount)+this.expenseSum;
               this.expenseIndex++;
             }
           }

         }



          

           if(singleTransaction.type == "Income" && singleTransaction.status == true){
             this.repeatincomes[this.repeatincomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
             this.repeatincomeIndex++;
           }
           if(singleTransaction.type == "Expense" && singleTransaction.status == true){
             this.repeatexpense[this.repeatexpenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
             this.repeatexpenseIndex++;
           }
     



           if(singleTransaction.type == "LoanGiven"){
             this.loansGiven[this.loansGivenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
             if(this.loansGiven[this.loansGivenIndex].status == true){
               this.loansGivenSum = this.round(parseFloat(this.loansGiven[this.loansGivenIndex].totalinterest)+this.loansGivenSum);
             }
             else if (this.loansGiven[this.loansGivenIndex].status == false || this.loansGiven[this.loansGivenIndex].status == ""){
               this.loansGivenSum = this.round(parseFloat(this.loansGiven[this.loansGivenIndex].amount)-this.loansGivenSum);
             }
             this.loansGivenIndex++;
           }

           if(singleTransaction.type == "LoanTaken"){
             this.loansTaken[this.loansTakenIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
             if(this.loansTaken[this.loansTakenIndex].status == true){
               this.loansTakenSum = this.round(parseFloat(this.loansTaken[this.loansTakenIndex].totalpayment)-this.loansTakenSum);
             }
             else if (this.loansTaken[this.loansTakenIndex].status == false || this.loansTaken[this.loansTakenIndex].status == ""){
               this.loansTakenSum = this.round(parseFloat(this.loansTaken[this.loansTakenIndex].amount)+this.loansTakenSum);
             }
             this.loansTakenIndex++;
           }
      //console.log(this.loansGivenSum);
      //console.log(this.loansTakenSum);
      this.loanBalance =  this.round( this.loanBalance - this.loansGivenSum);
      this.loanBalance =  this.round(this.loanBalance + this.loansTakenSum); 
      

      if(singleTransaction.type == "Saving" ){
        this.saving[this.savingIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.savingSum = parseFloat(this.saving[this.savingIndex].amount)+this.savingSum;
        this.savingIndex++;
      }
      this.balance =  this.round(this.incomeSum - this.expenseSum - this.loanBalance + this.savingSum);   
    }
  }




  for( var j =0 ;j<this.repeatincomes.length ; j++) {
    this.repeatMonth =(parseInt(this.repeatincomes[j].date.slice(5,7)) +1) ;
    
    if(this.repeatMonth == 13){
      this.repeatMonth = 1;
    }

    if ( currentDay >= this.repeatincomes[j].date.slice(8,10)  && currentMonth == this.repeatMonth  ){
      if(this.repeatincomes[j].statusFlag == 0){

        var timestamp = new Date().getTime();
        if(this.repeatincomes[j].icon == undefined ){

          if(this.repeatincomes[j].enddate == this.myDate || currentMonth >= (this.repeatincomes[j].enddate.slice(5,7))   &&
            currentDay  >= (this.repeatincomes[j].enddate.slice(8,10)) ||  currentYear >= (this.repeatincomes[j].enddate.slice(0,4))  ){
            this.originalIncome= {
              type : 'Income',
              amount : this.repeatincomes[j].amount,
              category_name_nepali : this.repeatincomes[j].category_name_nepali,
              category_name :this.repeatincomes[j].category_name,
              date : this.repeatincomes[j].date,
              ID : this.repeatincomes[j].ID,
              note : this.repeatincomes[j].note,
              userID : this.repeatincomes[j].userID,
              status : this.repeatincomes[j].status,
              statusFlag : '1',
              enddate : this.repeatincomes[j].enddate
            };
            window.localStorage.removeItem(this.repeatincomes[j].ID);
            window.localStorage.setItem( this.originalIncome.ID, JSON.stringify(this.originalIncome));
          }
          this.newIncome= {
            type : 'Income',
            amount : this.repeatincomes[j].amount,
            category_name_nepali : this.repeatincomes[j].category_name_nepali,
            category_name :this.repeatincomes[j].category_name,
            date : this.myDate,
            ID : timestamp,
            note : this.repeatincomes[j].note,
            userID : this.repeatincomes[j].userID,
            status : this.repeatincomes[j].status,
            statusFlag : '0',
            enddate : this.repeatincomes[j].enddate
          };
        }
        else{
          this.newIncome= {
            type : 'Income',
            amount : this.repeatincomes[j].amount,
            category_name_nepali : this.repeatincomes[j].category_name_nepali,
            category_name :this.repeatincomes[j].category_name,
            date : this.myDate,
            ID : timestamp,
            note : this.repeatincomes[j].note,
            userID : this.repeatincomes[j].userID,
            status : this.repeatincomes[j].status,
            icon : this.repeatincomes[j].icon,
            statusFlag : '0',
            enddate : this.repeatincomes[j].enddate
          };
        }

        this.originalIncome= {
          type : 'Income',
          amount : this.repeatincomes[j].amount,
          category_name_nepali : this.repeatincomes[j].category_name_nepali,
          category_name :this.repeatincomes[j].category_name,
          date : this.repeatincomes[j].date,
          ID : this.repeatincomes[j].ID,
          note : this.repeatincomes[j].note,
          userID : this.repeatincomes[j].userID,
          status : this.repeatincomes[j].status,
          statusFlag : '1',
          enddate : this.repeatincomes[j].enddate
        };
        window.localStorage.removeItem(this.repeatincomes[j].ID);
        window.localStorage.setItem( this.originalIncome.ID, JSON.stringify(this.originalIncome));
        localStorage.setItem(timestamp.toString(), JSON.stringify(this.newIncome));

      }
      else{}
    }
  

}
for( var j =0 ;j<this.repeatexpense.length ; j++) {
  this.repeatMonthExpense =(parseInt(this.repeatexpense[j].date.slice(5,7)) +1) ;

  if(this.repeatMonthExpense == 13){
    this.repeatMonthExpense = 1;
  }

  if ( currentDay >= this.repeatexpense[j].date.slice(8,10)  && currentMonth == this.repeatMonthExpense  ){
    if(this.repeatexpense[j].statusFlag == 0){

      var timestamp = new Date().getTime();
      if(this.repeatexpense[j].icon == undefined ){

        if(this.repeatexpense[j].enddate == this.myDate || currentMonth >= (this.repeatexpense[j].enddate.slice(5,7))   &&
          currentDay  >= (this.repeatexpense[j].enddate.slice(8,10)) ||  currentYear >= (this.repeatexpense[j].enddate.slice(0,4))  ){
          this.originalExpense= {
            type : 'Expense',
            amount : this.repeatexpense[j].amount,
            category_name_nepali : this.repeatexpense[j].category_name_nepali,
            category_name :this.repeatexpense[j].category_name,
            date : this.repeatexpense[j].date,
            ID : this.repeatexpense[j].ID,
            note : this.repeatexpense[j].note,
            userID : this.repeatexpense[j].userID,
            status : this.repeatexpense[j].status,
            statusFlag : '1',
            enddate : this.repeatexpense[j].enddate
          };
          window.localStorage.removeItem(this.repeatexpense[j].ID);
          window.localStorage.setItem( this.originalExpense.ID, JSON.stringify(this.originalExpense));
        }
        this.newExpense= {
          type : 'Expense',
          amount : this.repeatexpense[j].amount,
          category_name_nepali : this.repeatexpense[j].category_name_nepali,
          category_name :this.repeatexpense[j].category_name,
          date : this.myDate,
          ID : timestamp,
          note : this.repeatexpense[j].note,
          userID : this.repeatexpense[j].userID,
          status : this.repeatexpense[j].status,
          statusFlag : '0',
          enddate : this.repeatexpense[j].enddate
        };
      }
      else{
        this.newExpense= {
          type : 'Expense',
          amount : this.repeatexpense[j].amount,
          category_name_nepali : this.repeatexpense[j].category_name_nepali,
          category_name :this.repeatexpense[j].category_name,
          date : this.myDate,
          ID : timestamp,
          note : this.repeatexpense[j].note,
          userID : this.repeatexpense[j].userID,
          status : this.repeatexpense[j].status,
          icon : this.repeatexpense[j].icon,
          statusFlag : '0',
          enddate : this.repeatexpense[j].enddate
        };
      }

      this.originalExpense= {
        type : 'Expense',
        amount : this.repeatexpense[j].amount,
        category_name_nepali : this.repeatexpense[j].category_name_nepali,
        category_name :this.repeatexpense[j].category_name,
        date : this.repeatexpense[j].date,
        ID : this.repeatexpense[j].ID,
        note : this.repeatexpense[j].note,
        userID : this.repeatexpense[j].userID,
        status : this.repeatexpense[j].status,
        statusFlag : '1',
        enddate : this.repeatexpense[j].enddate
      };
      window.localStorage.removeItem(this.repeatexpense[j].ID);
      window.localStorage.setItem( this.originalExpense.ID, JSON.stringify(this.originalExpense));
      localStorage.setItem(timestamp.toString(), JSON.stringify(this.newExpense));

    }
    else{}
  }


}







}
}


}
}







round(x) {
  return Math.round(x*100)/100;
}

ionViewDidLeave(){

}


displayNetworkUpdate(connectionState: string){
  let networkType = this.network.type;
  // this.toastCtrl.create({
  //   message: `You are now ${connectionState}`,
  //   duration: 3000
  // }).present();
}

ionViewDidLoad() {
  this.network.onConnect().subscribe(data => {
    this.displayNetworkUpdate(data.type);
    this.auth.addIncome(this.incomes).subscribe();
    this.auth.addExpense(this.expenses).subscribe();
  }, error => console.error(error));

  this.network.onDisconnect().subscribe(data => {
    this.displayNetworkUpdate(data.type);
  }, error => console.error(error));
} 



  /*ionViewDidLoad() {
 this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["आम्दनी ", "खर्च"],
                datasets: [{
                    label: 'Rs. ',
                    data: [this.incomeSum, this.expenseSum],
                    backgroundColor: [
                        "#85bb65",
                        "#ff3b30"
                    ],
                    hoverBackgroundColor: [
                        "#85bb65",
                        "#ff3b30"
                    ]
                }]
            }
 
        });
      }*/


      editItem(ID){
        this.navCtrl.push(Edit, {'id': ID}, {animate: true, direction: 'forward'})

      }

      deleteItem(ID){
        window.localStorage.removeItem(ID);
        if(this.languageSelected == 1){
          let toast = this.toastCtrl.create({
            message: 'Expense has been deleted',
            duration: 2000
          });
          toast.present();
        }
        else if(this.languageSelected == 1){
          let toast = this.toastCtrl.create({
            message: 'खर्च डिलिट भयो ।',
            duration: 2000
          });
          toast.present();
        }

        this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

      }



      

      loadProfile(){
           // this.navCtrl.push(ProfilePage, {'localStorageUserTypeSelected': this.localStorageUserTypeSelected}, {animate: true, direction: 'forward'});
           this.navCtrl.push(ProfilePage);
         }
         loadAddIncome(){
           // this.navCtrl.push(AddIncomePage, {'localStorageUserTypeSelected': this.localStorageUserTypeSelected}, {animate: true, direction: 'forward'});

           this.navCtrl.push(AddIncomePage);
         }
         loadIncomeReport(){
           this.navCtrl.push(IncomeReportPage);
         }
         loadExpenseReport(){
           this.navCtrl.push(ExpenseReportPage);
         }
         loadAddExpense(){
          // this.navCtrl.push(AddExpensePage, {'localStorageUserTypeSelected': this.localStorageUserTypeSelected}, {animate: true, direction: 'forward'});

          this.navCtrl.push(AddExpensePage);
        }

        loadLoanReport(){
          this.navCtrl.push(LoanReportPage);
        }

        loadSavingReport(){
          this.navCtrl.push(SavingReportPage);
        }

      }








