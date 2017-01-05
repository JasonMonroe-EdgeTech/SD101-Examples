function displayMultiples(){
  var spnResult = document.getElementById('spnResult');
  for(n=7;n<100;n+=7){
     spnResult.innerHTML += n +" ";
  }
}


function displayFloors(){
  var spnResult = document.getElementById('spnResult');
  for(n=1;n<18;n+=1){
    if(n==13)
      continue;
    spnResult.innerHTML += n +" ";
  }
}
