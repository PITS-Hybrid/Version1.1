import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavingGoalDetailPage } from './saving-goal-detail';

@NgModule({
  declarations: [
    SavingGoalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SavingGoalDetailPage),
  ],
  exports: [
    SavingGoalDetailPage
  ]
})
export class SavingGoalDetailPageModule {}
