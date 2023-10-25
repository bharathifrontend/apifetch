// Get input values
const signUpForm = document.querySelector("#signUpForm");
const userName = document.querySelector("#userName");
const email = document.querySelector("#Email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpassword");

signUpForm.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  if (!validateInputs()) {
    event.preventDefault();
  }
});
function validateInputs() {
  const userNameVal = userName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  let success = true;
  if (userNameVal == "") {
    success = false;
    setError(userName, "userName is required");
  } else {
    setSuccess(userName);
  }

  if (emailVal == "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordVal == "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    setError(password, "password must be atleast 8 characters");
  } else {
    setSuccess(password);
  }
  if (cpasswordVal === "") {
    success = false;
    setError(cpassword, "Conform password is required");
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, "password should same");
  } else {
    setSuccess(cpassword);
  }
  return success;
}
function setError(element, message) {
  const formGroup = element.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.innerHTML = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
}
function setSuccess(element, message) {
  const formGroup = element.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.innerHTML = "";
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
