import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverExpenseMonthPage } from './popover-expense-month';

@NgModule({
  declarations: [
    PopoverExpenseMonthPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverExpenseMonthPage),
  ],
  exports: [
    PopoverExpenseMonthPage
  ]
})
export class PopoverExpenseMonthPageModule {}
