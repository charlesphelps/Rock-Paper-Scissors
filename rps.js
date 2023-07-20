let playerScore = 0;
let compScore = 0;
let arr = ["rock", "paper", "scissors"];
let computerSelection;

let getComputerChoice = () => {
    return computerSelection = (arr[(Math.floor(Math.random() * arr.length))])
};

let playRound = (playerSelection,computerSelection) => {

    if (playerSelection === computerSelection) {
        console.log("draw");
        return playerScore + 0;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("paper beats rock");
            return ++compScore;
        } else (computerSelection === "scissors")
            console.log("rock beats scissors");
            return ++playerScore;
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("scissors beats paper");
            return ++compScore;
        } else (computerSelection === "rock")
            console.log("paper beats rock");
            return ++playerScore;
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("rock beats scissors");
            return ++compScore;
    } else (computerSelection === "paper")
        console.log("scissors beats paper");
        return ++playerScore;
    }
};


const game = () => {
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt('Choose what to throw', "").toLowerCase();
        getComputerChoice();
        playRound(playerSelection,computerSelection);
        console.log("Round "+ i + ": " + playerScore + " to " + compScore + ".");
    }

    if (playerScore > compScore) {
        console.log("you win");
    } else if (playerScore < compScore) {
        console.log("you lose");
    } else {
        console.log("tie");;
    }

    };

    game();