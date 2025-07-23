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

const humanChoice = document.getElementById("human-choice"); 
const computerChoice = document.getElementById("computer-choice");

const roundResult = document.getElementById("round-result");
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

  function playRound(humanSelection, computerSelection) {
    const rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    roundResult.classList.remove("alert-info", "alert-success", "alert-danger");
    if (humanSelection === computerSelection) {
      roundResult.textContent = "Draw!";
      roundResult.classList.add("alert-info");
    } else if (rules[humanSelection] === computerSelection) {
      roundResult.textContent = `You win! ${capitalize(humanSelection)} 
                                beats ${capitalize(computerSelection)}`;
      roundResult.classList.add("alert-success");
      humanScore++;
    } else {
      roundResult.textContent = `You lose! ${capitalize(computerSelection)} 
                                beats ${capitalize(humanSelection)}`;
      roundResult.classList.add("alert-danger")
      computerScore++;
    }

    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    humanChoice.textContent = capitalize(humanSelection);
    computerChoice.textContent = capitalize(computerSelection);
  }
}

playGame();
