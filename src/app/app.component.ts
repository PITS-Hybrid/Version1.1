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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
     { title: 'मासिक विवरण', component: HomePage },
     { title: 'आम्दानि रिपोर्ट', component: IncomeReportPage},
     { title: 'खर्च रिपोर्ट', component: ExpenseReportPage},
      { title: 'हाम्रो बारेमा', component: AboutUsPage}
    ];

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
