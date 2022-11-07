const inputs = document.querySelector("#validation-input");
const inputLength = Number(inputs.getAttribute('data-length'));

console.log(inputLength);

inputs.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const input = event.currentTarget;
    // const inputLength = Number(input.dataset.length);

    if (input.value.length === inputLength) {
        input.classList.add('valid');
        input.classList.remove("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
};