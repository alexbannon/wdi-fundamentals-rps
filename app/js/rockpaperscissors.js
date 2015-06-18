var computerMove;
var playerMove;
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    playerMove = prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerMove = "rock";
    } else if (randomNumber < 0.66) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
}
function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}
var winner;
function getWinner(playerMove,computerMove) {
    if(playerMove === computerMove) {
      winner = "tie";
    }
    else if (playerMove === "rock") {
      if (computerMove === "scissors") {
        winner = "player";
      }
      else {
        winner = "computer";
      }
    }
    else if (playerMove === "scissors") {
      if (computerMove === "rock") {
        winner = "computer";
      }
      else {
        winner = "player";
      }
    }
    else {
      if (computerMove === "rock") {
        winner = "player";
      }
      else {
        winner = "computer";
      }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    do {
      getPlayerMove();
      getComputerMove();
      getWinner(playerMove, computerMove);
      if (winner === "tie") {
        console.log("Tie Game! On to the next game...");
      }
      else if(winner === "computer") {
        computerWins++;
        console.log("Computer won! Your score is " + playerWins + " to the computer's " + computerWins);
      }
      else {
        playerWins++;
        console.log("You won! Your score is " + playerWins + " to the computer's " + computerWins);
      }
    }
    while(playerWins < 5 && computerWins < 5);
    return [playerWins, computerWins];
}
playToFive();
