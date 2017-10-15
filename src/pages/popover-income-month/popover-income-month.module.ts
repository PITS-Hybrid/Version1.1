import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverIncomeMonthPage } from './popover-income-month';

@NgModule({
  declarations: [
    PopoverIncomeMonthPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverIncomeMonthPage),
  ],
  exports: [
    PopoverIncomeMonthPage
  ]
})
export class PopoverIncomeMonthPageModule {}
