import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var require: any;
@IonicPage()
@Component({
  selector: 'page-land-converter',
  templateUrl: 'land-converter.html',
})
export class LandConverterPage {

	sqft;
	finalOutput;
	oUnit;
	iUnit;
	enteredUnit;
	worth;
	typeOfConverter;
	message;
	totalSqft = 0;
	totalSqMeter = 0;
  numtowords;
  userInfo;
  localStorageLanguageSelected;
  inputUnit1 :string = "squareMeter";
  outputUnit1 :string = "squareFeet";
  typeOfUnit1 : string = "Ropani";
  unit = 1;
  tempConvertedLand = 10.7639;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numtowords = require("number-to-words");
    this.typeOfConverter = "basic";
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(this.userInfo.language);
    if(this.userInfo.language == 1 ){
      this.localStorageLanguageSelected="English";
     
    }
      else if(this.userInfo.language  == 2 ){
      this.localStorageLanguageSelected="Nepali";
    }
  }

convertUnit(unit, inputUnit, outputUnit){
    switch(inputUnit){                  
      case 'bigha': {
        this.sqft = parseFloat(unit) * 72900;
        break;
      }
      case 'katha': {
        this.sqft = parseFloat(unit) * 3645;
        break;
      }
      case 'dhur': {
        this.sqft = parseFloat(unit) * 182.25;
        break;
      }
      case 'ropani': {
        this.sqft = parseFloat(unit) * 5476;
        break;
      }
      case 'aana': {
        this.sqft = parseFloat(unit) * 342.25;
        break;
      }
      case 'paisa': {
        this.sqft = parseFloat(unit) * 85.56;
        break;
      }
      case 'daam': {
        this.sqft = parseFloat(unit) * 21.39;
        break;
      }
      case 'squareFeet': {
        this.sqft = unit;
        break;
      }
      case 'squareMeter': {
        this.sqft = parseInt(unit) * 10.7639;

        break;
      }
    }

    this.convertIntoDesiredUnit(unit, this.sqft, inputUnit, outputUnit);

  }




  convertIntoDesiredUnit(enteredUnit, unit, inputUnit, outputUnit){
  	switch(outputUnit){
  		case 'bigha': {
        this.finalOutput = parseFloat(unit) / 72900;
        break;
      }
      case 'katha': {
        this.finalOutput = parseFloat(unit) / 3645;
        break;
      }
      case 'dhur': {
        this.finalOutput = parseFloat(unit) / 182.25;
        break;
      }
      case 'ropani': {
        this.finalOutput = parseFloat(unit) / 5476;
        break;
      }
      case 'aana': {
        this.finalOutput = parseFloat(unit) / 342.25;
        break;
      }
      case 'paisa': {
        this.finalOutput = parseFloat(unit) / 85.56;
        break;
      }
      case 'daam': {
        this.finalOutput = parseFloat(unit) / 21.39;
        break;
      }
      case 'squareFeet': {
        this.finalOutput = unit;
        break;
      }
      case 'squareMeter': {
        this.finalOutput = parseFloat(unit) / 10.7639;
      }
    }


    if(this.userInfo.language == "Nepali"){
      if(inputUnit == "squareMeter"){
        this.iUnit = "वर्ग मीटर";
      }
      if(inputUnit == "squareFeet"){
        this.iUnit = "वर्ग फिट";
      }
      if(inputUnit == "ropani"){
        this.iUnit = "रोपनी";
      }
      if(inputUnit == "aana"){
        this.iUnit = "आना";
      }
      if(inputUnit == "paisa"){
        this.iUnit = "पैसा";
      }
      if(inputUnit == "daam"){
        this.iUnit = "दाम";
      }
      if(inputUnit == "bigha"){
        this.iUnit = "बिघा";
      }
      if(inputUnit == "katha"){
        this.iUnit = "कठ्ठा";
      }
      if(inputUnit == "dhur"){
        this.iUnit = "धुर";
      }


      if(outputUnit == "squareMeter"){
        this.oUnit = "वर्ग मीटर";
      }
      if(outputUnit == "squareFeet"){
        this.oUnit = "वर्ग फिट";
      }
      if(outputUnit == "ropani"){
        this.oUnit = "रोपनी";
      }
      if(outputUnit == "aana"){
        this.oUnit = "आना";
      }
      if(outputUnit == "paisa"){
        this.oUnit = "पैसा";
      }
      if(outputUnit == "daam"){
        this.oUnit = "दाम";
      }
      if(outputUnit == "bigha"){
        this.oUnit = "बिघा";
      }
      if(outputUnit == "katha"){
        this.oUnit = "कठ्ठा";
      }
      if(outputUnit == "dhur"){
        this.oUnit = "धुर";
      }

    }
    if(this.userInfo.language == "English"){
      this.iUnit = inputUnit;
      this.oUnit = outputUnit;
    }
    this.enteredUnit = enteredUnit;


    var priceCalculator = document.getElementById('priceCalculator');
    priceCalculator.style.display = 'block';
    

  }

  worthCalculator(perUnitPrice){
console.log(this.userInfo.language);
    if(this.userInfo.language == 1){
      this.worth = this.numtowords.toWords(parseFloat(this.enteredUnit) * perUnitPrice);
    }
    if (this.userInfo.language == 2){

      var number, no, point, hundred, digits_1, i, str, words, digits, divider, plural, counter, result, points;
      number = parseFloat(this.enteredUnit) * perUnitPrice;
      number = number.toString().split('.');
      no = number[0];
      point = number[1];
      hundred = '';
      digits_1 = no.length;
      i = 0;
      str = new Array();
      words = {'0':'', '1':'एक', '2':'दुई', '3':'तीन', '4':'चार', '5':'पाँच', '6':'छ', '7':'सात', '8':'आठ', '9':'नौ', '10':'दस', '11':'एघार', '12':'बाह्र', '13':'तेह्र', '14':'चौध', '15':'पन्ध्र', '16':'सोह्र', '17':'सत्र', '18':'अठाह्र', '19':' उन्नाइस', '20':'बीस', '30':'तीस', '40':'चालीस', '50':'पचास', '60':'साठी', '70':'सतरी',  '80':'अस्सी', '90':'नब्बे'};
      digits = new Array('', 'सय', 'हजार', 'लाख', 'करोड', 'अरब', 'खरब');
      while ( i < digits_1 ) {
        divider = (i == 2) ? 10 : 100;
        number = Math.floor(no % divider);
        no = Math.floor(no / divider);
        i += (divider == 10) ? 1 : 2;
        if (number) {
          counter = str.length;
          plural = (counter && number > 9) ? '' : '';
          hundred = (counter == 1 && str[0]) ? '' : '';
          str.push((number < 21) ? words[number] + " " + digits[counter] + plural + " " + hundred : words[Math.floor(number / 10) * 10] + " " + words[number % 10] + " " + digits[counter] + plural + " " + hundred);
        } else {
          str.push('');
        }
      }
      str = str.reverse();
      result = str.join('');
//points = (point) ? ". " + words[parseInt(point / 10)] + " " + words[point = point % 10] : '';
console.log(result + "रुपैंया" );
this.worth = (result + "रुपैंया" );
}

}



