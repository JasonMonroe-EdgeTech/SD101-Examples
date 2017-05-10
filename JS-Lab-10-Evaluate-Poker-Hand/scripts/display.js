
function changeCard(cardNum){
  var imgCard = document.getElementById("card"+cardNum);
  var rank = document.getElementById("selectRank"+cardNum).value;
  var suit = document.getElementById("selectSuit"+cardNum).value;
  imgCard.src = "./images/cards/"+rank+suit+".jpg";
}
