import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddIncomeDemoPage } from '../add-income-demo/add-income-demo';
/**
 * Generated class for the AddCategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {
	 @ViewChild('name') NameOfCategory;
    @ViewChild('expensetype') ExpenseType;
	 userInfo;
	 userID;
	 languageSelected;
   category;
   categoryType;
   forExpense;
   newCategory;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  	this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
this.userID =this.userInfo.sessionid;
this.languageSelected=this.userInfo.language;
this.categoryType = navParams.get('categoryType');
if(this.categoryType == "Expense"){
  this.forExpense = true;
}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCategoryPage');
  }

  Category(cat){

    console.log(cat);

  }

  addCategory(){
  	var timestamp = new Date().getTime();
    if(this.categoryType == "Income"){
     this.newCategory= {
      type : 'NewCategoryIncome', 
      ID : timestamp,
      nameofcategory : this.NameOfCategory.value,
      userID : this.userID,
      icon : this.category
    };
  }
 else if(this.categoryType == "Expense"){
     this.newCategory= {
      type : 'NewCategoryExpense', 
      ID : timestamp,
      nameofcategory : this.NameOfCategory.value,
      userID : this.userID,
      icon : this.category,
      expensetype : this.ExpenseType.value
    };
  }
    

   if(this.NameOfCategory.value=="" || this.category == undefined ){
            

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
                message: 'New Category Added',
                duration: 1000
              });
               toast.present();
}

     else  if(this.languageSelected == "2"){
              let toast = this.toastCtrl.create({
                message: 'नयाँ वर्ग थप् भएको छ',
                duration: 1000
              });
               toast.present();
}

    localStorage.setItem(timestamp.toString(), JSON.stringify(this.newCategory));
    

    console.log(this.newCategory);

    // this.navCtrl.push(AddIncomeDemoPage,
    //   {'catName' : this.NameOfCategory.value,
    //   'iconName' : this.category,
    //    'customflag' : 1})

     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  }

 }

}
