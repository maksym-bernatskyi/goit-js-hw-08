import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateData();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(`E-mail: ${formData.email}`)
    console.log(`User message: ${formData.message}`)
}

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const outputData = JSON.parse(savedData);

    if (savedData) {
        refs.email.value = outputData.email;
        refs.textarea.value = outputData.message;
    }
}