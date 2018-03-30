import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Http } from '@angular/http';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html',
})
export class CurrencyPage {
	
	usd = 0;
	eur = 0;
	gbp = 0;
	chf = 0;
	aud = 0;
	cad = 0;
	sgd = 0;
	jpy = 0;
	cny = 0;
	sar = 0;
	qar = 0;
	thb = 0;
	aed = 0;
	myr = 0;
	krw = 0;
	sek = 0;
	dkk = 0;
	hkd = 0;
	kwd = 0;
	bhd = 0;

	date;
  exchangeRates;
tempExchangeRate;
liveExchangeRate;
fromcurrency;
tocurrency;
convertedCurrency;
Currency1 : string ="npr";
Currency2 : string ="usd";
inputUnit = 1;
tempConvertedCurrency;

  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network, public http: Http, private auth: AuthServiceProvider,public toastCtrl: ToastController) {
// this.Currency1 = "npr"
// this.Currency2 = "usd"

this.fromcurrency = "npr";
this.tocurrency = "usd";

   this.auth.getRates().subscribe((data) => {
     this.liveExchangeRate = data;
     window.localStorage.setItem('savedExchangeRate',  JSON.stringify(data));
      this.date = data.date;
      console.log(this.date);

      this.usd = 1/(data.rates.USD/1.6);
      this.tempConvertedCurrency = this.usd;
      this.eur = 1/(data.rates.EUR/1.6);
      this.gbp = 1/(data.rates.GBP/1.6);
      this.chf = 1/(data.rates.CHF/1.6);
      this.aud = 1/(data.rates.AUD/1.6);
      this.cad = 1/(data.rates.CAD/1.6);
      this.sgd = 1/(data.rates.SGD/1.6);
      this.jpy = 10/(data.rates.JPY/1.6);
      this.cny = 1/(data.rates.CNY/1.6);
      this.thb = 1/(data.rates.THB/1.6);
      this.myr = 1/(data.rates.MYR/1.6);
      this.krw = 100/(data.rates.KRW/1.6);
      this.sek = 1/(data.rates.SEK/1.6);
      this.dkk = 1/(data.rates.DKK/1.6);
      this.hkd = 1/(data.rates.HKD/1.6);

    });

  }

  displayNetworkUpdate(connectionState: string){
  let networkType = this.network.type;
  // this.toastCtrl.create({
  //   message: `You are now ${connectionState}`,
  //   duration: 3000
  // }).present();
}


  ionViewDidLoad() {
  	 
      this.network.onConnect().subscribe(data => {
        this.displayNetworkUpdate(data.type);
    console.log('were here')
    console.log(this.liveExchangeRate);
  this.date = this.liveExchangeRate.date;

      this.usd = 1/(this.liveExchangeRate.rates.USD/1.6);
       this.tempConvertedCurrency = this.usd;
      this.eur = 1/(this.liveExchangeRate.rates.EUR/1.6);
      this.gbp = 1/(this.liveExchangeRate.rates.GBP/1.6);
      this.chf = 1/(this.liveExchangeRate.rates.CHF/1.6);
      this.aud = 1/(this.liveExchangeRate.rates.AUD/1.6);
      this.cad = 1/(this.liveExchangeRate.rates.CAD/1.6);
      this.sgd = 1/(this.liveExchangeRate.rates.SGD/1.6);
      this.jpy = 10/(this.liveExchangeRate.rates.JPY/1.6);
      this.cny = 1/(this.liveExchangeRate.rates.CNY/1.6);
      this.thb = 1/(this.liveExchangeRate.rates.THB/1.6);
      this.myr = 1/(this.liveExchangeRate.rates.MYR/1.6);
      this.krw = 100/(this.liveExchangeRate.rates.KRW/1.6);
      this.sek = 1/(this.liveExchangeRate.rates.SEK/1.6);
      this.dkk = 1/(this.liveExchangeRate.rates.DKK/1.6);
      this.hkd = 1/(this.liveExchangeRate.rates.HKD/1.6);
  }, error => console.error(error));



  
 
  this.network.onDisconnect().subscribe(data => {
    this.displayNetworkUpdate(data.type);
   this.tempExchangeRate = localStorage.getItem('savedExchangeRate');
    console.log(this.tempExchangeRate);

    if(this.tempExchangeRate.rates != undefined){
    this.date = this.tempExchangeRate.date;

      this.usd = 1/(this.tempExchangeRate.rates.USD/1.6);
       this.tempConvertedCurrency = this.usd;
      this.eur = 1/(this.tempExchangeRate.rates.EUR/1.6);
      this.gbp = 1/(this.tempExchangeRate.rates.GBP/1.6);
      this.chf = 1/(this.tempExchangeRate.rates.CHF/1.6);
      this.aud = 1/(this.tempExchangeRate.rates.AUD/1.6);
      this.cad = 1/(this.tempExchangeRate.rates.CAD/1.6);
      this.sgd = 1/(this.tempExchangeRate.rates.SGD/1.6);
      this.jpy = 10/(this.tempExchangeRate.rates.JPY/1.6);
      this.cny = 1/(this.tempExchangeRate.rates.CNY/1.6);
      this.thb = 1/(this.tempExchangeRate.rates.THB/1.6);
      this.myr = 1/(this.tempExchangeRate.rates.MYR/1.6);
      this.krw = 100/(this.tempExchangeRate.rates.KRW/1.6);
      this.sek = 1/(this.tempExchangeRate.rates.SEK/1.6);
      this.dkk = 1/(this.tempExchangeRate.rates.DKK/1.6);
      this.hkd = 1/(this.tempExchangeRate.rates.HKD/1.6);

    }

    if(this.tempExchangeRate.rates == undefined) {
  //     this.toastCtrl.create({
  //   message: `You need to be online to get the rates`,
  //   duration: 3000
  // }).present();

    }
  }, error => console.error(error));



}
fromCurrency(Currencyfrom){
  this.fromcurrency = Currencyfrom;
}
toCurrency(Currencyto){
  this.tocurrency = Currencyto; 
}

