function showTeams(){

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET","mlb.xml",true);
  xmlhttp.send(null);

  xmlhttp.onload = function(){
    var xmlDoc = xmlhttp.responseXML;
    var teams = xmlDoc.getElementsByTagName("TEAM_NAME");

    for(var n = 0; n < teams.length; n++){
      document.getElementById("MLB").innerHTML += teams[n].textContent+ "<br>";
    }
  }
}
