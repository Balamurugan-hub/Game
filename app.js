const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerchoice();
    getResult();
  })
);

function generateComputerchoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissor";
  }

  if (randomNumber === 3) {
    computerChoice = "papper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw";
  }
  if (computerChoice === "rock" && userChoice === "papper") {
    result = "U win";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "U lost";
  }
  if (computerChoice === "papper" && userChoice === "rock") {
    result = "U lost";
  }
  if (computerChoice === "papper" && userChoice === "scissor") {
    result = "U win";
  }
  if (computerChoice === "scissor" && userChoice === "papper") {
    result = "U lost";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "U win";
  }
  resultDisplay.innerHTML = result;
}
