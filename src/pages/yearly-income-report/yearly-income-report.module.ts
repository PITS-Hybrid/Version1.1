import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YearlyIncomeReportPage } from './yearly-income-report';

@NgModule({
  declarations: [
    YearlyIncomeReportPage,
  ],
  imports: [
    IonicPageModule.forChild(YearlyIncomeReportPage),
  ],
  exports: [
    YearlyIncomeReportPage
  ]
})
export class YearlyIncomeReportPageModule {}
