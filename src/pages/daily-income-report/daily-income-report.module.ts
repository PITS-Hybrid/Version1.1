import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyIncomeReportPage } from './daily-income-report';

@NgModule({
  declarations: [
    DailyIncomeReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyIncomeReportPage),
  ],
  exports: [
    DailyIncomeReportPage
  ]
})
export class DailyIncomeReportPageModule {}
