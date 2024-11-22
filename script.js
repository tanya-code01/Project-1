const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const messageEl = document.getElementById("message");

const guess = parseInt(document.getElementById('guess').value);

function rollDice() {
  
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;

}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}
 

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);

  if (guess == rollResult) {
    messageEl.innerHTML = "Correct! You win!";
    messageEl.style.color = "green";
  } else {
    messageEl.innerHTML = `Wrong! The dice showed ${rollResult}. You lost.`;
    messageEl.style.color = "red";
  }

});
