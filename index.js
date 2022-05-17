const rootEl = document.querySelector(":root");
const logoEl = document.querySelector("#logo");
const textColorEl = document.querySelector("#color");
const btnGenerate = document.querySelector("#btn-generate");

function generateLogoColors() {
  const colors = ["red", "yellow", "green", "tomato", "purple", "blue"];
  const text = "colors";

  let html = text.split("").map((el, i) => {
    return `<span style="color: ${colors[i]}">${el}</span>`;
  });

  logoEl.innerHTML = html.join("");
}

function generateRandomHexChar() {
  let characters = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

function generateColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += generateRandomHexChar();
  }

  setBackgroundColor(color);
  setTextColor(color);
}

function setBackgroundColor(color) {
  rootEl.style.setProperty("--background", color);
}

function setTextColor(color) {
  textColorEl.textContent = color;
}

document.addEventListener("DOMContentLoaded", () => {
  generateLogoColors();
  generateColor();
});

btnGenerate.addEventListener("click", generateColor);
