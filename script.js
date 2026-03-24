const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,16}$/gm;
const USERNAME_REGEX = /^[a-zA-Z0-9]{5,16}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMBER_REGEX = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

const countries = document.querySelector("#countries");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phoneCode = document.querySelector("#phone-code");
const number = document.querySelector("#phone");
const confirmPassword = document.querySelector("#confirm-password");

[...countries].forEach((country) => {
  country.innerHTML = country.innerHTML.split("(")[0];
});

//VALIDATION
const validation = (event, element, regex) => {
  const validationTest = regex.test(element.value);
  console.log(element.value);

  //eto tengo que leerlo bien
  let information = element.parentElement.querySelector(".information");
  information = element.parentElement.children[2];
  //---

  if (validationTest) {
    element.classList.add("true");
    element.classList.remove("false");
    information.classList.remove("show-information");
  }
  if (validationTest == false) {
    element.classList.add("false");
    element.classList.remove("true");
    information.classList.add("show-information");
  }

  if (element.value == "") {
    element.classList.remove("true");
    element.classList.remove("false");
    information.classList.remove("show-information");
  }
};

countries.addEventListener("input", (event) => {
  const optionSelected = [...event.target.children].find(
    (option) => option.selected,
  );
  console.log(optionSelected);

  phoneCode.innerHTML = `+ ${optionSelected.value}`;
});

//USERNAME
username.addEventListener("input", (event) => {
  validation(event, username, USERNAME_REGEX);
});

//EMAIL
email.addEventListener("input", (event) => {
  validation(event, email, EMAIL_REGEX);
});

//PHONE
number.addEventListener("input", (event) => {
  validation(event, number, NUMBER_REGEX);
});

//PASSWORD
password.addEventListener("input", (event) => {
  validation(event, password, PASSWORD_REGEX);

 if (password.value !== confirmPassword.value) {
   confirmPassword.classList.add("false");
   confirmPassword.classList.remove("true");
       information.classList.add("show-information");
  }

   if (password.value == confirmPassword.value) {
   confirmPassword.classList.add("true");
   confirmPassword.classList.remove("false");
       information.classList.remove("show-information");
 }
});

confirmPassword.addEventListener("input", (event) => {
    validation(event, confirmPassword, PASSWORD_REGEX);
 if (password.value == confirmPassword.value) {
   confirmPassword.classList.add("true");
   confirmPassword.classList.remove("false");
       information.classList.remove("show-information");
 }

 if (password.value !== confirmPassword.value) {
   confirmPassword.classList.add("false");
   confirmPassword.classList.remove("true");
       information.classList.add("show-information");
  }
});
