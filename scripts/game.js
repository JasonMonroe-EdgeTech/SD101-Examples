var boolImageCycle = true;
var random;
var nPlayerWins = 0;
var nCpuWins = 0;

window.onload = function() {
    setInterval(changeCompChoice, 100);
};


function changeCompChoice() {
    var imgCpuChoice = document.getElementById("imgCpuChoice");

    if (boolImageCycle) {
        random = Math.round(Math.random() * 4 + 1, 0);
        imgCpuChoice.src = getImagePath(random);
    }
}

function playerChose(playerNum) {

    //exit if haven't reset yet.
    if(!boolImageCycle){
      return;
    }

    var imgPlayerChoice = document.getElementById("imgPlayerChoice");
    var declareWinner = document.getElementById("declareWinner");
    var playerScore = document.getElementById("playerScore");
    var cpuScore = document.getElementById("cpuScore");

    boolImageCycle = false;
    imgPlayerChoice.src = getImagePath(playerNum);

    if (random == playerNum) {
        declareWinner.innerHTML = "Click&rarr; Push...Go Again.. &larr;Click";

    }
    else if(random == 1 && playerNum == 2) {
        declareWinner.innerHTML = "Click&rarr; Paper covers rock! You win! &larr;Click";
        nPlayerWins++;
    }
    else if(random == 1 && playerNum == 3) {
        declareWinner.innerHTML = "Click&rarr; Rock crushes scissors..you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 1 && playerNum == 4) {
        declareWinner.innerHTML = "Click&rarr; Rock crushes lizard...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 1 && playerNum == 5) {
        declareWinner.innerHTML = "Click&rarr; Spock vaporizes rock!  You win! &larr;Click";
        nPlayerWins++;
    }
    else if(random == 2 && playerNum == 1) {
        declareWinner.innerHTML = "Click&rarr; Paper covers rock ...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 2 && playerNum == 3){
        declareWinner.innerHTML = "Click&rarr; Scissors cut paper! You win!&larr;Click";
        nPlayerWins++;
    }
    else if(random == 2 && playerNum == 4) {
        declareWinner.innerHTML = "Click&rarr; Lizard eats paper! You win! &larr;Click";
        nPlayerWins++;
    }
    else if(random == 2 && playerNum == 5){
        declareWinner.innerHTML = "Click&rarr; Paper disproves Spock.. you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 3 && playerNum == 1) {
        declareWinner.innerHTML = "Click&rarr; Rock crushes scissors! You win! &larr;Click";
        nPlayerWins++;
    }
    else if(random == 3 && playerNum == 2){
        declareWinner.innerHTML = "Click&rarr; Scissors cut paper...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 3 && playerNum == 4) {
        declareWinner.innerHTML = "Click&rarr; Scissors decapitates lizard...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 3 && playerNum == 5){
        declareWinner.innerHTML = "Click&rarr; Spock smashes scissors! You win! &larr;Click";
        nPlayerWins++;
    }
    else if(random == 4 && playerNum == 1) {
        declareWinner.innerHTML = "Click&rarr; Rock crushes lizard! You win! &larr;Click";
        nPlayerWins++;
    }
    else if(random == 4 && playerNum == 2){
        declareWinner.innerHTML = "Click&rarr; Lizard eats paper...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 4 && playerNum == 3) {
        declareWinner.innerHTML = "Click&rarr; Scissors decapitates lizard! You win. &larr;Click";
        nPlayerWins++;
    }
    else if(random == 4 && playerNum == 5){
        declareWinner.innerHTML = "Click&rarr; Lizard poisons Spock...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 5 && playerNum == 1) {
        declareWinner.innerHTML = "Click&rarr; Spock vaporizes rock...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 5 && playerNum == 2){
        declareWinner.innerHTML = "Click&rarr; Paper disproves Spock! You win! &larr;Click";
        nPlayerWins++;
    }
    else if(random == 5 && playerNum == 3) {
        declareWinner.innerHTML = "Click&rarr; Spock smashes scissors...you lose. &larr;Click";
        nCpuWins++;
    }
    else if(random == 5 && playerNum == 4){
        declareWinner.innerHTML = "Click&rarr; Lizard poisons Spock! You win! &larr;Click";
        nPlayerWins++;
    }

    //display scores
    playerScore.innerHTML = "Player - "+nPlayerWins;
    cpuScore.innerHTML = "Computer - "+nCpuWins;
    declareWinner.style.border = "2px solid green";
}

function playAgain(){
  boolImageCycle = true;
  imgPlayerChoice.src = "./images/userDefault.jpg";
  declareWinner.innerHTML = "&darr;Make a choice below&darr;";
  declareWinner.style.border = "2px solid white";

}

function getImagePath(num){

      switch (num) {
          case 1:
              return "./images/rock.jpg";
          case 2:
              return "./images/paper.jpg";
          case 3:
              return "./images/scissors.jpg";
          case 4:
              return "./images/lizard.jpg";
          case 5:
              return "./images/spock.jpg";
      }
}
