//new
const counterEl = {
    value: document.querySelector('#value'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
}

let counterValue = 0;

counterEl.decrement.addEventListener('click', () => {
    counterValue -= 1;
    counterEl.value.textContent = counterValue;
});

counterEl.increment.addEventListener('click', () => {
    counterValue += 1;
    counterEl.value.textContent = counterValue;
});

counterEl.value.textContent = counterValue;



//accepted

// const number = document.querySelector('#value');
// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');

// let counterValue = 0

// function onDecrementClick(){

// counterValue -=1
// number.textContent = counterValue
// }

// function onIncrementClick(){
//  counterValue +=1
//  number.textContent = counterValue
//  }

// decrement.addEventListener(`click`, onDecrementClick)

// increment.addEventListener(`click`, onIncrementClick)

