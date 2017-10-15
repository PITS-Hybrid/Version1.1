import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaterangeIncomePage } from './daterange-income';

@NgModule({
  declarations: [
    DaterangeIncomePage,
  ],
  imports: [
    IonicPageModule.forChild(DaterangeIncomePage),
  ],
  exports: [
    DaterangeIncomePage
  ]
})
export class DaterangeIncomePageModule {}
