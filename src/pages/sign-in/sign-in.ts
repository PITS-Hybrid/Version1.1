import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpModule } from '@angular/http';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
username ;
password;
userInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService,
    private auth: AuthServiceProvider, public toastCtrl: ToastController) {
   // var sessionId= localStorage.getItem('sessionItem');
     
     this.userInfo = localStorage.getItem('userInfo');
   console.log(this.userInfo);
  // if(sessionItem == undefined ){
    

     if(this.userInfo != undefined){
       this.navCtrl.setRoot(HomePage);
     }

     else if(this.userInfo == undefined){
       console.log('undefined found');
     }
 	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  changeToEnglish(){
	this.translate.setDefaultLang('eng');
  }
  changeToNepali(){
  	this.translate.setDefaultLang('nep');
  }

 

  signIn(){
     this.username = this.username.toLowerCase();
     
     if(this.username == undefined || this.password == undefined ){
       let toast = this.toastCtrl.create({
         message: 'Please fill in the missing fields',
         duration: 1000,
         position: 'top'
       });
       toast.present();
       console.log(this.username);
       console.log(this.password);
     }
     else{


       var User = {
         username : this.username,
         password :  Md5.hashStr(this.password) 
       };
       

       this.auth.checkLogin(this.username, this.password).subscribe((data) => {

        var timestamp = new Date().getTime();

    this.userInfo= {
      type : 'userInfo',
      usertype : "",
      sessionid : data[0]._id,
      language : ""


    };
    

         if(data ==''){
           let toast = this.toastCtrl.create({
             message: 'Incorrect username or password',
             duration: 1000,
             position: 'top'
           });
           toast.present();
         }


         else{
          // window.localStorage.setItem('sessionItem', data[0]._id);
           //window.localStorage.setItem('sessionItem', '1');
           //console.log(localStorage.getItem('sessionItem'));
           //console.log(window.localStorage.getItem('sessionItem'));
           
           
          // window.localStorage.setItem('userinfo', JSON.stringify(User));
           
           localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
           this.navCtrl.setRoot(HomePage);
           console.log(this.userInfo);
         }

       });



     }
  }



languageOption(languageValue){
 if(languageValue == 1 ){
  this.translate.setDefaultLang('en'); 
 this.navCtrl.setRoot(this.navCtrl.getActive().component).then(() => {});
}
else if(languageValue == 2 ){  
 this.navCtrl.setRoot(this.navCtrl.getActive().component).then(() => {});
 this.translate.setDefaultLang('nep');
}


  }

   createAccount(){
    this.navCtrl.push(SignUpPage, 
      {'tempLanguageSelected' : this.translate.getDefaultLang() });
  }


}