validator(typeOfSystem, first, second, third, fourth){

  switch(typeOfSystem){
    case 'Ropani': {
      if(parseInt(second) > 16){
         if (this.userInfo.language == "English"){
        this.message = "Invalid Input! Anna value cannot exceed 15";
      }
       if (this.userInfo.language == "Nepali"){
        this.message = "अमान्य इनपुट! अन्ना मान 15 भन्दा बढी हुन सक्दैन";
      }
        var outputDiv = document.getElementById('outputDiv');
        outputDiv.style.display = 'none';
        break;
      }
      else if(parseInt(third) > 4){
        if (this.userInfo.language == "English"){
        this.message = "Invalid Input! Paisa value cannot exceed 3";
      }
      if (this.userInfo.language == "Nepali"){
         this.message = "अमान्य इनपुट! पैसा मान 3 भन्दा बढी हुन सक्दैन";
      }
        var outputDiv = document.getElementById('outputDiv');
        outputDiv.style.display = 'none';
        break;
      }
      else if(parseInt(fourth) > 4){
        if (this.userInfo.language == "English"){
        this.message = "Invalid Input! Daam value cannot exceed 3";
      }
      if (this.userInfo.language == "Nepali"){
        this.message = "अमान्य इनपुट! दाम मान 3 भन्दा बढी हुन सक्दैन";
      }
        var outputDiv = document.getElementById('outputDiv');
        outputDiv.style.display = 'none';
        break;
      }
      else{
        this.message = "";
      }
    };

    case 'Bigha': {
      if(parseInt(second) > 20){
          if (this.userInfo.language == "English"){
        this.message = "Invalid Input! Kaatha value cannot exceed 19";
      }
        if (this.userInfo.language == "Nepali"){
          this.message = "अमान्य इनपुट! कठ्ठा मूल्य 19 भन्दा बढी हुन सक्दैन";
        }
        var outputDiv = document.getElementById('outputDiv');
        outputDiv.style.display = 'none';
        break;
      }
      else if(parseInt(third) > 20){
        if (this.userInfo.language == "English"){
        this.message = "Invalid Input! Dhur value cannot exceed 19";
      }
        if (this.userInfo.language == "Nepali"){
        this.message = "अमान्य इनपुट! धुर मूल्य 19 भन्दा बढी हुन सक्दैन";
      }
        var outputDiv = document.getElementById('outputDiv');
        outputDiv.style.display = 'none';
        break;
      }
      else if(parseInt(fourth) > 4){
         if (this.userInfo.language == "English"){
        this.message = "Invalid Input! Kanwa value cannot exceed 3";
      }
         if (this.userInfo.language == "Nepali"){
        this.message = "अमान्य इनपुट! कानवा मूल्य 3 भन्दा बढी हुन सक्दैन";
      }
        var outputDiv = document.getElementById('outputDiv');
        outputDiv.style.display = 'none';
        break;
      }
      else{
        this.message = "";
      }
    };
  }

  this.converter(typeOfSystem, first, second, third, fourth);

}


