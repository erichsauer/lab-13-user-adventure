// import functions and grab DOM elements
import { setNewQuester } from './utils.js';
const homeForm = document.querySelector('form');
// initialize state

homeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // create form bundle
    const formData = new FormData(homeForm);
    console.log(homeForm);
    setNewQuester(formData);
    // redirect to map
    window.location.href = './map';
});
