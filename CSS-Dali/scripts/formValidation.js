window.onload = function() {
    document.getElementById('frmCheckout').onsubmit = function() {
        return validateForm();
    }

    document.getElementById('txtCardNumber').onkeyup =  ccInputMask;
    document.getElementById('txtPhoneNumber').onkeyup = phoneInputMask;

}

function validateForm() {
    //var document.getElementById('txt')
}

function ccInputMask(event) {


    var cardNumberTextbox = document.getElementById('txtCardNumber');
    var unmaskedCardNum = cardNumberTextbox.value.replace(/-/gi, "");


    if(event.keyCode == 8){
      return;
    }

    switch (unmaskedCardNum.length) {
        case 0:
        case 1:
        case 2:
        case 3:
            break;
        case 4:
            cardNumberTextbox.value = unmaskedCardNum+"-";
            break;
        case 5:
        case 6:
        case 7:
            break;
        case 8:
            cardNumberTextbox.value = unmaskedCardNum.substr(0, 4) + "-" + unmaskedCardNum.substr(4, 4)+"-";
            break;
        case 9:
        case 10:
        case 11:
            break;
        case 12:
            cardNumberTextbox.value = unmaskedCardNum.substr(0, 4) + "-" + unmaskedCardNum.substr(4, 4) + "-" + unmaskedCardNum.substr(8, 4)+"-";
            break;
        case 13:
        case 14:
        case 15:
            break;
        case 16:
            cardNumberTextbox.value = unmaskedCardNum.substr(0, 4) + "-" + unmaskedCardNum.substr(4, 4) + "-" + unmaskedCardNum.substr(8, 4)+ "-" + unmaskedCardNum.substr(12, 4);
            break;

    }

}

function phoneInputMask(event) {
    var phoneNumberTextbox = document.getElementById('txtPhoneNumber');
    var unmaskedPhoneNum = phoneNumberTextbox.value.replace(/-/g, "").replace(/\(/g, "").replace(/\)/g, "").replace(/ /g,"");


    if(event.keyCode == 8){
      return;
    }

    switch (unmaskedPhoneNum.length) {
        case 0:
        case 1:
        case 2:
          break;
        case 3:
            phoneNumberTextbox.value = "("+unmaskedPhoneNum+") ";
            break;
        case 4:
        case 5:
            break;
        case 6:
            phoneNumberTextbox.value = "("+unmaskedPhoneNum.substr(0, 3) + ") " + unmaskedPhoneNum.substr(3, 3)+"-";
            break;
        case 7:
        case 8:
        case 9:
          break;
        case 10:
            phoneNumberTextbox.value = "("+unmaskedPhoneNum.substr(0, 3) + ") " + unmaskedPhoneNum.substr(3, 3)+"-"+unmaskedPhoneNum.substr(6,4);
            break;
    }
}
