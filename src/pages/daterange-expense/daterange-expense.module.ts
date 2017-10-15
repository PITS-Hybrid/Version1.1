import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaterangeExpensePage } from './daterange-expense';

@NgModule({
  declarations: [
    DaterangeExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(DaterangeExpensePage),
  ],
  exports: [
    DaterangeExpensePage
  ]
})
export class DaterangeExpensePageModule {}
