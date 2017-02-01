

var hacker = new person();
localStorage.person = JSON.stringify(hacker);
console.log("JSON OBJECT -> "+localStorage.person);

function person(){
  this.FirstName = "Thomas";
  this.LastName = "Anderson";
  this.NickName = "Neo";
  this.BirthDate = "1-21-1985";
  this.Height = "6'1\"";
  this.Weight = "205 lb";
  this.message = function(){
    return this.NickName+"..."+"The Matrix has you...";
  }
}

function viewPerson(){
  var matrixInhabitant = JSON.parse(localStorage.person);
  console.log("Don't call me Mr. "+matrixInhabitant.LastName+".  My name is "+matrixInhabitant.NickName);
  console.log(hacker.message());
  console.log(matrixInhabitant.message());
}
