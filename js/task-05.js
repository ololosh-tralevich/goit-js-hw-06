let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value.length !== 0) {
    textOutput.textContent = event.currentTarget.value;
    console.log(textInput.value.length);
  } else {
    textOutput.textContent = "Anonymous";
  }
});
