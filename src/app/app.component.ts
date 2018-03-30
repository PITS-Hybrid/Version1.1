import { Component, ViewChild } from '@angular/core';
import { Config, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddIncomePage } from '../pages/add-income/add-income';
import { AddIncomeDemoPage } from '../pages/add-income-demo/add-income-demo';
import { AddExpensePage } from '../pages/add-expense/add-expense';
import { AddExpenseDemoPage } from '../pages/add-expense-demo/add-expense-demo';
import { AboutUsPage } from '../pages/about-us/about-us';
import { IncomeReportPage } from '../pages/income-report/income-report';
import { ExpenseReportPage } from '../pages/expense-report/expense-report';
import { ProfilePage } from '../pages/profile/profile';
import { TranslateService } from '@ngx-translate/core';
import { SignInPage } from '../pages/sign-in/sign-in';
import { LandConverterPage } from '../pages/land-converter/land-converter';
import { CurrencyPage } from '../pages/currency/currency';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  
  rootPage: any = SignInPage;
  abc;
  userInfo;

  languageSelected;

    
  constructor( private translate: TranslateService,public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,  private config: Config) {


    this.initTranslate();

   platform.ready().then(() => {
     statusBar.styleDefault();
     splashScreen.hide();
   });

}


initTranslate(){


   this.translate.setDefaultLang('nep');
   

  
this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log(this.userInfo);
   if(this.userInfo == "" || this.userInfo == null){
     this.translate.setDefaultLang('en');
    
     this.languageSelected = "english";

   }

   else if(this.userInfo.language == 1 ){
     this.languageSelected = "english";
     console.log('english selected');
      this.translate.setDefaultLang('en');
       
  
   }



   else if(this.userInfo.language == 2){
       this.languageSelected = "nepali";
     console.log('nepali selected');
      this.translate.setDefaultLang('nep');
      
 
   }


  // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
  //     this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
  //   });
    
  


 }


openIncomeReportPage(){
  this.nav.push(IncomeReportPage);
}
openExpenseReportPage(){
  this.nav.push(ExpenseReportPage);
}

openAboutUsPage(){
 this.nav.push(AboutUsPage); 
}
openLandConverterPage(){
    this.nav.push(LandConverterPage); 
  }
  openForexPage(){
    this.nav.push(CurrencyPage); 
  }


}
