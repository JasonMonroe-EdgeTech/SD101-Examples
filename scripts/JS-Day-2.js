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

function calcFinalGrade(){

  var runningTotal = 0;
  var numberOfGrades = 0;
  var grade = parseInt(prompt("Enter a score. Click Cancel or type a letter to exit"));
  var spnFinalGrade = document.getElementById("spnFinalGrade");

  //loop until user types E.
  while (!isNaN(grade)) {
    runningTotal = runningTotal + grade;
    numberOfGrades++;
    console.log(runningTotal);
    console.log(numberOfGrades);
    var grade = parseInt(prompt("Enter another score or to calculate a final grade, click Cancel or type a letter"));
  }

  //display results
  spnFinalGrade.innerHTML = "The Student's Final percentage = "+(runningTotal/numberOfGrades).toFixed(2);
}


function displayState(strState){
  spnResult = document.getElementById("spnResult");

  switch (strState) {
    case "AL": spnResult.innerHTML = "Alabama"; break;
	  case "AK": spnResult.innerHTML = "Alaska"; break;
  	case "AZ": spnResult.innerHTML = "Arizona"; break;
  	case "AR": spnResult.innerHTML = "Arkansas"; break;
  	case "CA": spnResult.innerHTML = "California"; break;
  	case "CO": spnResult.innerHTML = "Colorado"; break;
  	case "CT": spnResult.innerHTML = "Connecticut"; break;
  	case "DE": spnResult.innerHTML = "Delaware"; break;
  	case "DC": spnResult.innerHTML = "District Of Columbia"; break;
  	case "FL": spnResult.innerHTML = "Florida"; break;
  	case "GA": spnResult.innerHTML = "Georgia"; break;
  	case "HI": spnResult.innerHTML = "Hawaii"; break;
  	case "ID": spnResult.innerHTML = "Idaho"; break;
  	case "IL": spnResult.innerHTML = "Illinois"; break;
  	case "IN": spnResult.innerHTML = "Indiana"; break;
  	case "IA": spnResult.innerHTML = "Iowa"; break;
  	case "KS": spnResult.innerHTML = "Kansas"; break;
  	case "KY": spnResult.innerHTML = "Kentucky"; break;
  	case "LA": spnResult.innerHTML = "Louisiana"; break;
  	case "ME": spnResult.innerHTML = "Maine"; break;
  	case "MD": spnResult.innerHTML = "Maryland"; break;
  	case "MA": spnResult.innerHTML = "Massachusetts"; break;
  	case "MI": spnResult.innerHTML = "Michigan"; break;
  	case "MN": spnResult.innerHTML = "Minnesota"; break;
  	case "MS": spnResult.innerHTML = "Mississippi"; break;
  	case "MO": spnResult.innerHTML = "Missouri"; break;
  	case "MT": spnResult.innerHTML = "Montana"; break;
  	case "NE": spnResult.innerHTML = "Nebraska"; break;
  	case "NV": spnResult.innerHTML = "Nevada"; break;
  	case "NH": spnResult.innerHTML = "New Hampshire"; break;
  	case "NJ": spnResult.innerHTML = "New Jersey"; break;
  	case "NM": spnResult.innerHTML = "New Mexico"; break;
  	case "NY": spnResult.innerHTML = "New York"; break;
  	case "NC": spnResult.innerHTML = "North Carolina"; break;
  	case "ND": spnResult.innerHTML = "North Dakota"; break;
  	case "OH": spnResult.innerHTML = "Ohio"; break;
  	case "OK": spnResult.innerHTML = "Oklahoma"; break;
  	case "OR": spnResult.innerHTML = "Oregon"; break;
  	case "PA": spnResult.innerHTML = "Pennsylvania"; break;
  	case "RI": spnResult.innerHTML = "Rhode Island"; break;
  	case "SC": spnResult.innerHTML = "South Carolina"; break;
  	case "SD": spnResult.innerHTML = "South Dakota"; break;
  	case "TN": spnResult.innerHTML = "Tennessee"; break;
  	case "TX": spnResult.innerHTML = "Texas"; break;
  	case "UT": spnResult.innerHTML = "Utah"; break;
  	case "VT": spnResult.innerHTML = "Vermont"; break;
  	case "VA": spnResult.innerHTML = "Virginia"; break;
  	case "WA": spnResult.innerHTML = "Washington"; break;
  	case "WV": spnResult.innerHTML = "West Virginia"; break;
  	case "WI": spnResult.innerHTML = "Wisconsin"; break;
  	case "WY": spnResult.innerHTML = "Wyoming"; break;
    default: spnResult.innerHTML = ""; break;
        //statements to execute if no matching cases were found

  }


}
