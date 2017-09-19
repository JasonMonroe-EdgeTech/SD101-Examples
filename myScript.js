

function message(){
  var txtName = document.getElementById("txtName");
  var divMessage = document.getElementById("divMessage");

  divMessage.innerHTML = txtName.value+"..."+"<br/>The Matrix has you...";
}
