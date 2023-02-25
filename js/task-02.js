const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//new
const ingredientsEl = document.querySelector('#ingredients');

const makeEl = ingredients.map(element => {
  const addEl = document.createElement('li');
  addEl.textContent = `${element}`;
  addEl.classList.add('item');
  return addEl;
})

ingredientsEl.prepend(...makeEl);




//accepted

// const list = document.querySelector("#ingredients");
// const makeElementLi = (element) => {
//   const newLi = document.createElement("li");
//   newLi.textContent = element;
//   newLi.classList.add("item");
//   return newLi;
// };
// const listItems = ingredients.map(makeElementLi);
// list.append(...listItems);
