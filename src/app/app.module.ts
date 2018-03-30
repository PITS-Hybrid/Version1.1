import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up'

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
import { PopoverIncomeMonthPage } from '../pages/popover-income-month/popover-income-month';
import { PopoverIncomeYearPage } from '../pages/popover-income-year/popover-income-year';
import { PopoverExpensePage } from '../pages/popover-expense/popover-expense';
import { PopoverExpenseMonthPage } from '../pages/popover-expense-month/popover-expense-month';
import { PopoverExpenseYearPage } from '../pages/popover-expense-year/popover-expense-year';
import { DailyIncomeReportPage } from '../pages/daily-income-report/daily-income-report';
import { DailyExpenseReportPage } from '../pages/daily-expense-report/daily-expense-report';
import { YearlyIncomeReportPage } from '../pages/yearly-income-report/yearly-income-report';
import { YearlyExpenseReportPage } from '../pages/yearly-expense-report/yearly-expense-report';
import { DaterangeIncomePage } from '../pages/daterange-income/daterange-income';
import { DaterangeExpensePage } from '../pages/daterange-expense/daterange-expense';
import { DaterangeIncomeReportPage } from '../pages/daterange-income-report/daterange-income-report';
import { DaterangeExpenseReportPage } from '../pages/daterange-expense-report/daterange-expense-report';


import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule, Http } from '@angular/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { Network } from '@ionic-native/network';

import { LoanReportPage } from '../pages/loan-report/loan-report';
import { AddLoanPage } from '../pages/add-loan/add-loan';
import { SavingReportPage } from '../pages/saving-report/saving-report';
import { AddSavingPage } from '../pages/add-saving/add-saving';


import { LoanDescriptionPage } from '../pages/loan-description/loan-description';
import { AddCategoryPage } from '../pages/add-category/add-category';
import { AddSavingGoalPage } from '../pages/add-saving-goal/add-saving-goal';
import { SavingGoalDetailPage } from '../pages/saving-goal-detail/saving-goal-detail';
import { LandConverterPage } from '../pages/land-converter/land-converter';
import { CurrencyPage } from '../pages/currency/currency';


declare var require : any;
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
  PopoverIncomeMonthPage,
  PopoverIncomeYearPage,
  PopoverExpensePage,
  PopoverExpenseMonthPage,
  PopoverExpenseYearPage,
  DailyIncomeReportPage,
  DailyExpenseReportPage,
  YearlyIncomeReportPage,
  YearlyExpenseReportPage,
  DaterangeIncomePage,
  DaterangeIncomeReportPage,
  DaterangeExpensePage,
  DaterangeExpenseReportPage,
  SignInPage,
  SignUpPage,
  LoanReportPage,
  AddLoanPage,
  SavingReportPage,
  AddSavingPage,
  LoanDescriptionPage,
  AddCategoryPage,
  AddSavingGoalPage,
  SavingGoalDetailPage,
   LandConverterPage,
  CurrencyPage


  ],
  imports: [
  
  BrowserModule,
  HttpModule,
  IonicModule.forRoot(MyApp),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }
  })
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
  Edit,
  AddIncomeDemoPage,
  AddExpenseDemoPage,
  PopoverIncomePage,
  PopoverIncomeMonthPage,
  PopoverIncomeYearPage,
  PopoverExpensePage,
  PopoverExpenseMonthPage,
  PopoverExpenseYearPage,
  DailyIncomeReportPage,
  DailyExpenseReportPage,
  YearlyIncomeReportPage,
  YearlyExpenseReportPage,
  DaterangeIncomePage,
  DaterangeIncomeReportPage,
  DaterangeExpensePage,
  DaterangeExpenseReportPage,
  SignInPage,
  SignUpPage,
  LoanReportPage,
  AddLoanPage,
  SavingReportPage,
  AddSavingPage,
  LoanDescriptionPage,
  AddCategoryPage,
  AddSavingGoalPage,
  SavingGoalDetailPage,
   LandConverterPage,
  CurrencyPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthServiceProvider,
  Network
  ]
})
export class AppModule {}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

