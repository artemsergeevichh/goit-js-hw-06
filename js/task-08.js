const login = document.querySelector(`.login-form`)
login.addEventListener(`submit`, el =>{

el.preventDefault()

const data = {
 email: el.currentTarget.elements.email.value,
 password: el.currentTarget.elements.password.value
}
if (data.email.trim() === `` || data.password.trim() === ``) {
 return alert(`Астанавитесь!!!`)
} else {
 console.log(data) 
 el.currentTarget.reset()
}
});
