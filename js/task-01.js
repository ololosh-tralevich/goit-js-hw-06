console.log(
  `Number of categories: ${document.querySelectorAll("li.item").length}`
);

const list = document.querySelectorAll("li.item");

for (let item of list) {
  const categoryName = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements}`);
}
