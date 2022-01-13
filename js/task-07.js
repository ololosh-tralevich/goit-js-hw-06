let valueEl = document.querySelector("input#font-size-control");
let textEl = document.querySelector("#text");

valueEl.addEventListener("input", () => {
    console.log(valueEl.value);
    textEl.style.fontSize = `${Number(valueEl.value)}px`;
});