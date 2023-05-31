import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  //------------------------------------ Personal Details Validation ---------------------------//
  firstName = ('^[a-zA-Z]+$'); //ex. john
  fullName = ('^[a-zA-Z][a-zA-Z ]*$'); //ex. john doe
  age = '[0-9]{2,}|[5-9]{1}$'; //ex. 25
  email = ('^[a-zA-Z0-9][a-zA-Z0-9._-]+[a-zA-Z0-9]+@([a-z.]+[.])+[a-z]{2,5}$'); //ex.johndoe_123@gmail.com
  newEmail = '^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$';  //ex.johndoe_123@gmail.com
  pin_code = ('^[1-9][0-9]{5}$'); //ex. 416505
  latitude = ('^[+-]?(([1-8]?[0-9])(\.[0-9]{1,8})?|90(\.0{1,8})?)$'); //ex. 18.52
  longitude = ('^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\.[0-9]{1,8})?)|180(\.0{1,8})?)$'); //ex. 73.85
  //------------------------------------- Personal Details Validation ---------------------------//

  //--------------------------------Contact Details Validations--------------------------------------//
  mobile_No = ('[6-9]\\d{9}'); //ex. 6525457875
  valLandLineNum = '^[ 0-9 ]{1,1}?[ 0-9 ]{7,15}$'; //ex. 1800 1234
  valLandlineNo = '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,5})';
  landlineNoV2 = '^([0-9 +()-])';

  //--------------------------------Contact Details Validations--------------------------------------//

  //----------------------------------Document Number Validation----------------------------//
  aadhar_card_no = ('^[2-9][0-9]{11}$'); //ex. 652154787878
  pan_card_no = ('[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}'); //ex. BSYHP3322P
  valGstNo = '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$';
  bankIFSCCodeVal = "^[A-Z]{4}0[A-Z0-9]{6}$"; // ex. SBIN0000454
  cinNumber = '^[A-Z0-9]*$'; //ex. L17110MH1973PLC019786
  vehicleNum = '^([A-Z]{2}[0-9]{2}[A-Z]{0,2}[0-9]{4})$|^([A-Z]{3}[0-9]{4})$'; //ex. MH12FK5567,MH125567,MH12F5567, MHA1234
  //----------------------------------Document Number Validation----------------------------//

  //------------------------------------------Login Details Validation-----------------------------//
  valPassword = '^(?=.*[a-z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z0-9\d@$!%*?&#]{6,15}$'; //ex. Admin@123

  //------------------------------------------Login Details Validation-----------------------------//


  //--------------------------------Text & Number Validation--------------------------------//
  onlyNumbers = '^[0-9]*$'; //ex. 1234567890
  numericWithDotVal = '[+-]?([0-9]*[.])?[0-9]+'; //ex. 12.16
  alphaNumericOnly = '^([ a-zA-Z])[- a-zA-Z0-9]+$'; //ex.A12BC5
  combinationAlphaNumericOnly = '^[a-zA-Z0-9]*$';
  alphabetWithSpace = '^[a-zA-Z][a-zA-Z ]*$'; //ex. A B
  alphabetWithSpaceWithSomeSpecChar = '^[a-zA-Z][a-zA-Z &.(),]*$';  //ex. A B$
  alphabetsWithSpecChar = `^([a-zA-Z0-9 /(,)&.+-=\n'])*$`;
  singleSpaceBetweenTwoCharacters = '^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$'; //ex. A B
  singleDashDotNumeric = '^[-]?[0-9][0-9]*[.]?[0-9]{0,2}$'; //ex. A-B || A.B
  numericWithdecimaluptotwoDigits = '^[0-9][0-9]*[.]?[0-9]{0,2}$'; //ex. 1.23
  numericWithdecimaluptoOneDigits = '^[0-9][0-9]*[.]?[0-9]{0,1}$'; //ex. 1.1
  numericWithDecimalForGST = '^[0-9]{1,3}(\\.[0-9]{1,2})?%?$';
  //--------------------------------Text & Number Validation--------------------------------//

  onlyDigits(event: any) {   //ex. 1234567890
    const maskSeperator = new RegExp('^([0-9])', 'g');
    return maskSeperator.test(event.key);
  }

  digitsWithDec(event: any) {    //ex. 1.8, 22.3
    const maskSeperator = new RegExp('^([0-9.])', 'g');
    return maskSeperator.test(event.key);
  }

  onlyDigitsExcludeZeroAtStart(event: any) {  //ex. 12345
    const maskSeperator = new RegExp('^[1-9][0-9]*$', 'g')
    return maskSeperator.test(event.key);
  }

  alphabetsWithSpaces(event: any) {  //ex. A B C
    const maskSeperator = new RegExp('^([a-zA-Z ])', 'g');
    return maskSeperator.test(event.key);
  }

  noSpacesAtStart(event: any) {
    const maskSeperator = new RegExp('^[ ]+|[ ]+$', 'm');
    return !maskSeperator.test(event.key);
  }



  

  onlyAlphabets(event: any) {
    if (!this.noSpacesAtStart(event)) {
      return false
    }
    const maskSeperator = new RegExp('^([a-zA-Z])', 'g');
    return maskSeperator.test(event.key);
  }

  removeSpaceAtBegining(event: any) {
    let temp = true;
    try {
      if (!event.target.value[0].trim()) {
        event.target.value = event.target.value.substring(1).trim();
        temp = false;
      }
    }
    catch (e) {
      temp = false;
    }
    return temp
  }

  unicodeMarathiValidation(event: any) {
    const maskSeperator = new RegExp('[^\u0900-\u0965 ]+', 'm');
    return !maskSeperator.test(event.key);
  }

  alphaNumeric(event: any) {
    const maskSeperator = new RegExp('^([a-zA-Z0-9])', 'g');
    return maskSeperator.test(event.key);
  }

  onlyAlphabates(event: any) {
    const maskSeperator = new RegExp('^([a-zA-Z ])', 'g');
    return maskSeperator.test(event.key);
  }

  noFirstSpaceAllow(event: any) {  // for First Space Not Allow
    if (event.target.selectionStart === 0 && (event.code === 'Space')) {
      event.preventDefault();
    }
  }
  alphaNumericWithSpaces(event: any) {
    const maskSeperator = new RegExp('^([a-zA-Z0-9 ])', 'g');
    return maskSeperator.test(event.key);
  }

  alphaNumericWithSpacesAndSpecChars(event: any) {
    const maskSeperator = new RegExp('^([a-zA-Z0-9 (,)+-@#$_])', 'g');
    return maskSeperator.test(event.key);
  }

  noSpaceAllow(event: any) {  // for All Space Not Allow
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }

  onlyDigitsWithDec(event: any) { //ex. 8.9
    const maskSeperator = new RegExp('^([0-9.])', 'g');
    return maskSeperator.test(event.key);
  }

  singleDotAmount(event: any) {  //ex. 100.50
    if (event.currentTarget.value.split('.').length - 1 == 1 && (event.keyCode == 46)) return false;  // double . not accept
    const maskSeperator = new RegExp('^([0-9.])', 'g');
    return maskSeperator.test(event.key);
  }

  acceptedOnlyNumbers(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
