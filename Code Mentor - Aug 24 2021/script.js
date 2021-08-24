const form = document.getElementById("form");
const firstName = document.getElementById("first name");
const lastName = document.getElementById("last name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Load Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([firstName, lastName, email, password]);
  checkLength(firstName, 3, 15);
  checkLength(lastName, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Looks like this is not an email");
  }
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getInputField(input)} cannot be empty`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.trim() === "") {
    showError(input, `${getInputField(input)} cannot be empty`);
  } else if (input.value.length < min) {
    showError(
      input,
      `${getInputField(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getInputField(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get input field name
function getInputField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
