import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
  year;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.year = new Date().getFullYear();
}

  ionViewDidLoad() {

  }

}
