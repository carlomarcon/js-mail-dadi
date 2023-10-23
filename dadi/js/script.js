const UserNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
const ComputerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
const UserDice = document.querySelector(".container .dices:first-child");
const ComputerDice = document.querySelector(".computer");
const 


UserDice.innerHTML = "<div class='result'>" + UserNumber + "</div>";
ComputerDice.innerHTML = "<div class='result'>" + ComputerNumber + "</div>";




if (UserNumber == ComputerNumber) {
  document.querySelector("h1").innerHTML = "It's a draw !";
} else if (UserNumber < ComputerNumber) {
  document.querySelector("h1").innerHTML = "Computer wins !";
} else {
  document.querySelector("h1").innerHTML = "User wins !";
}
