import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanReportPage } from './loan-report';

@NgModule({
  declarations: [
    LoanReportPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanReportPage),
  ],
  exports: [
    LoanReportPage
  ]
})
export class LoanReportPageModule {}
