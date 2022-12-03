// const input = document.querySelector(`#validation-input`);
// const validLength = Number(input.dataset.length);

// const onInputBlurAdd = event => {
//     if (event.currentTarget.value.length === validLength) {
//         input.classList.add('valid')
//         input.classList.remove('invalid')
//     } else {
//         input.classList.add('invalid')
//         input.classList.remove('valid')
//     }
// };
// input.addEventListener("blur", onInputBlurAdd);



const input = document.querySelector(`#validation-input`);
const validLength = Number(input.dataset.length);

const onInputBlurAdd = event => {
    if (event.currentTarget.value.length === validLength) {
        input.classList.add('valid');
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');     
        }

    } else {
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
        input.classList.add('invalid')  
    }
};
input.addEventListener("blur", onInputBlurAdd);


// function onInputBlurAdd (event) {
//     event.currentTarget.value.length === validLength
//      ? input.classList.add('valid') && input.classList.remove('invalid')
//      : input.classList.remove('valid') && input.classList.add('invalid') ;
// }







// const onInputBlurAdd = event => {
//     if (event.currentTarget.value.length === validLength) {
//         input.classList.add('valid') && input.classList.remove("invalid");
//     } else if (event.currentTarget.value.length !== validLength) {
//         input.classList.add('invalid') && input.classList.remove("valid");
//     }
// };







// document.getElementById("validation-input").onblur = function() { 
//     console.log(this.value.length); 
//     if (this.getAttribute('data-length') > this.value.length) { 
//         this.classList.remove('valid'); 
//         this.classList.add('invalid'); 
// } else { 
//        this.classList.remove('invalid'); 
//        this.classList.add('valid');
// }
// }

// input.addEventListener("blur", onInputBlurAdd);