converter(typeOfCase, first, second, third, fourth){

  if(typeOfCase ==  "Ropani"){
    var ropani = this.sqftConverter('ropani', first);
    var anna = this.sqftConverter('anna', second);
    var paisa = this.sqftConverter('paisa', third);
    var daam = this.sqftConverter('daam', fourth);

    this.totalSqft = ropani+anna+paisa+daam;
    this.totalSqMeter = this.sqftConverter('squareMeter', this.totalSqft);
  }
  else if(typeOfCase == "Bigha"){
    var first1 = this.sqftConverter('bigha', first);
    var second2 = this.sqftConverter('katha', second);
    var third3 = this.sqftConverter('dhur', third);
    var fourth4 = this.sqftConverter('kanwa', fourth);

    this.totalSqft = first1+second2+third3+fourth4;
    this.totalSqMeter = this.sqftConverter('squareMeter', this.totalSqft);
  }
  else{

  }
  
}


sqftConverter(unitName, unit){
  switch(unitName){
    case 'bigha': {
      return parseFloat(unit) * 72900;
    };
    case 'katha': {
      return parseFloat(unit) * 3645;
    };
    case 'dhur': {
      return parseFloat(unit) * 182.25;
    };
    case 'ropani': {
      return parseFloat(unit) * 5476;
    };
    case 'anna': {
      return parseFloat(unit) * 342.25;
    };
    case 'paisa': {
      return parseFloat(unit) * 85.56;
    };
    case 'daam': {
      return parseFloat(unit) * 21.39;
    };
    case 'kanwa': {
      return parseFloat(unit) * 9.1125;
    };
    case 'squareMeter': {
      return parseFloat(unit) / 10.7639;
    };
  }
}




}
