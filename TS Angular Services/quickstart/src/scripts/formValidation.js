window.onload = function() {

    document.getElementById('txtCardNumber').onkeyup =  ccInputMask;
    document.getElementById('txtPhoneNumber').onkeyup = phoneInputMask;

    document.getElementById('frmCheckout').onsubmit = function() {
      if(!isValidEmail()){
        return false;
      }
      else if(!isValidPhone()){
        return false;
      }
      else{
        return true;
      }


  }

}

function isValidEmail(){
  var email = document.getElementById('txtEmail');
  var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.value.search(reEmail)==-1){
    email.style.color = "red";
    return false;
  }
  else{
    return true;
  }
}

function isValidPhone(){
  var phone = document.getElementById('txtPhoneNumber');
  var rePhone = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

  if(rePhone.test(phone.value)){
    return true;
  }
  else{
    phone.style.color = "red";
    return false;
  }

}

function ccInputMask(event){
    var cardNumberTextbox = document.getElementById('txtCardNumber');
    var unMaskedCardNumber = removeCCMask(cardNumberTextbox.value);

    //exit if backspace
    if(event.keyCode == 8){
      return;
    }

    switch (unMaskedCardNumber.length) {
      case 4:
          cardNumberTextbox.value =  unMaskedCardNumber+"-";
          break;
      case 8:
          cardNumberTextbox.value =  unMaskedCardNumber.substr(0, 4) + "-" +  unMaskedCardNumber.substr(4, 4)+"-";
          break;
      case 12:
          cardNumberTextbox.value = unMaskedCardNumber.substr(0, 4) + "-" + unMaskedCardNumber.substr(4, 4) + "-" + unMaskedCardNumber.substr(8, 4)+"-";
          break;
      case 16:
          cardNumberTextbox.value = unMaskedCardNumber.substr(0, 4) + "-" + unMaskedCardNumber.substr(4, 4) + "-" + unMaskedCardNumber.substr(8, 4)+ "-" + unMaskedCardNumber.substr(12, 4);
          break;
  }

}

function removeCCMask(ccInput){
  return ccInput.replace(/-/gi, "");
}

function phoneInputMask(){
    var phoneNumberTextbox = document.getElementById('txtPhoneNumber');
    var unMaskedPhoneNum = removePhoneMask(phoneNumberTextbox.value);

    //exit if backspace
    if(event.keyCode == 8){
      return;
    }

    switch (unMaskedPhoneNum.length) {
        case 3:
            phoneNumberTextbox.value = "("+unMaskedPhoneNum+") ";
            break;
        case 6:
            phoneNumberTextbox.value = "("+unMaskedPhoneNum.substr(0, 3) + ") " + unMaskedPhoneNum.substr(3, 3)+"-";
            break;
        case 10:
            phoneNumberTextbox.value = "("+unMaskedPhoneNum.substr(0, 3) + ") " + unMaskedPhoneNum.substr(3, 3)+"-"+unMaskedPhoneNum.substr(6,4);
            break;
    }
}

function removePhoneMask(phoneInput){
  return phoneInput.replace(/-/g, "").replace(/\(/g, "").replace(/\)/g, "").replace(/ /g,"");
}
