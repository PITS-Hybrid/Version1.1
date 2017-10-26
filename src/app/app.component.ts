import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  
  rootPage: any = HomePage;
 abc;

  pages: Array<{title: string, component: any}>;

  constructor( translate: TranslateService,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
   



    this.initializeApp();

   // used for an example of ngFor and navigation

 


translate.setDefaultLang('en');
this.abc=localStorage.getItem('LV');


if(this.abc == null){
  translate.setDefaultLang('en');
  window.localStorage.setItem('LV', '1');

}

else if(this.abc == 1 ){
translate.setDefaultLang('en');

}



else if(this.abc == 2){
  translate.setDefaultLang('nep');
}


 platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
  });


  if(this.abc == 1 ){
    this.pages = [
     { title: 'Monthly Report', component: HomePage },
     { title: 'Income Report', component: IncomeReportPage},
     { title: 'Expense Report', component: ExpenseReportPage},
      { title: 'About Us', component: AboutUsPage}
    ];


     platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
  });

}
  else if(this.abc == 2 ){
    this.pages = [
     { title: 'मासिक विवरण', component: HomePage },
     { title: 'आम्दानि रिपोर्ट', component: IncomeReportPage},
     { title: 'खर्च रिपोर्ट', component: ExpenseReportPage},
      { title: 'हाम्रो बारेमा', component: AboutUsPage}
    ];


     platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
  });

}


  }



  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
