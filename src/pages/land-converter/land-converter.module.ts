import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandConverterPage } from './land-converter';

@NgModule({
  declarations: [
    LandConverterPage,
  ],
  imports: [
    IonicPageModule.forChild(LandConverterPage),
  ],
  exports: [
    LandConverterPage
  ]
})
export class LandConverterPageModule {}
