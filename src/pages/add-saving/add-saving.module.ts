import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSavingPage } from './add-saving';

@NgModule({
  declarations: [
    AddSavingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSavingPage),
  ],
  exports: [
    AddSavingPage
  ]
})
export class AddSavingPageModule {}
