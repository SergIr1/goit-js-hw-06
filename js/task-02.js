const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ================Вариант 1==================

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1){
//   // console.log(ingredients[i]);
//   const nawItemsEl = document.createElement('li');
//   nawItemsEl.classList.add('item');
//   nawItemsEl.textContent = ingredients[i];

//   elements.push(nawItemsEl);
// }

// const navItemList = document.querySelector('#ingredients');

// navItemList.append(...elements);

// ================Вариант 1==================

const makeNavItems = items => {
  return items.map(item => {
    const nawItemsEl = document.createElement('li');
    nawItemsEl.classList.add('item');
    nawItemsEl.textContent = item;

    return nawItemsEl;
  });
}

const elements = makeNavItems(ingredients);

const navItemList = document.querySelector('#ingredients');

navItemList.append(...elements);