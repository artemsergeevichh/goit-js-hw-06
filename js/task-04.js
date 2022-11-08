const number = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0

function onDecrementClick(){

counterValue -=1
number.textContent = counterValue
}

function onIncrementClick(){
 counterValue +=1
 number.textContent = counterValue
 }

decrement.addEventListener(`click`, onDecrementClick)

increment.addEventListener(`click`, onIncrementClick)

