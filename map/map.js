// import functions and grab DOM elements
import questData from '../data.js';
import { getFromLocalStorage } from '../localStorageUtils.js';
import { QUESTER } from '../magicStrings.js';
import { updateHeaderStats } from '../header.js';

const ul = document.querySelector('ul');
const user = getFromLocalStorage(QUESTER);
// initialize state
let completedAllQuests = true;

// set event listeners to update state and DOM
updateHeaderStats();

for (const quest of questData) {
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    } 
}

if (user.hp <= 0 || completedAllQuests === true) {
    window.location.href = '../results';
} else {

    for (const quest of questData) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (user.completed[quest.id]) {
            a.textContent = `${quest.title} ✔`;
        } else {
            a.textContent = quest.title;
    //magic url stuff
            a.href = `../quest/?id=${quest.id}`;
        }
        li.append(a);
        ul.append(li);
    }}