enteredUnit(inputUnit){
  console.log(this.fromcurrency);
  console.log(this.tocurrency);
// if(this.fromcurrency !=undefined || this.tocurrency !=undefined ){

  if(this.fromcurrency =="npr"){
     this.convertedCurrency = inputUnit;
  }
if(this.fromcurrency == "usd"){
  this.convertedCurrency = inputUnit*this.usd;
  }
  if(this.fromcurrency == "eur"){
  this.convertedCurrency = inputUnit*this.eur;
  }
  if(this.fromcurrency == "gbp"){
  this.convertedCurrency = inputUnit*this.gbp;
  }
  if(this.fromcurrency == "chf"){
  this.convertedCurrency = inputUnit*this.chf;
  }
  if(this.fromcurrency == "aud"){
  this.convertedCurrency = inputUnit*this.aud;
  }
  if(this.fromcurrency == "cad"){
  this.convertedCurrency = inputUnit*this.cad;
  }
  if(this.fromcurrency == "sgd"){
  this.convertedCurrency = inputUnit*this.sgd;
  }
  if(this.fromcurrency == "jpy"){
  this.convertedCurrency = inputUnit*this.jpy;
  }
  if(this.fromcurrency == "cny"){
  this.convertedCurrency = inputUnit*this.cny;
  }
  if(this.fromcurrency == "thb"){
  this.convertedCurrency = inputUnit*this.thb;
  }
  if(this.fromcurrency == "myr"){
  this.convertedCurrency = inputUnit*this.myr;
  }
  if(this.fromcurrency == "krw"){
  this.convertedCurrency = inputUnit*this.krw;
  }
  if(this.fromcurrency == "sek"){
  this.convertedCurrency = inputUnit*this.sek;
  }
  if(this.fromcurrency == "dkk"){
  this.convertedCurrency = inputUnit*this.dkk;
  }
  if(this.fromcurrency == "hkd"){
  this.convertedCurrency = inputUnit*this.hkd;
  }



  if(this.tocurrency =="npr"){
     this.convertedCurrency = this.convertedCurrency;
  }
  if(this.tocurrency == "usd"){
    this.convertedCurrency = this.convertedCurrency/this.usd;
  }
   if(this.tocurrency == "eur"){
   this.convertedCurrency = this.convertedCurrency/this.eur;
  }
  if(this.tocurrency == "gbp"){
   this.convertedCurrency = this.convertedCurrency/this.gbp;
  }
  if(this.tocurrency == "chf"){
   this.convertedCurrency = this.convertedCurrency/this.chf;
  }
  if(this.tocurrency == "aud"){
  this.convertedCurrency = this.convertedCurrency/this.aud;
  }
  if(this.tocurrency == "cad"){
   this.convertedCurrency = this.convertedCurrency/this.cad;
  }
  if(this.tocurrency == "sgd"){
   this.convertedCurrency = this.convertedCurrency/this.sgd;
  }
  if(this.tocurrency == "jpy"){
   this.convertedCurrency = this.convertedCurrency/this.jpy;
  }
  if(this.tocurrency == "cny"){
   this.convertedCurrency = this.convertedCurrency/this.cny;
  }
  if(this.tocurrency == "thb"){
  this.convertedCurrency = this.convertedCurrency/this.thb;
  }
  if(this.tocurrency == "myr"){
  this.convertedCurrency = this.convertedCurrency/this.myr;
  }
  if(this.tocurrency == "krw"){
   this.convertedCurrency = this.convertedCurrency/this.krw;
  }
  if(this.tocurrency == "sek"){
  this.convertedCurrency = this.convertedCurrency/this.sek;
  }
  if(this.tocurrency == "dkk"){
   this.convertedCurrency = this.convertedCurrency/this.dkk;
  }
  if(this.tocurrency == "hkd"){
  this.convertedCurrency = this.convertedCurrency/this.hkd;
  }


//}

}


}

