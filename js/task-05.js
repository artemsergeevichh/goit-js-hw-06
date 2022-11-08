const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

console.log(input);
console.log(output);

input.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ``) {
        output.textContent = `Anonymous`;
    }
    console.log(output.textContent)
});
