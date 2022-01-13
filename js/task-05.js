let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value !== "") {
    textOutput.textContent = event.currentTarget.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
});