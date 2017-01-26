window.onload = computeSubtotal;

function artPiece(id,name, desc, price){
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.price = price;
}


function computeSubtotal(){

    var purchases = [];
    var subtotal = 0;

    //creates new artPiece object instances and stores in purchases array
    purchases[0] = new artPiece(1002,"Persistence of Memory", "3' X 5' poster", 14.99);
    purchases[1] = new artPiece(1003,"Ship With Butterfly Sails", "postcard", 3.99);

    //cycles through array summing price property
    for(var n = 0 ; n < purchases.length; n++){
      subtotal += purchases[n].price;
    }

    //display results
    document.getElementById('spnSubtotal').innerHTML = "Subtotal: $"+subtotal;
}
