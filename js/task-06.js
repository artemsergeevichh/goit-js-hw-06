const input = document.querySelector(`#validation-input`);
const validLength = Number(input.dataset.length);

input.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    event.currentTarget.value.length === validLength
        ? input.classList.add('valid')
        : input.classList.add('invalid');
};

