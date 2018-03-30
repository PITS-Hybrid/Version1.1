import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'edit',
  templateUrl: 'edit.html',
})
export class Edit {
	
	itemID;
	item;
  languageSelected;
  categorySelected;
  typeSelected;
  updateData;
  
  differenceInYear;
  @ViewChild('amount') Amount;
  @ViewChild('nameofperson') NameOfPerson;
  @ViewChild('interest') Interest;
  @ViewChild('monthlypayment') monthlypayment;
  @ViewChild('totalpayment') totalpayment;
  @ViewChild('totalinterest') totalinterest;
  @ViewChild('savinginstitute') savinginstitute;
  @ViewChild('incomesource') incomesource;
  userInfo;
  repeatincomes = [];
  repeatData = [];
  repeatTransactionDay = [];
  repeatincomeIndex = 0;
  isToggled: boolean ;
  repeatexpense = [];
 repeatexpenseIndex = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  	this.itemID = navParams.get('id');

  	this.item = JSON.parse(window.localStorage.getItem(this.itemID));

    this.isToggled = this.item.status;
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.languageSelected=this.userInfo.language;
    console.log(this.item);

    if(this.item.type == "LoanGiven" || this.item.type == "LoanTaken"){
      this.typeSelected = "loan";
      console.log(this.typeSelected);

      var startDate = Date.parse(this.item.startdate);
      console.log(startDate);
      var endDate = Date.parse(this.item.enddate);
      console.log(endDate);
      var timeDiff = endDate - startDate;
      var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.differenceInYear=this.round (daysDiff / 365);
       //this.Interest.value = this.item.interest;


       if(this.Amount == undefined){ 
         this.Amount= this.item.amount;
       }


     }

     else if ( this.item.type == "Saving"){
       this.typeSelected = "saving";

     }
     else{
       this.typeSelected = "notloan";

     }




     if(this.languageSelected == 1){

       this.categorySelected= this.item.category_name;

     }

     else if(this.languageSelected == 2){
       this.categorySelected= this.item.category_name_nepali;
     }

     if(localStorage.length > 1  ){
       var numberOfIncomeAndExpense = 0;
       for(var i=0; i<= numberOfIncomeAndExpense ; i++){
         var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

         if(singleTransaction !=undefined){

           if(singleTransaction.type == "Income" || singleTransaction.type == "Expense" 
             || singleTransaction.type == "LoanGiven" || singleTransaction.type == "LoanTaken"
             || singleTransaction.type == "Saving" || singleTransaction.type =="userInfo" 
             || singleTransaction.type =="NewCategoryIncome" || singleTransaction.type =="NewCategoryExpense"){
             numberOfIncomeAndExpense++;
         }


       }
     }

     console.log(numberOfIncomeAndExpense);
     for (var i = 0; i <= numberOfIncomeAndExpense; i++){
       var singleTransaction = JSON.parse(localStorage.getItem(localStorage.key(i)));

       if(singleTransaction !=null){


         if(singleTransaction.type == "Income" && singleTransaction.status == true){
           this.repeatincomes[this.repeatincomeIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
           this.repeatincomeIndex++;
         }
         if(singleTransaction.type == "Expense" && singleTransaction.status == true){
             this.repeatexpense[this.repeatexpenseIndex] = JSON.parse(localStorage.getItem(localStorage.key(i)));
             this.repeatexpenseIndex++;
           }


       }
     }
   }



 }
 round(x) {
   return Math.round(x*100)/100;
 }


