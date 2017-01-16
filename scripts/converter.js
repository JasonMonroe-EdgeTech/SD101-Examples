function changeConversion(degFrom, degTo){
  var spnDegFrom = document.getElementById("spnDegFrom");
  var spnDegTo = document.getElementById("spnDegTo");
  var spnDegResult = document.getElementById("spnDegResult");
  spnDegResult.innerHTML = "?";
  spnDegFrom.innerHTML = degFrom;
  spnDegTo.innerHTML = degTo;
}

function isChecked(rdChecked){
  return rdChecked.checked == true;
}


function convertTemp(){
  //get radio buttons
  var rdChoices = document.getElementsByName("rdConversion");
  var radioId;

  //spans for degree labels and result
  var txtDeg = document.getElementById("txtDeg");
  var spnDegResult = document.getElementById("spnDegResult");

  //loop through array of radio buttons
  for(n = 0 ; n < rdChoices.length; n++){
    if(rdChoices[n].checked){
      radioId = rdChoices[n].id;
      break;
    }
  }

  if (radioId == "rdFtoC"){
    spnDegResult.innerHTML = FtoC(txtDeg.value).toFixed(2);
  }
  else if (radioId == "rdCtoF") {
    spnDegResult.innerHTML = CtoF(txtDeg.value).toFixed(2);
  }
  else if (radioId == "rdFtoK") {
    spnDegResult.innerHTML = FtoK(txtDeg.value).toFixed(2);
  }
  else if (radioId == "rdKtoF") {
    spnDegResult.innerHTML = KtoF(txtDeg.value).toFixed(2);
  }
  else if (radioId == "rdCtoK") {
    spnDegResult.innerHTML = CtoK(txtDeg.value).toFixed(2);
  }
  else if (radioId == "rdKtoC") {
    spnDegResult.innerHTML = KtoC(txtDeg.value).toFixed(2);
  }
  else {
    spnDegResult.innerHTML = "";
  }
}

function FtoC(DegF){
  return (DegF-32)*5/9;
}

function CtoF(DegC){
  return DegC*9/5+32;
}

function CtoK(DegC){
  return parseInt(DegC)+273.15;
}

function KtoC(DegK){
  return DegK-273.15;
}


function FtoK(DegF){
  return ((DegF-32)*5/9)+273.15;
}

function KtoF(DegK){
  return (DegK-273.15)*9/5+32;
}
