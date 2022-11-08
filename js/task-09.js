function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector(`.change-color`) 
const body = document.querySelector(`body`)
const spanColor = document.querySelector(`.color`)

buttonColor.addEventListener(`click`, el =>{
body.style.backgroundColor = getRandomHexColor()
spanColor.textContent = getRandomHexColor()

});