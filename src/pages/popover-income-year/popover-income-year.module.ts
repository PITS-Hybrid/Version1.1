import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverIncomeYearPage } from './popover-income-year';

@NgModule({
  declarations: [
    PopoverIncomeYearPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverIncomeYearPage),
  ],
  exports: [
    PopoverIncomeYearPage
  ]
})
export class PopoverIncomeYearPageModule {}
