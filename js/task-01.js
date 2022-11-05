
const nawEl = document.querySelectorAll('.item');

const totalCatigories = `Number of categories: ${nawEl.length}`;

console.log(totalCatigories);


const titleEl = document.querySelectorAll('.item')

titleEl.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
});