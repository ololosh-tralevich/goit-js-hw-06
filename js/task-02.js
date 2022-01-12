const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ulElement = document.querySelector('ul#ingredients');

const liArr = ingredients.map(ingredient => {
  let liElement = document.createElement("li");
  liElement.className = "item";
  liElement.textContent = ingredient;
  
  return liElement;
});

ulElement.append(...liArr);
