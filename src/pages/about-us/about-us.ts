import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
  year;
  languageSelected;
  userInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.year = new Date().getFullYear();
   this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
     this.languageSelected=this.userInfo.language;

      if(this.languageSelected == 1){
        this.languageSelected = "english";
        console.log("english selected");
      }

      else if(this.languageSelected == 2){
        this.languageSelected = "nepali";
        console.log("nepali selected");
      }
}

  ionViewDidLoad() {

  }

}
