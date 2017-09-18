import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddExpenseDemoPage } from './add-expense-demo';

@NgModule({
  declarations: [
    AddExpenseDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddExpenseDemoPage),
  ],
  exports: [
    AddExpenseDemoPage
  ]
})
export class AddExpenseDemoPageModule {}
