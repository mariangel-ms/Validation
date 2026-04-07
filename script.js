const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
const USERNAME_REGEX = /^[a-zA-Z0-9]{5,16}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMBER_REGEX = /^\d{7,15}$/;

const countries = document.querySelector("#countries");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phoneCode = document.querySelector("#phone-code");
const number = document.querySelector("#phone");
const confirmPassword = document.querySelector("#confirm-password");
const registerButton = document.querySelector("#boton");

//-----------FUNCIONES-----------

const validarBoton = () => {
  if (username.value === "" || email.value === "" || password.value === "" || number.value === "" || confirmPassword.value === "") {
    registerButton.disabled = true; 
  } else {
    registerButton.disabled = false;
  }
};

[...countries].forEach((country) => {
  country.innerHTML = country.innerHTML.split("(")[0];
});

//VALIDATION
const validation = (element, regex) => {
  const validationTest = regex.test(element.value);

  let information = element.parentElement.querySelector(".information");

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

  validarBoton()
};

countries.addEventListener("input", (event) => {
  const optionSelected = [...event.target.children].find(
    (option) => option.selected,
    countries.classList.add("true")
  );
  console.log(event.target);

  phoneCode.innerHTML = `+ ${optionSelected.value}`;
});


const validationPasswords = () => {
  const information = confirmPassword.parentElement.querySelector(".information");

  if (confirmPassword.value === "") {
    confirmPassword.classList.remove("true", "false");
    information.classList.remove("show-information");
  } 
  else if (password.value === confirmPassword.value) {
    confirmPassword.classList.add("true");
    confirmPassword.classList.remove("false");
   information.classList.remove("show-information");
  } 
  else {
    confirmPassword.classList.add("false");
    confirmPassword.classList.remove("true");
   information.classList.add("show-information");
  }

      validarBoton()
};
//-------------------------------------

//INPUTS
//USERNAME
username.addEventListener("input", () => {
  validation( username, USERNAME_REGEX);
});

//EMAIL
email.addEventListener("input", () => {
  validation( email, EMAIL_REGEX);
});

//PHONE
number.addEventListener("input", () => {
  validation( number, NUMBER_REGEX);
});

//PASSWORD
password.addEventListener("input", () => {
  validation(password, PASSWORD_REGEX);
  validationPasswords();
});

//CONFIRM PASSWORD
confirmPassword.addEventListener("input", () => {
  validationPasswords();
});

registerButton.addEventListener("click", event => {
  event.preventDefault()

  const user = {
    User: username.value,
    Email: email.value,
    Phone: `${phoneCode.innerHTML} ${number.value}`,
    Password: password.value
  }
  console.log(user);

  alert("¡Usuario registrado!");
})
