import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddIncomePage } from '../pages/add-income/add-income';
import { AddIncomeDemoPage } from '../pages/add-income-demo/add-income-demo';
import { AddExpensePage } from '../pages/add-expense/add-expense';
import { AddExpenseDemoPage } from '../pages/add-expense-demo/add-expense-demo';
import { ProfilePage } from '../pages/profile/profile';
import { IncomeReportPage } from '../pages/income-report/income-report';
import { ExpenseReportPage } from '../pages/expense-report/expense-report';
import { AboutUsPage } from '../pages/about-us/about-us';
import { Edit } from '../pages/edit/edit';
import { MoreReportIncomePage } from '../pages/more-report-income/more-report-income';
import { MonthWiseIncomeReport } from '../pages/monthwise-income-report/monthwise-income-report';
import { MonthwiseExpenseReportPage } from '../pages/monthwise-expense-report/monthwise-expense-report';
import { PopoverIncomePage } from '../pages/popover-income/popover-income';
import { PopoverExpensePage } from '../pages/popover-expense/popover-expense';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddIncomePage,
    AddExpensePage,
    IncomeReportPage,
    ExpenseReportPage,
    AboutUsPage,
    ProfilePage,
    MoreReportIncomePage,
    MonthWiseIncomeReport,
    MonthwiseExpenseReportPage,
    Edit
    ,AddIncomeDemoPage,
    AddExpenseDemoPage,
    PopoverIncomePage,
    PopoverExpensePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddIncomePage,
    IncomeReportPage,
    ExpenseReportPage,
    AddExpensePage,
    AboutUsPage,
    ProfilePage,
    MoreReportIncomePage,
    MonthWiseIncomeReport,
    MonthwiseExpenseReportPage,
    Edit
    ,AddIncomeDemoPage,
   AddExpenseDemoPage,
   PopoverIncomePage,
    PopoverExpensePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
