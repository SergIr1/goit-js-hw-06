const refs = {
    input: document.querySelector('#name-input'),
    nameLable: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputText);

function onInputText(event) {
        if (event.currentTarget.value === '') {
        return refs.nameLable.textContent = 'Anonymous';
    }
    refs.nameLable.textContent = event.currentTarget.value;
};