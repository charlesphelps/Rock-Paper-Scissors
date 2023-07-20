let playerScore = 0;
let compScore = 0;

function getComputerChoice() {

    let compChoice = Math.floor(((Math.random()) * 100)-1);
    //compChoice algorithm is working
    console.log(compChoice);

    if (compChoice < 33) {
        return "rock";
    } else if (compChoice > 33 && compChoice < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (playerSelection,computerSelection) {

    if (playerSelection === computerSelection) {
        // Not logged to console. Draw seems to be broken. Find other way to log, or possibly fix function so computerSelection is working and compScore is logging.
        return console.log("Draw");
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return ++compScore;
        } else (computerSelection === "scissors")
            return ++playerScore;
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log(computerSelection);
            return ++compScore;
        } else (computerSelection === "rock")
            return ++playerScore;
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log(computerSelection);
            return ++compScore;
    } else (computerSelection === "paper")
        console.log(computerSelection);
        return ++playerScore;
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw', "").toLowerCase();
        const computerSelection = getComputerChoice;
        playRound(playerSelection,computerSelection)
        console.log(playerScore + " to " + compScore)
    }
// compChoice seems to not log a value in function. returns "You win" in five rounds every time.
    if (playerScore > compScore) {
        console.log("You win");
    } else if (playerScore < compScore) {
        console.log("You lose");
    } else {
        console.log("tie");;
    }

    };

    game();

// code below is for validating playRound function
//console.log(playRound(playerSelection, computerSelection));

