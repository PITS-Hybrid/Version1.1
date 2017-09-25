import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverExpensePage } from './popover-expense';

@NgModule({
  declarations: [
    PopoverExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverExpensePage),
  ],
  exports: [
    PopoverExpensePage
  ]
})
export class PopoverExpensePageModule {}
