const btnMinus = document.querySelector(".button_minus");
const btnPlus = document.querySelector(".button_plus");

let resultValue = document.querySelector("#value");
let counterValue = 0;

btnMinus.addEventListener("click", () => {
    counterValue = counterValue -1;
    console.log(`Clicked minus button: ${counterValue}`);
    resultValue.textContent = counterValue;
});

btnPlus.addEventListener("click", () => {
    counterValue = counterValue + 1;
    console.log(`Clicked plus button: ${counterValue}`);
    resultValue.textContent = counterValue;
});