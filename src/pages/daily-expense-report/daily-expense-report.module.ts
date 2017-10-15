import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyExpenseReportPage } from './daily-expense-report';

@NgModule({
  declarations: [
    DailyExpenseReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyExpenseReportPage),
  ],
  exports: [
    DailyExpenseReportPage
  ]
})
export class DailyExpenseReportPageModule {}
