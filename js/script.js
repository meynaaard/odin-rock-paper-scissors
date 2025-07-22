function getComputerChoice() {
  let randomNumber = (Math.random() * 1);
  let computerChoice;
  if (randomNumber < 1/3 ) {
    computerChoice = "rock";
  } else if (randomNumber < 2/3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
let result = "";

const scoresDiv = document.querySelector(".scores");
const buttons = document.querySelectorAll(".buttons button");
const roundResultDiv = document.querySelector(".round-result");
const gameResultDiv = document.querySelector(".game-result");

function playGame() {
  function handleButtonClick(event) {
    let humanSelection = "";
    const computerSelection = getComputerChoice();

    switch (event.target.className) {
      case "rock":
        humanSelection = "rock";
        break;
      case "paper":
        humanSelection = "paper";
        break;
      case "scissors":
        humanSelection = "scissors";
        break;
    }

    playRound(humanSelection, computerSelection);

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
        gameResultDiv.textContent = "You win!";
      } else if (humanScore == computerScore) {
        gameResultDiv.textContent = "Draw!";
      } else {
        gameResultDiv.textContent = "You lose!";
      }

      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    }

    scoresDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  function playRound(humanChoice, computerChoice) {
    const rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    if (humanChoice === computerChoice) {
      roundResultDiv.textContent = "Draw!";
    } else if (rules[humanChoice] === computerChoice) {
      roundResultDiv.textContent = `You win! ${capitalize(humanChoice)} 
                                beats ${capitalize(computerChoice)}`;
      humanScore++;
    } else {
      roundResultDiv.textContent = `You lose! ${capitalize(computerChoice)} 
                                beats ${capitalize(humanChoice)}`;
      computerScore++;
    }

    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
}

playGame();
