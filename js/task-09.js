function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

const changeBodyBgrColor = (event) => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
};

refs.btn.addEventListener('click', changeBodyBgrColor);


// const random_hex_color_code = () => {
//   let n = (Math.random() * 0xfffff * 1000000).toString(16);
//   return '#' + n.slice(0, 6);
// };


  // const color = refs.body.style.backgroundColor;

// function ColorToHex(color) {
//   var hexadecimal = color.toString(16);
//   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
// }

// function ConvertRGBtoHex(red, green, blue) {
//   return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
// }
