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
