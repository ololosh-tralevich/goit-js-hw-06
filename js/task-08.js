const formEl = document.querySelector("form.login-form");
// const userEmail = formEl.elements.email.value;
// const userPassword = formEl.elements.password;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value
  };

//   console.log(userData);
//   console.log(formEl.elements.email.value);
//   console.log(formEl.elements.password.value);

  // if (login.value === "" || password.value === "") {
  //     alert("Необходимо заполнить все поля!");
  //     return;
  // }

//   console.log(`Login: ${email}, Passord ${password}`);
     console.log(userData);

  // event.currentTarget.reset();
});
