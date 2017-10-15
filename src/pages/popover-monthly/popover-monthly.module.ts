import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverMonthlyPage } from './popover-monthly';

@NgModule({
  declarations: [
    PopoverMonthlyPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverMonthlyPage),
  ],
  exports: [
    PopoverMonthlyPage
  ]
})
export class PopoverMonthlyPageModule {}
