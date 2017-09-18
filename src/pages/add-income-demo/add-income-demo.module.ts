import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIncomeDemoPage } from './add-income-demo';

@NgModule({
  declarations: [
    AddIncomeDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddIncomeDemoPage),
  ],
  exports: [
    AddIncomeDemoPage
  ]
})
export class AddIncomeDemoPageModule {}
