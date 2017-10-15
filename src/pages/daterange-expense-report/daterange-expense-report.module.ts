import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaterangeExpenseReportPage } from './daterange-expense-report';

@NgModule({
  declarations: [
    DaterangeExpenseReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DaterangeExpenseReportPage),
  ],
  exports: [
    DaterangeExpenseReportPage
  ]
})
export class DaterangeExpenseReportPageModule {}
