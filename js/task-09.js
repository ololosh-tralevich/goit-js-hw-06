const widget = document.querySelector("div.widget");
const colorMessage = document.querySelector("div.widget p span");
const changeColorButton = document.querySelector("div.widget button");

function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  widget.style.backgroundColor = randomColor;
  colorMessage.textContent = randomColor;
  console.log(randomColor);
}

changeColorButton.addEventListener("click", getRandomHexColor);
