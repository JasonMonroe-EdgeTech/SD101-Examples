
function artPiece(id,name, desc, price){
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.price = price;
}


function computeSubtotal(){

    var purchases = [];
    var subtotal = 0;

    purchases[0] = new artPiece(1002,"Persistence of Memory", "3' X 5' poster", 14.99);
    purchases[1] = new artPiece(1003,"Ship With Butterfly Sails", "postcard", 3.99);

    for(var n = 0 ; n < purchases.length; n++){
      subtotal += purchases[n].price;
    }

    document.getElementById('spnSubtotal').innerHTML = "Subtotal: $"+subtotal;
}
