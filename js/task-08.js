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
  
  const formData = new FormData(event.currentTarget);

   formData.forEach((password, email) => {
    console.log(`${email}: ${password}`);
  });

  event.currentTarget.reset();
};