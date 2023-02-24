import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  email: document.querySelector('.feedback-form  input'),
};

const formData = {};

const LOCAL_STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
refs.email.addEventListener('input', throttle(onTextareaInput, 1000));

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY, JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
}

function onTextareaInput(event) {
  formData.email = refs.email.value;
  formData.textarea = refs.textarea.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  
  if (savedMessage) {
    refs.textarea.value = savedMessage.textarea;
    refs.email.value = savedMessage.email;
  }
}

populateTextarea();

refs.form.style.backgroundColor = '#8C8C8C';
refs.email.style.border = '2px solid #1D1D1D';
refs.email.style.borderRadius = '5px';
refs.email.style.backgroundColor = '#D6E7EA';
refs.textarea.style.border = '2px solid #1D1D1D';
refs.textarea.style.borderRadius = '5px';
refs.textarea.style.backgroundColor = '#D6E7EA';
document.querySelector('button').style.border = '2px solid #EEF5F6';
document.querySelector('button').style.borderRadius = '5px';
document.querySelector('button').style.backgroundColor = '#30575E';
document.querySelector('button').style.color = '#EEF5F6';
