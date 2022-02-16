let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;


let buttons = document.querySelectorAll(".button");
const output = document.querySelector("#results");
const main = document.querySelector("#main");
const header = document.querySelector("#header");
const onclickYesNo = document.querySelector("#anime");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const container = document.querySelector(".container");
const images =document.querySelector(".images")


myArray = ["Rock", "Paper", "Scissors"]
function computerPlay() {
    return myArray[Math.floor(Math.random() *  myArray.length)]//[Math.floor(Math.random()*3)]
}

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);

        if(playerScore === 5 || computerScore === 5){
            onWinning();
            reportWinner();
            resetGame();
       }
    }); 
});

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if(
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ){
        computerScore = ++computerScore;
        keepCS();
        if(
            (computerScore === 1) || (computerScore === 2) ||
            (computerScore === 3) || (computerScore === 4)
            ) {
            display(
                `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`
            );
        }else {
            display(
                `${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`
            );
        }
    }else if(
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore = ++playerScore;
        keepPS();
        if(
            (playerScore === 1) || (playerScore === 2) ||
            (playerScore === 3) || (playerScore === 4)
        ) {
            display(
                `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`
            );
        }else {
            display(
                `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`
            );
        }
    }else{
        display(
            "Draw!!"
        );
    }
}

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function display(str){
    output.textContent = str;
}

function keepPS() {
    let playerScores = document.querySelector("#ps");
    playerScores.textContent = playerScore;
}

function keepCS() {
    let computerScores = document.querySelector("#cs");
    computerScores.textContent = computerScore;
}

const para = document.createElement("p");
para.textContent = "WE HAVE A WINNER!";
para.classList.add("winner");

function onWinning() {
    container.replaceChild(para, images);
}

function reportWinner(){
    if(playerScore > computerScore){
        output.textContent = "Congratulations!You have won the game.";
    }else{
        output.textContent = "Computer wins the game!";
    }
}    


function resetGame() {
    const reset = document.createElement("button");
    reset.textContent = "Play Again!";
    reset.setAttribute("style", "color: white; background: black; border-radius: 15px; cursor: pointer; padding: 10px");
    main.appendChild(reset);
    reset.addEventListener("click", () => {
        container.replaceChild(images, para);
        main.removeChild(reset);
        output.textContent = "";
        playerScore = 0;
        computerScore = 0;
        keepCS();
        keepPS();
    });
}

yes.addEventListener("click", () => {
    header.removeChild(onclickYesNo);
    const instruction = document.createElement("p");
    instruction.textContent = "First with 5 points wins the game. Goodluck!";
    header.appendChild(instruction);
});

let idx = 0;
let guideline = "We have 3 options: Rock, Paper and Scisssor.Rock beats Scissor || Scissor beats Paper || Paper beats Rock.You select 1 option and play a 5 round game against the computer.Each option that beats the other option earns a point for the selector.First with 5 points wins the game! Goodluck!!";
let text = guideline.split(".");

function nextArrayContent(){
    idx++;
    onclickYesNo.style.opacity = 0;
    if(idx > (text.length - 1)) {
        idx = text.length - 1;
    }
    setTimeout("textSlide()", 1000);
}
function textSlide() {
    onclickYesNo.innerHTML = text[idx];
    onclickYesNo.style.opacity = 1;
    setTimeout("nextArrayContent()", 2000);
}
no.addEventListener("click", textSlide);

