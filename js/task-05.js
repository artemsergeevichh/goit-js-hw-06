//new 
const textEl = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

textEl.input.addEventListener('input', (event) => {
    event.currentTarget.value === ''
    ?textEl.output.textContent = 'Anonymous'
    :textEl.output.textContent = event.currentTarget.value;
});




//accepted
// const input = document.querySelector('input#name-input');
// const output = document.querySelector('span#name-output');

// console.log(input);
// console.log(output);

// input.addEventListener('input', (event) => {
//     output.textContent = event.currentTarget.value;
//     if (event.currentTarget.value === ``) {
//         output.textContent = `Anonymous`;
//     }
//     console.log(output.textContent)
// });
