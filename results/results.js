// import functions and grab DOM elements
import { updateHeaderStats } from '../header.js';
import { getFromLocalStorage } from '../localStorageUtils.js';
import { QUESTER } from '../magicStrings.js';
import { evaluateResults } from './resultsUtils.js';

const user = getFromLocalStorage(QUESTER);
const resultsP = document.querySelector('section>p');
const results = evaluateResults(user);

const playAgain = document.createElement('button');

updateHeaderStats();

playAgain.textContent = 'Play again?';
playAgain.addEventListener('click', () => {
    localStorage.setItem(QUESTER, '');
    window.location.href = '../';
});

resultsP.textContent = results;
resultsP.append(playAgain);
