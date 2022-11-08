function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

const changeBodyBgrColor = (event) => {
  refs.body.style.backgroundColor = getRandomHexColor(event);
  refs.span.textContent = getRandomHexColor(event);

};

refs.btn.addEventListener('click', changeBodyBgrColor);