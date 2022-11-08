const lengthControl = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

lengthControl.addEventListener(`input`, el => {

const fontSize = el.currentTarget.value
console.dir(el.currentTarget.value)

text.style.fontSize = `${fontSize}px`

});