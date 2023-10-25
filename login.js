const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username.length < 5) {
    displayErrorMessage(usernameInput, "Please enter at least 5 characters.");
    return;
  }

  const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (!passwordPattern.test(password)) {
    displayErrorMessage(
      passwordInput,
      "Password must be at least 8 characters long with at least one special character and one capital letter."
    );
    return;
  }
});

function displayErrorMessage(inputElement, message) {
  const errorDiv = inputElement.nextElementSibling;
  errorDiv.textContent = message;
  errorDiv.style.color = "red";
}

usernameInput.addEventListener("input", function () {
  clearErrorMessage(usernameInput);
});

passwordInput.addEventListener("input", function () {
  clearErrorMessage(passwordInput);
});

function clearErrorMessage(inputElement) {
  const errorDiv = inputElement.nextElementSibling;
  errorDiv.textContent = "";
}
