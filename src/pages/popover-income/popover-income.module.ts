import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverIncomePage } from './popover-income';

@NgModule({
  declarations: [
    PopoverIncomePage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverIncomePage),
  ],
  exports: [
    PopoverIncomePage
  ]
})
export class PopoverIncomePageModule {}
