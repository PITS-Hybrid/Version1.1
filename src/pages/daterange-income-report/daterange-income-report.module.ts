import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaterangeIncomeReportPage } from './daterange-income-report';

@NgModule({
  declarations: [
    DaterangeIncomeReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DaterangeIncomeReportPage),
  ],
  exports: [
    DaterangeIncomeReportPage
  ]
})
export class DaterangeIncomeReportPageModule {}
