let playerScore = 0;
let compScore = 0;
let arr = ["rock", "paper", "scissors"];
let computerSelection;
const scoreboard = document.querySelector('#scoreboard');
let score = document.createElement('p');
score.classList.add('score');
score.textContent = `${playerScore} to ${compScore}`;
scoreboard.appendChild(score);
let scoreP = document.createElement('p');
scoreP.classList.add('scoreP');
scoreP.textContent = ' ';
scoreboard.appendChild(scoreP);
let playerCompHands = document.createElement('p');
playerCompHands.classList.add('playerCompHands');
playerCompHands.textContent = ` `;
scoreboard.appendChild(playerCompHands);

scoreboard.style.cssText = 'border: solid; border-color: black; background-color: turquoise;'

let getComputerChoice = () => {
    return computerSelection = (arr[(Math.floor(Math.random() * arr.length))])
};

let playRound = (playerSelection,computerSelection) => {

    if (playerSelection === computerSelection) {
          playerCompHands.textContent = `🤝`;
          scoreboard.appendChild(playerCompHands);
          playerScore + 0;
          score.textContent = `${playerScore} to ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'draw';
          scoreboard.appendChild(scoreP);
          return
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
          ++compScore;
          playerCompHands.textContent = `You: 🤜   Me: 🫱`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'paper beats rock';
          scoreboard.appendChild(scoreP);
          return
        } else (computerSelection === "scissors")
          ++playerScore;
          playerCompHands.textContent = `You: 🤜   Me: ✌️`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'rock beats scissors';
          scoreboard.appendChild(scoreP);
          return
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
          return
        } else (computerSelection === "rock")
          ++playerScore;
          playerCompHands.textContent = `You: 🫱   Me: 🤜`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'paper beats rock';
          scoreboard.appendChild(scoreP);
          return
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
          return 
    } else (computerSelection === "paper")
          ++playerScore;
          playerCompHands.textContent = `You: ✌️   Me: 🫱`;
          scoreboard.appendChild(playerCompHands);
          score.textContent = `Player ${playerScore} to Computer ${compScore}`;
          scoreboard.appendChild(score);
          scoreP.textContent = 'scissors beats paper';
          scoreboard.appendChild(scoreP);
          return
    }
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
    console.log(playerScore + " " + compScore)
  });
});