// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const nawEl = document.querySelectorAll('.item');
// for (const x of nawEl) {
//     console.log(x)
// }


const numberCatigories = `Number of categories: ${nawEl.length}`;

console.log(numberCatigories);



const titleEl = document.querySelectorAll('h2');



titleEl.forEach(element => {
    console.log(`Category: ${element.textContent}`);
    // console.log(`Elements: ${element.li}`)
});

// console.log(titleEl.textContent);

const x = nawEl.children;

console.log(x)