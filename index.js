const rootEl = document.querySelector(":root");
const logoEl = document.querySelector("#logo");
const textColorEl = document.querySelector("#color");
const btnCopy = document.querySelector("#btn-copy");
const btnGenerate = document.querySelector("#btn-generate");

let color = null;

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
  let colorGenerated = "#";

  for (let i = 0; i < 6; i++) {
    colorGenerated += generateRandomHexChar();
  }

  color = colorGenerated;

  setBackgroundColor(color);
  setTextColor(color);
}

function setBackgroundColor(color) {
  rootEl.style.setProperty("--background", color);
}

function setTextColor(color) {
  textColorEl.textContent = color;
}

function copyColor() {
  if (navigator !== null) {
    navigator.clipboard.writeText(color);
    alert("Copied!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generateLogoColors();
  generateColor();
});

btnCopy.addEventListener("click", copyColor);

btnGenerate.addEventListener("click", generateColor);

document.addEventListener("keypress", evt => {
  const keyCode = evt.code;
  keyCode === "Space" && generateColor();
});