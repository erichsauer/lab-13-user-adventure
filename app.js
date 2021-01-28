// import functions and grab DOM elements
import { setToLocalStorage } from './localStorageUtils.js';
import { QUESTER } from './magicStrings.js';
const homeForm = document.querySelector('form');
// initialize state

// set event listeners to update state and DOM
homeForm.addEventListener('submit', (e) => {
    // stop ancient tech!
    e.preventDefault();
    // on submit, go make this bundle
    const formData = new FormData(homeForm);
    // the form data lives here! extract with .get( )
    const newQuester = {
        name: formData.get('quester-name'),
        quester: formData.get('quester-type'),
        hp: 35,
        gold: 0,
        completed: {},
    };

    setToLocalStorage(QUESTER, newQuester);
});
