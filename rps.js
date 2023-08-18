let playerScore = 0;
let compScore = 0;
let arr = ["rock", "paper", "scissors"];
let computerSelection;
const scoreboard = document.querySelector('#scoreboard');
let score = document.createElement('p');
score.classList.add('score');
score.textContent = `${playerScore} to ${compScore}`;
score.style.cssText = 'display: flex; justify-content: center; font-size: 30px;'
scoreboard.appendChild(score);
let scoreP = document.createElement('p');
scoreP.classList.add('scoreP');
scoreP.textContent = ' ';
scoreP.style.cssText = 'justify-content; center; font-size: 30px;'
scoreboard.appendChild(scoreP);
let playerCompHands = document.createElement('p');
playerCompHands.classList.add('playerCompHands');
playerCompHands.textContent = ` `;
playerCompHands.style.cssText = 'display: flex; justify-content: center; font-size: 40px;'
scoreboard.appendChild(playerCompHands);
let scoreCounter = 0;
let resultMessage = document.createElement('h3');
resultMessage.classList.add('resultMessage');
resultMessage.textContent = ' ';
resultMessage.style.cssText = 'justify-content; center; font-size: 30px;'
scoreboard.style.cssText = 'border: solid; border-color: white; background-color: green; color: white; box-shadow: 0px 10px 5px lightblue;'



let getComputerChoice = () => {
    return computerSelection = (arr[(Math.floor(Math.random() * arr.length))])
};

let scoreCheck = () => {
  if (playerScore > 4) {
      console.log("you win");
  } else if (compScore > 4) {
      console.log("you lose");
  }
}

let playRound = (playerSelection,computerSelection) => {

    if (playerSelection === computerSelection) {
          playerCompHands.textContent = `🤝`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `${playerScore} to ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'draw';
          scoreboard.appendChild(scoreP);
          return;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
          ++scoreCounter;
          ++compScore;
          playerCompHands.textContent = `You: 🤜   Me: 🫱`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'paper beats rock';
          scoreboard.appendChild(scoreP);
            if (compScore > 4) {
              scoreboard.removeChild(score);
              scoreboard.removeChild(scoreP);
              scoreboard.removeChild(playerCompHands);
              resultMessage.textContent = 'you lost';
              scoreboard.appendChild(resultMessage);
              document.getElementById("rock").disabled = true;
              document.getElementById("paper").disabled = true;
              document.getElementById("scissors").disabled = true;
            };
          return;
        } else (computerSelection === "scissors")
          ++playerScore;
          playerCompHands.textContent = `You: 🤜   Me: ✌️`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'rock beats scissors';
          scoreboard.appendChild(scoreP);
            if (playerScore > 4) {
              scoreboard.removeChild(score);
              scoreboard.removeChild(scoreP);
              scoreboard.removeChild(playerCompHands);
              document.querySelector('#playAgainButton');
              scoreboard.appendChild(resetButton);
              resultMessage.textContent = 'you won';
              scoreboard.appendChild(resultMessage);
              document.getElementById("rock").disabled = true;
              document.getElementById("paper").disabled = true;
              document.getElementById("scissors").disabled = true;
            };
          return;
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
          ++compScore;
          playerCompHands.textContent = `You: 🫱   Me: ✌️`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'scissors beats paper';
          scoreboard.appendChild(scoreP);;
            if (compScore > 4) {
              scoreboard.removeChild(score);
              scoreboard.removeChild(scoreP);
              scoreboard.removeChild(playerCompHands);
              resultMessage.textContent = 'you lost';
              scoreboard.appendChild(resultMessage);
              document.getElementById("rock").disabled = true;
              document.getElementById("paper").disabled = true;
              document.getElementById("scissors").disabled = true;
            };
          return;
        } else (computerSelection === "rock")
          ++playerScore;
          playerCompHands.textContent = `You: 🫱   Me: 🤜`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'paper beats rock';
          scoreboard.appendChild(scoreP);
            if (playerScore > 4) {
              scoreboard.removeChild(score);
              scoreboard.removeChild(scoreP);
              scoreboard.removeChild(playerCompHands);
              resultMessage.textContent = 'you won';
              scoreboard.appendChild(resultMessage);
              document.getElementById("rock").disabled = true;
              document.getElementById("paper").disabled = true;
              document.getElementById("scissors").disabled = true;
            };
          return;
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          ++compScore;
          playerCompHands.textContent = `You: ✌️   Me: 🤜`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'rock beats scissors';
          scoreboard.appendChild(scoreP);
            if (compScore > 4) {
              scoreboard.removeChild(score);
              scoreboard.removeChild(scoreP);
              scoreboard.removeChild(playerCompHands);
              resultMessage.textContent = 'you lost';
              scoreboard.appendChild(resultMessage);
              document.getElementById("rock").disabled = true;
              document.getElementById("paper").disabled = true;
              document.getElementById("scissors").disabled = true;
            };
          return;
    } else (computerSelection === "paper")
          ++playerScore;
          playerCompHands.textContent = `You: ✌️   Me: 🫱`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'scissors beats paper';
          scoreboard.appendChild(scoreP);
            if (playerScore > 4) {
              scoreboard.removeChild(score);
              scoreboard.removeChild(scoreP);
              scoreboard.removeChild(playerCompHands);
              resultMessage.textContent = 'you won';
              scoreboard.appendChild(resultMessage);
              document.getElementById("rock").disabled = true;
              document.getElementById("paper").disabled = true;
              document.getElementById("scissors").disabled = true;
            };
          return;
    }
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
    console.log(playerScore + " " + compScore)
  });
});

const resetButton = document.createElement('button');
playerCompHands.classList.add('playAgainButton');
playerCompHands.textContent = 'Play Again';
playerCompHands.style.cssText = 'display: flex; justify-content: center; size: 40px 50px;'
resetButton.forEach((button) => {
    button.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    console.log(playerScore);
  });
});