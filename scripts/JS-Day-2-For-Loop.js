function displayMultiples(){
  var spnResult = document.getElementById('spnResult');
  for(n=7;n<100;n+=7){
     spnResult.innerHTML += n +" ";
  }
}
