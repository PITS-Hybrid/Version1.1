import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverExpenseYearPage } from './popover-expense-year';

@NgModule({
  declarations: [
    PopoverExpenseYearPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverExpenseYearPage),
  ],
  exports: [
    PopoverExpenseYearPage
  ]
})
export class PopoverExpenseYearPageModule {}
