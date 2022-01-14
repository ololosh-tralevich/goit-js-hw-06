const formEl = document.querySelector("form.login-form");
// const userEmail = formEl.elements.email.value;
// const userPassword = formEl.elements.password;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };

  if (
    formEl.elements.email.value === "" ||
    formEl.elements.password.value === ""
  ) {
    alert("Необходимо заполнить все поля!");
    return;
  }

  console.log(userData);

  event.currentTarget.reset();
});
