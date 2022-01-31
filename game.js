let computerSelection;
let playerSelection = "scissors";
let computerScore = 0;
let playerScore = 0;
let roundWinner = "";

myArray = ["Rock", "Paper", "Scissors"]
function computerPlay() {
    return myArray[Math.floor(Math.random() *  myArray.length)]//[Math.floor(Math.random()*3)]
}
console.log(computerPlay())


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if(
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")
       ){
         computerScore++;
         roundWinner = "Computer";
    }else if(
             (playerSelection == "paper" && computerSelection == "rock") ||
             (playerSelection == "rock" && computerSelection == "scissors") ||
             (playerSelection == "scissors" && computerSelection == "paper")
             ){
         playerScore++;
         roundWinner = "Player";
    }else {
         roundWinner = "Draw!";
    }
}
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore);
console.log(computerScore);
console.log(roundWinner);