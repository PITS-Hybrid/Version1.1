import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanDescriptionPage } from './loan-description';

@NgModule({
  declarations: [
    LoanDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanDescriptionPage),
  ],
  exports: [
    LoanDescriptionPage
  ]
})
export class LoanDescriptionPageModule {}
