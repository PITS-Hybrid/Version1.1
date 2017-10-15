import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YearlyExpenseReportPage } from './yearly-expense-report';

@NgModule({
  declarations: [
    YearlyExpenseReportPage,
  ],
  imports: [
    IonicPageModule.forChild(YearlyExpenseReportPage),
  ],
  exports: [
    YearlyExpenseReportPage
  ]
})
export class YearlyExpenseReportPageModule {}
