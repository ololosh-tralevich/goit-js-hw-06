let valueEl = document.querySelector("input#font-size-control");
let textEl = document.querySelector("#text");

textEl.style.fontSize = `${Number(valueEl.value)}px`;

valueEl.addEventListener("input", () => {
    console.log(valueEl.value);
    textEl.style.fontSize = `${Number(valueEl.value)}px`;
});