const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;
const USERNAME_REGEX = /^[a-zA-Z0-9]{5,16}$/;
const EMAIL_REGEX =/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm;
const NUMBER_REGEX = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

const countries = document.querySelector('#countries');
const username = document.querySelector("#username");
const information = document.querySelector(".information");
const email = document.querySelector("#email");

[...countries].forEach(country => {
country.innerHTML= country.innerHTML.split('(')[0]
});

let usernameValidation = false;
let emailValidation = false;

information.classList.add("show-information")

//VALIDATION
const validation = (e, validation, element) => {
     if (validation) {
element.classList.add('true');
    element.classList.remove('false');
    information.classList.add("show-information")

  } if(usernameValidation == false) {
    element.classList.add('false');
    element.classList.remove('true');
    information.classList.remove("show-information")
 }
}

//USERNAME
username.addEventListener("input", event => {
 usernameValidation = USERNAME_REGEX.test(event.target.value);
validation(event, usernameValidation, username)

  if(event.target.value == "") {
    username.classList.remove('true');
    username.classList.remove('false');
        information.classList.add("show-information")
 }
})

//EMAIL
email.addEventListener("input", event => {
 emailValidation = EMAIL_REGEX.test(event.target.value);
})