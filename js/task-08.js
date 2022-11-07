const loginForm = document.querySelector('.login-form');
console.log(loginForm);

loginForm.addEventListener('submit', onloginFormSubmit);

function onloginFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    

      if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены.");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};