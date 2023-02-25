//new
const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    input.classList.remove('valid', 'invalid'); 

    event.currentTarget.value.length === Number(input.dataset.length) 
    ? input.classList.toggle('valid')
    : input.classList.toggle('invalid')      
});



//accepted
// const input = document.querySelector(`#validation-input`);
// const validLength = Number(input.dataset.length);

// const onInputBlurAdd = event => {
//     input.classList.remove('valid', 'invalid'); 
//     const className = event.currentTarget.value.length === validLength ? 'valid' : 'invalid'
//         input.classList.add(className);
        

// };
// input.addEventListener("blur", onInputBlurAdd);
