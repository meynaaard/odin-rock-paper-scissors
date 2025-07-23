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

const humanScoreEl = document.querySelector(".human-score");
const computerScoreEl = document.querySelector(".computer-score");

const buttons = document.querySelectorAll(".buttons button");

const roundResult = document.querySelector(".round-result");
const gameResult = document.querySelector(".game-result");

function playGame() {
  function handleButtonClick(event) {
    let humanSelection = "";
    const computerSelection = getComputerChoice();

    switch (event.target.id) {
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
        gameResult.textContent = "You win!";
      } else if (humanScore == computerScore) {
        gameResult.textContent = "Draw!";
      } else {
        gameResult.textContent = "You lose!";
      }

      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    }

    humanScoreEl.textContent = humanScore; 
    computerScoreEl.textContent = computerScore;
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
      roundResult.textContent = "Draw!";
    } else if (rules[humanChoice] === computerChoice) {
      roundResult.textContent = `You win! ${capitalize(humanChoice)} 
                                beats ${capitalize(computerChoice)}`;
      humanScore++;
    } else {
      roundResult.textContent = `You lose! ${capitalize(computerChoice)} 
                                beats ${capitalize(humanChoice)}`;
      computerScore++;
    }

    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
}

playGame();
