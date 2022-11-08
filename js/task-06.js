const inputEl = document.getElementById("validation-input");

const inputBlur = () => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
};
inputEl.addEventListener("blur", inputBlur);