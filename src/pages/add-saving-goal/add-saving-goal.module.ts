import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSavingGoalPage } from './add-saving-goal';

@NgModule({
  declarations: [
    AddSavingGoalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSavingGoalPage),
  ],
  exports: [
    AddSavingGoalPage
  ]
})
export class AddSavingPageModule {}
