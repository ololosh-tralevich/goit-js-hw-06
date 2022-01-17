let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value.length !== 0) {
   return textOutput.textContent = event.currentTarget.value;
  } 
    textOutput.textContent = "Anonymous";
  });
