import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavingReportPage } from './saving-report';

@NgModule({
  declarations: [
    SavingReportPage,
  ],
  imports: [
    IonicPageModule.forChild(SavingReportPage),
  ],
  exports: [
    SavingReportPage
  ]
})
export class SavingReportPageModule {}