 amountChange(){

   if(this.item.type == "LoanGiven" || this.item.type == "LoanTaken"){
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

edit(id, dateAdded, amount, cat_name, cat_name_nep, type, note){


  if(amount == ""){
    if(this.languageSelected == 1){
      let toast = this.toastCtrl.create({
        message: 'Please fill in the details',
        duration: 2000
      });
      toast.present();
    }
    else if(this.languageSelected == 2){
      let toast = this.toastCtrl.create({
        message: 'असफल भयो! कृपया सबै बिवरनहरु भर्नु होस्',
        duration: 2000
      });
      toast.present();
    }
  }
  else{
    if(this.item.type == "LoanGiven" || this.item.type == "LoanTaken"){
      console.log('hello');
      if(this.Interest.value == ""){
        this.Interest.value = this.item.interest;

      }
      if( this.monthlypayment.value == "" || this.totalpayment.value == ""  || this.totalinterest.value == "")
      {
        this.monthlypayment.value = this.item.monthlypayment;
        this.totalpayment.value = this.item.totalpayment;
        this.totalinterest.value = this.item.totalinterest;
      }



      this.updateData = {
        ID: id,
        userID : this.item.userID,
        type: type,
        note: note,
        amount : amount,
        startdate : this.item.startdate,
        enddate : this.item.enddate,
        interest : this.Interest.value,
        nameofperson : this.NameOfPerson.value,
        monthlypayment : this.monthlypayment.value,
        totalpayment : this.totalpayment.value,
        totalinterest : this.totalinterest.value,
        nepali_startdate: this.item.nepali_startdate,
       nepali_enddate : this.item.nepali_enddate

        

      };


    }

    if(this.item.type == "Saving"){

      if( this.savinginstitute.value == "" || this.incomesource.value == ""  )
      {
        this.savinginstitute.value = this.item.institute;
        this.incomesource.value = this.item.income_source;
        
      }

      this.updateData = {
        ID: id,
        amount: this.Amount.value,
        date: dateAdded,
        institute : this.savinginstitute.value,
        income_source : this.incomesource.value,
        note: note,
        type: type,
        userID : this.item.userID,
        nepali_date : this.item.nepali_date



      };

    }

    if ( this.item.type == "Income" ){
      if(this.Amount.value == ""){
        this.Amount.value = this.item.amount;
      }

      if(this.item.icon== undefined ){
        for( var j =0 ;j<this.repeatincomes.length ; j++){
          if(this.item.category_name == this.repeatincomes[j].category_name 
            && this.item.status == this.repeatincomes[j].status ){

            this.repeatData[j] = {
              ID:  this.repeatincomes[j].ID,
              amount: this.Amount.value,
              date: this.repeatincomes[j].date,
              category_name: this.repeatincomes[j].category_name,
              category_name_nepali: this.repeatincomes[j].category_name_nepali,
              note: this.repeatincomes[j].note,
              type: this.repeatincomes[j].type,
              userID :this.repeatincomes[j].userID,
              status : this.isToggled,
              statusFlag : this.repeatincomes[j].statusFlag,
              enddate : this.repeatincomes[j].enddate,
              nepali_date : this.repeatincomes[j].nepali_date
            };
            console.log(this.repeatincomes);
            window.localStorage.removeItem(this.repeatincomes[j].ID);
            console.log(this.repeatData);
            window.localStorage.setItem(this.repeatData[j].ID, JSON.stringify(this.repeatData[j]));

          }
        }

        this.updateData = {
          ID: id,
          amount: this.Amount.value,
          date: dateAdded,
          category_name: cat_name,
          category_name_nepali: cat_name_nep,
          note: note,
          type: type,
          userID : this.item.userID,
          status : this.isToggled,
          statusFlag : this.item.statusFlag,
          enddate : this.item.enddate,
          nepali_date : this.item.nepali_date
        };




      }

      else {

        for( var j =0 ;j<this.repeatincomes.length ; j++){

          if(this.item.category_name == this.repeatincomes[j].category_name 
            && this.item.status == this.repeatincomes[j].status ){


            this.repeatData[j] = {
              ID:  this.repeatincomes[j].ID,
              amount: this.Amount.value,
              date: this.repeatincomes[j].date,
              category_name: this.repeatincomes[j].category_name,
              category_name_nepali: this.repeatincomes[j].category_name_nepali,
              note: this.repeatincomes[j].note,
              type: this.repeatincomes[j].type,
              userID :this.repeatincomes[j].userID,
              status : this.isToggled,
              statusFlag : this.repeatincomes[j].statusFlag,
              icon : this.repeatincomes[j].icon,
              enddate : this.repeatincomes[j].enddate,
              nepali_date : this.repeatincomes[j].nepali_date
            };

            window.localStorage.removeItem(this.repeatincomes[j].ID);

            window.localStorage.setItem(this.repeatData[j].ID, JSON.stringify(this.repeatData[j]));

          }
        }

        this.updateData = {
          ID: id,
          amount: this.Amount.value,
          date: dateAdded,
          category_name: cat_name,
          category_name_nepali: cat_name_nep,
          note: note,
          type: type,
          userID : this.item.userID,
          icon : this.item.icon,
          status : this.isToggled,
          statusFlag : this.item.statusFlag,
          enddate : this.item.enddate,
          nepali_date : this.item.nepali_date

        };

      }

    }


    if (this.item.type == "Expense"){
      if(this.Amount.value == ""){
        this.Amount.value = this.item.amount;
      }

      if(this.item.icon== undefined ){
        for( var j =0 ;j<this.repeatexpense.length ; j++){
          if(this.item.category_name == this.repeatexpense[j].category_name 
            && this.item.status == this.repeatexpense[j].status ){

            this.repeatData[j] = {
              ID:  this.repeatexpense[j].ID,
              amount: this.Amount.value,
              date: this.repeatexpense[j].date,
              category_name: this.repeatexpense[j].category_name,
              category_name_nepali: this.repeatexpense[j].category_name_nepali,
              note: this.repeatexpense[j].note,
              type: this.repeatexpense[j].type,
              userID :this.repeatexpense[j].userID,
              status : this.isToggled,
              statusFlag : this.repeatexpense[j].statusFlag,
              enddate : this.repeatexpense[j].enddate,
              nepali_date : this.repeatincomes[j].nepali_date,

            };
            console.log(this.repeatexpense);
            window.localStorage.removeItem(this.repeatexpense[j].ID);
            console.log(this.repeatData);
            window.localStorage.setItem(this.repeatData[j].ID, JSON.stringify(this.repeatData[j]));

          }
        }

        this.updateData = {
          ID: id,
          amount: this.Amount.value,
          date: dateAdded,
          category_name: cat_name,
          category_name_nepali: cat_name_nep,
          note: note,
          type: type,
          userID : this.item.userID,
          status : this.isToggled,
          statusFlag : this.item.statusFlag,
          enddate : this.item.enddate,
           nepali_date : this.item.nepali_date
        };




      }

      else {

        for( var j =0 ;j<this.repeatexpense.length ; j++){

          if(this.item.category_name == this.repeatexpense[j].category_name 
            && this.item.status == this.repeatexpense[j].status ){


            this.repeatData[j] = {
              ID:  this.repeatexpense[j].ID,
              amount: this.Amount.value,
              date: this.repeatexpense[j].date,
              category_name: this.repeatexpense[j].category_name,
              category_name_nepali: this.repeatexpense[j].category_name_nepali,
              note: this.repeatexpense[j].note,
              type: this.repeatexpense[j].type,
              userID :this.repeatexpense[j].userID,
              status : this.isToggled,
              statusFlag : this.repeatexpense[j].statusFlag,
              icon : this.repeatexpense[j].icon,
              enddate : this.repeatexpense[j].enddate,
              nepali_date : this.repeatincomes[j].nepali_date
            };

            window.localStorage.removeItem(this.repeatexpense[j].ID);

            window.localStorage.setItem(this.repeatData[j].ID, JSON.stringify(this.repeatData[j]));

          }
        }

        this.updateData = {
          ID: id,
          amount: this.Amount.value,
          date: dateAdded,
          category_name: cat_name,
          category_name_nepali: cat_name_nep,
          note: note,
          type: type,
          userID : this.item.userID,
          icon : this.item.icon,
          status : this.isToggled,
          statusFlag : this.item.statusFlag,
          enddate : this.item.enddate,
            nepali_date : this.item.nepali_date

        };

      }

    }
    console.log(this.updateData);
    window.localStorage.removeItem(id);

    window.localStorage.setItem(id, JSON.stringify(this.updateData));

    let toast = this.toastCtrl.create({
      message: 'एडिट सफल भएको छ!',
      duration: 2000
    });

    toast.present();
    this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

  }
}

deleteItem(id){
  let confirm = this.alertCtrl.create({
    title: 'रेकोर्द डिलिट',
    message: 'यो रेकोर्दलाई पक्का डिलिट गर्ने?',
    buttons: [
    {
      text: 'होइन',
      handler: () => {
        /* Chill and do nothing */
      }
    },
    {
      text: 'हो',
      handler: () => {
        window.localStorage.removeItem(id);

        let toast = this.toastCtrl.create({
          message: 'रेकोर्द डिलिट भयो ।',
          duration: 2000
        });
        toast.present();

        this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

      }
    }
    ]
  });
  confirm.present();
}

notifyStatus(event)
{
  
  this.isToggled = event.checked;
  console.log(this.isToggled);

}

ionViewDidLoad() {

}

}
