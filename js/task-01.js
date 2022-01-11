
console.log(`Number of categories: ${document.querySelectorAll('li.item').length}`);

console.log(`Category: ${document.querySelector('li.item').firstElementChild.textContent}`);
console.log(`Elements: ${document.querySelector('li.item ul').childElementCount}`);

console.log(`Category: ${document.querySelectorAll('li.item')[1].firstElementChild.textContent}`);
console.log(`Elements: ${document.querySelectorAll('li.item ul')[1].childElementCount}`);

console.log(`Category: ${document.querySelectorAll('li.item')[2].firstElementChild.textContent}`);
console.log(`Elements: ${document.querySelectorAll('li.item ul')[2].childElementCount}`);
