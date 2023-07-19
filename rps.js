

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

// function playRound(playerSelection, computerSelection) {
    // Computer = Rock
    // if (getComputerChoice() = "rock" && playerSelection = "rock") {
        // return "draw";
   // } else if (getComputerChoice() = "rock" && playerSelection = "scissors") {
//        return "computer wins";
  //  } else (getComputerChoice() = "rock" && playerSelection = "paper") {
    //    return "player wins";
    //}

    // Computer = Paper
//    if (getComputerChoice() = "paper" && playerSelection = "paper") {
  //      return "draw";
   // } else if (getComputerChoice() = "paper" && playerSelection = "rock") {
     //   return "computer wins";
 //   } else (getComputerChoice() = "paper" && playerSelection = "scissors") {
   //     return "player wins";
 //   }

    // Computer = Scissors
//    if (getComputerChoice()= "scissors" && playerSelection = "scissors") {
//        return "draw";
//    } else if (getComputerChoice() = "scissors" && playerSelection = "paper") {
//        return "computer wins";
//    } else (getComputerChoice() = "scissors" && playerSelection = "rock") {
//        return "player wins";
//    }
//}

//const playerSelection = toLowerCase("rock");
//const computerSelection = getComputerChoice();
//
//console.log(playRound(playerSelection, computerSelection));