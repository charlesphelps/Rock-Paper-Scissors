let playerScore = 0;
let compScore = 0;
let arr = ["rock", "paper", "scissors"];
let computerSelection;

let getComputerChoice = () => {
    return computerSelection = (arr[(Math.floor(Math.random() * arr.length))])
};
const playerSelection = prompt('Choose what to throw', "").toLowerCase();

let playRound = (playerSelection,computerSelection) => {

    if (playerSelection === computerSelection) {
        // Not logged to console. Draw seems to be broken. Find other way to log, or possibly fix function so computerSelection is working and compScore is logging.
        return playerScore + 0;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return ++compScore;
        } else (computerSelection === "scissors")
            return ++playerScore;
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return ++compScore;
        } else (computerSelection === "rock")
            return ++playerScore;
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return ++compScore;
    } else (computerSelection === "paper")
        return ++playerScore;
    }
};

const game = () => {
    for (let i = 1; i < 6; i++) {
        getComputerChoice();
        playRound(playerSelection,computerSelection);
        console.log("Round "+ i + ": " + playerScore + " to " + compScore + ".");
    }
// compChoice seems to not log a value in function. returns "You win" in five rounds every time.
    if (playerScore > compScore) {
        console.log("you win");
    } else if (playerScore < compScore) {
        console.log("you lose");
    } else {
        console.log("tie");;
    }

    };

    game();

// code below is for validating playRound function
//console.log(playRound(playerSelection, computerSelection));