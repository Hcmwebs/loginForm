const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
let errors = [];

const setErrorFor = (input, err) => {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.innerText = err;
  formGroup.className = 'form-group error';
  errors.push(err);
};
const setSuccessFor = input => {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
};

const isEmail = email => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const resetInputs = () => {
  form.reset();
};

const formValidation = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue) {
    setErrorFor(email, 'Please, Email is required ');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Oops! Please enter a valid email');
  } else {
    setSuccessFor(email);
  }
  if (!passwordValue) {
    setErrorFor(password, 'Please, Password is required ');
  } else {
    setSuccessFor(password);
  }

  if (errors.length === 0) {
    resetInputs();
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  formValidation();
});
