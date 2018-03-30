import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpModule } from '@angular/http';
import * as EmailValidator  from 'email-validator';
import { ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
  providers: [AuthServiceProvider, HttpModule, Md5],
})
export class SignUpPage {
	@ViewChild('typeofuser') typeOfUser;
	@ViewChild('language') language;
	email;
	password;
	phone;
	flag=0;
  tempLanguageSelected;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private auth: AuthServiceProvider,
  	public toastCtrl: ToastController, public translate: TranslateService) {

   this.tempLanguageSelected = navParams.get('tempLanguageSelected');
   console.log(this.tempLanguageSelected);
   if(this.tempLanguageSelected == "en"){
  this.translate.setDefaultLang('en'); 
}
else if(this.tempLanguageSelected == "nep"){
  this.translate.setDefaultLang('nep');  

}


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  signIn(){
  	this.navCtrl.setRoot(SignInPage);

  }
    checkEmail(email){
     console.log(email);
     this.email = email.toLowerCase();
     this.auth.checkSignUp(this.email).subscribe((data) => {
       
       console.log(data[0]);


       if(data[0] == undefined){
         console.log("hello");

         if((EmailValidator.validate(email))){
           
         }
         else{
           let toast = this.toastCtrl.create({
             message: 'Email Address is not valid',
             duration: 1000,
             position: 'top'
           });
           toast.present();
           console.log('email succesful');

         }

       }

       
       else {

         this.flag = this.flag + 1;
         let toast = this.toastCtrl.create({
           message: 'Email Address already registered',
           duration: 1000,
           position: 'top'
         });
         toast.present();
       }
     });

   }

   checkContactNumber(phone){

     this.auth.checkSignUp(phone).subscribe((data) => {
       
       console.log(data[0]);


       if(data[0] == undefined){
         console.log("hello");
       }
       else {
         this.flag = this.flag + 1;
         let toast = this.toastCtrl.create({
           message: 'Contact Number already registered',
           duration: 1000,
           position: 'top'
         });
         toast.present();
       }
     });

   }

  signUp(){


     if(this.email == undefined || this.phone == undefined || this.password == undefined){

       let toast = this.toastCtrl.create({
         message: 'Please fill in the missing fields',
         duration: 500,
         position: 'top'
       });
       toast.present();
     }
     
     else if(this.flag>1){
       let toast = this.toastCtrl.create({
         message: 'Already used details, Please signup with a different email or contact',
         duration: 1000,
         position: 'top'
       });
       toast.present();
     }

     else{

  	var newUser={
  		phone : this.phone,
  		email : this.email,
  		password : this.password,
  		info : {
  			userType : this.typeOfUser.value,
  			language: this.language.value
  		}

  	};
  	console.log(newUser);

  	this.auth.signUp(newUser).subscribe();
  	this.navCtrl.setRoot(SignInPage);

    let toast = this.toastCtrl.create({
         message: 'User successfully created! Please login to continue.',
         duration: 1000,
         position: 'top'
       });
       toast.present();

}
}

}
