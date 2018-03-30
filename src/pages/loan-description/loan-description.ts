import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { LoanReportPage } from '../loan-report/loan-report';
import { HomePage } from '../home/home';
import { Edit } from '../edit/edit';
/**
 * Generated class for the LoanDescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-loan-description',
 	templateUrl: 'loan-description.html',
 })
 export class LoanDescriptionPage {
 	loan;
 	loanStatus;
   loanStatusPlaceholder;
   loanAmount;
   loanStartDate;
   loanEndDate;
   loanNameOfPerson;
   loanNote;
   loanTotalInterest;
   loanMonthlyPayment;
   loanTotalPayment;
   updatedloan;
   loanInterestRate;
   isToggled: boolean ;
   languageSelected;
   userInfo;
   calendarSelected;
   flag=0;
   constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController,  public toastCtrl: ToastController) {
     this.loan = navParams.get("LOAN");
     console.log(this.loan);
     this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
     this.languageSelected=this.userInfo.language;;

     this.loanStatus = this.loan.status;
     if(this.loanStatus == true){
       this.loanStatusPlaceholder = "Paid";
     }
     else if(this.loanStatus == false){
       this.loanStatusPlaceholder = "Unpaid";
     }
       if(this.userInfo.calendar == "AD"){
     this.calendarSelected = "AD";
     this.loanStartDate = this.loan.startdate;
     this.loanEndDate = this.loan.enddate;
   }
    else if(this.userInfo.calendar == "BS"){
     this.calendarSelected = "BS";
       this.loanStartDate = this.loan.nepali_startdate;
     this.loanEndDate = this.loan.nepali_enddate;
   }

     console.log(this.loanStatus);
     this.loanAmount = this.loan.amount;
     
     this.loanNameOfPerson = this.loan.nameofperson;
     this.loanNote = this.loan.note;
     this.loanInterestRate = this.loan.interest;
     this.loanTotalInterest = this.loan.totalinterest;
     this.loanMonthlyPayment = this.loan.monthlypayment;
     this.loanTotalPayment = this.loan.totalpayment;



     if(this.loanStatus != undefined){
       if(this.loanStatus == true){
         this.isToggled = true;
       }
       else if (this.loanStatus == false){
         this.isToggled = false	
       }

     }

   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad LoanDescriptionPage');
   }

ionViewWillLeave(){
  if(this.flag == 1){
    this.dismiss();
    this.flag = 0;
  }

}
   
   dismiss(){
     console.log(this.updatedloan);
     this.navCtrl.setRoot(HomePage);

     if(this.languageSelected == 1){
       let toast = this.toastCtrl.create({
         message: 'Loan Information has been saved',
         duration: 1000
       });
       toast.present();
     }

     else  if(this.languageSelected == 2){
       let toast = this.toastCtrl.create({
         message: 'सफल भएको छ!',
         duration: 1000
       });
       toast.present();
     }
   }

   notifyStatus(event)
   {
     this.loanStatus = event.checked;
    
     if(this.loanStatus == true){
       this.loanStatusPlaceholder = "Paid";
     }
     else if(this.loanStatus == false){
       this.loanStatusPlaceholder = "Unpaid";
     }

this.flag =1;


     console.log(event.checked);


     var timestamp = new Date().getTime();


     this.updatedloan= {
       type : this.loan.type,
       amount : this.loan.amount,
       startdate : this.loan.startdate,
       enddate : this.loan.enddate,
       interest : this.loan.interest,
       nameofperson : this.loan.nameofperson,
       monthlypayment : this.loan.monthlypayment,
       totalpayment : this.loan.totalpayment,
       totalinterest : this.loan.totalinterest,
       note : this.loan.note,
       ID : this.loan.ID,
       userID : this.loan.userID,
       status : event.checked,
       nepali_startdate: this.loan.nepali_startdate,
       nepali_enddate : this.loan.nepali_enddate
     };
     console.log(this.loan.ID);

     localStorage.setItem(  this.loan.ID, JSON.stringify(this.updatedloan));

     console.log(this.updatedloan);


   }

   edit(){
     this.navCtrl.push(Edit, {'id': this.loan.ID}, {animate: true, direction: 'forward'})

   }


 }
