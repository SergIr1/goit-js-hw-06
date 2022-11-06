const refs = {
    decrement: document.querySelector('[data-action=decrement]'),
    increment: document.querySelector('[data-action=increment]'),
    value: document.querySelector('#value')
};

let counterValue = 0;

const render = () => {
    refs.value.textContent = counterValue;
};

const onDecrementClick = () => {
    counterValue -= 1;
    render();
};

const onIncrementClick = () => {
    counterValue += 1;
    render();
};

render();

refs.decrement.addEventListener('click', onDecrementClick);
refs.increment.addEventListener('click', onIncrementClick);