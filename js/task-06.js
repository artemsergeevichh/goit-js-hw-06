const input = document.querySelector(`#validation-input`);
const validLength = Number(input.dataset.length);

const onInputBlurAdd = event => {
    if (event.currentTarget.value.length === validLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
};
input.addEventListener("blur", onInputBlurAdd);