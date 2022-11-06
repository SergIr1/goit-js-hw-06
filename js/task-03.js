const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ==============Вариант 1==================

// const itemEl = document.createElement('li');

// const makeGallaryCard = options => {
//   return options.map(({url, alt}) => {
//     const imgEl = document.createElement('img');
//     imgEl.classList.add('card-set__gallary');
//     imgEl.width = 640;
//     imgEl.src = url;
//     imgEl.alt = alt;

//     return imgEl;
//   });
// }

// const elements = makeGallaryCard(images);

// itemEl.append(...elements);
// // console.log(...elements)

// const itemGallary = document.querySelector('.gallery');
// itemGallary.classList.add('card-set');

// itemGallary.append(itemEl);

// ==============Вариант 1==================


// ==============Вариант 2==================

const makeArrayItemGallaryMarkup = gallarys => {
  return gallarys.map((image) => {
    return image = `<li><img src = ${image.url} alt = ${image.alt.split(' ').join('&#32')} width=640 class = card-set__gallary></li>`;
  }).join('');
}

const arrayGallary = makeArrayItemGallaryMarkup(images);
  
const itemGallary = document.querySelector('.gallery');
itemGallary.classList.add('card-set');

itemGallary.insertAdjacentHTML('afterbegin', arrayGallary);

console.log(itemGallary);

// ==============Вариант 2==================
