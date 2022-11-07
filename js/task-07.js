const refs = {
    inputScroll: document.querySelector('#font-size-control'),
    spanLable: document.querySelector('#text'),
};

refs.inputScroll.addEventListener('input', onInputChangeColor);

function onInputChangeColor(event) {
    refs.spanLable.style.fontSize = event.currentTarget.value + 'px';
};