

function getComputerChoice() {

    let compChoice = Math.floor(((Math.random()) * 100)-1);

    if (compChoice < 33) {
        return "rock";
    } else if (compChoice > 33 && compChoice < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound (playerSelection,computerSelection) {
    console.log(playerSelection);

    if (playerSelection === computerSelection) {
        return "Draw!";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock!";
        } else (computerSelection === "scissors")
            return "You win! Rock beats scissors!";
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper!";
        } else (computerSelection === "rock")
            return "You win! Paper beats rock!";
    }
    
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!";
        } else (computerSelection === "paper")
            return "You win! Scissors beats paper!";
    }

}

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));