const options = ["ROCK", "PAPER", "SCISSORS"];
let userScore = 0;
let computerScore = 0;

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  let result = "";
  while (userScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
      return `Its a tie! computer choice was ${computerSelection} too!`;
    } else if (
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
      userScore += 1;
      result = "win";
    } else {
      computerScore += 1;
      result = "lose";
    }
    return `You ${result}! computer choice was ${computerSelection}!`;
  }
  return checkResult();
}

function checkResult() {
  winner = "";
  if (userScore === 5) {
    winner = "You";
  } else if (computerScore === 5) {
    winner = "PC";
  }
  return `Final Score! ${winner} win!`;
}
const result = document.querySelector("#results");
const resultContent = document.createElement("p");
resultContent.className = "result-content";
result.appendChild(resultContent);

const userScoreView = document.querySelector("#userScore");
const userScoreContent = document.createElement("p");
userScoreView.appendChild(userScoreContent);

const pcScoreView = document.querySelector("#pcScore");
const pcScoreContent = document.createElement("p");
pcScoreView.appendChild(pcScoreContent);

const btns = document.querySelectorAll("input");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    resultContent.textContent = playRound(button.id);
    userScoreContent.textContent = userScore;
    pcScoreContent.textContent = computerScore;
    checkResult();
  });
});
