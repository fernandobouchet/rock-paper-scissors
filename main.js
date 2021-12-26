const options = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";
  if (playerSelection === "ROCK") {
    if (computerSelection === "SCISSORS") {
      result = "You win! ROCK beats SCISSORS";
    } else if (computerSelection === "PAPER") {
      result = "You Lose! PAPER beats ROCK";
    } else {
      result = "Its a tie";
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
      result = "You win! PAPER beats ROCK";
    } else if (computerSelection === "SCISSORS") {
      result = "You Lose! SCISSORS beats PAPER";
    } else {
      result = "Its a tie";
    }
  } else {
    if (computerSelection === "PAPER") {
      result = "You win! SCISSORS beats PAPER";
    } else if (computerSelection === "ROCK") {
      result = "You Lose! ROCK beats SCISSORS";
    } else {
      result = "Its a tie";
    }
  }
  return result;
}
const result = document.querySelector("#results");
const resultContent = document.createElement("p");
resultContent.className = "result-content";

result.appendChild(resultContent);

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    resultContent.textContent = playRound(button.id);
  });
});
