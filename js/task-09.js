//new
const tools = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
}


tools.button.addEventListener('click', () => {
  tools.body.style.backgroundColor = getRandomHexColor();
  tools.color.textContent = name;
});


let name = '';

function getRandomHexColor() {
  return name =`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




//accepted
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const buttonColor = document.querySelector(`.change-color`) 
// const body = document.querySelector(`body`)
// const spanColor = document.querySelector(`.color`)

// buttonColor.addEventListener(`click`, el =>{
// const color = getRandomHexColor();
// body.style.backgroundColor = color;
// spanColor.textContent = color;

// });
