import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthwiseExpenseReportPage } from './monthwise-expense-report';

@NgModule({
  declarations: [
    MonthwiseExpenseReportPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthwiseExpenseReportPage),
  ],
  exports: [
    MonthwiseExpenseReportPage
  ]
})
export class MonthwiseExpenseReportPageModule {}
