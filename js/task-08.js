//new
const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, el =>{
   el.preventDefault()

const data = {
   email: el.currentTarget.email.value,
   password: el.currentTarget.password.value
}

data.email === '' || data.password === ''
   ? alert(`Астанавитесь!!!`)
   : console.log(data) 

   el.currentTarget.reset()
});


//accepted
// const login = document.querySelector(`.login-form`)
// login.addEventListener(`submit`, el =>{

// el.preventDefault()

// const data = {
//  email: el.currentTarget.elements.email.value,
//  password: el.currentTarget.elements.password.value
// }
// if (data.email.trim() === `` || data.password.trim() === ``) {
//  return alert(`Астанавитесь!!!`)
// } else {
//  console.log(data) 
//  el.currentTarget.reset()
// }
// });
