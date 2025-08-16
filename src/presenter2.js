import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero-mult");
const second = document.querySelector("#segundo-numero-mult");
const form = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado2-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});