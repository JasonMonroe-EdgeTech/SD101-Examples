var values = [5,0,3,2];

var nAmount;

for(var n = 0 ; n <values.length; n++){

   nAmount+=values[n];

}

console.log(nAmount);

var message = "Go hang a salami, I'm a lasagna hog.";

console.log(message.substr(3,6));

var d = new Date();
    d.setTime(d.getTime() + (5*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "name=Neo;" + expires + ";path=/";

function getCookie(){
console.log(decodeURIComponent(document.cookie));
}
