import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const { email, message, form } = refs;

const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

function onFormInput(e) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  formData[e.target.name] = e.target.value;
}

function onFormSubmit(e) {
  e.preventDefault();

  if (!email.value || !message.value) {
    alert('всі поля повиннібути заповнені');
  } else {
    e.target.reset();
    formData = {};
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
}

function getValueFromLocalStorage() {
  //const { email, message } = refs;
  email.value = formData.email || '';
  message.value = formData.message || '';
}

getValueFromLocalStorage();