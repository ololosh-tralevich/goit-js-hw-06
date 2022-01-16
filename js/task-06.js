let inputField = document.querySelector("#validation-input");

let lengthValue = Number(inputField.dataset.length);
console.log(lengthValue);

// inputField.addEventListener("blur", () => {
//   if (inputField.value.length !== lengthValue) {
//     inputField.className = "invalid";
//     console.log(inputField.value.length);
//   } else {
//    inputField.className = "valid";
//   }
// });

inputField.addEventListener("blur", () => {
  if (inputField.value.length === lengthValue) {
    return (inputField.className = "valid");
  }
  inputField.className = "invalid";
  console.log(inputField.value.length);
});
