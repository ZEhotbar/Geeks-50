// DOM - Document Object Model

// const me = {
//     name: "Evgeniy",
//     surname: "Kiselev",
//     salary: 1_000_000
// }

const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.querySelector("#green");
const commandText = document.querySelector("#command");

function turnRed() {
  commandText.textContent = "STOP";
  commandText.style.color = "red";
  redButton.classList.add("active");
}

function offturnRed () {
  commandText.textContent = ""
  redButton.classList.remove("active")
}

redButton.addEventListener("mouseover", turnRed);
redButton.addEventListener("mouseleave",offturnRed);

function turnYellow() {
  commandText.textContent = "WAIT";
  commandText.style.color = "yellow";
  yellowButton.classList.add("active");
}

function offturneYellow () {
  commandText.textContent = ""
  yellowButton.classList.remove("active")
}

yellowButton.addEventListener("mouseover",turnYellow);
yellowButton.addEventListener("mouseleave",offturneYellow);

yellowButton.addEventListener("click", turnYellow);

function turnGreen(){
    commandText.textContent = "GO";
    commandText.style.color = "green";
    greenButton.classList.add("active");
}

function offturnGreen () {
  commandText.textContent = ""
  greenButton.classList.remove("active");
}

greenButton.addEventListener("mouseover",turnGreen);
greenButton.addEventListener("mouseleave",offturnGreen);


