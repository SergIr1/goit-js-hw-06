function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  div: document.querySelector('#boxes'),
  input: document.querySelector('[type=number]'),
  increment: document.querySelector('[data-create]'),
  decrement: document.querySelector('[data-destroy]'),
};

let step = 10;
let width = 30;
let height = 30;

// const render = () => {
//     refs.value.textContent = counterValue;
// };

// const onDecrementClick = () => {
//     counterValue -= 1;
//     render();
// };

// const onIncrementClick = () => {
//     counterValue += 1;
//     render();
// };

// render();

const createBoxes = (amount) => {
  
  amount = refs.input.attributes.step.value;
  for (let i = 0; i < amount; i += 1){
  console.log(amount)
  }



    const newDivEL = document.createElement('div');
  for (let i = 0; i < amount; i += 1) {
    newDivEL.style.width = `${width += amount * step}px`;
    newDivEL.style.height = `${height += amount * step}px`;
  }
    newDivEL.style.backgroundColor = getRandomHexColor();
  
    const marcupEl = refs.div.append(newDivEL);
 
  return marcupEl;

};

const destroyBoxes = (marcupEl = '') => {
  refs.div.innerHTML = marcupEl;
};


refs.increment.addEventListener('click', createBoxes);
refs.decrement.addEventListener('click', () => {
  refs.input.value = '';
  destroyBoxes();
});
