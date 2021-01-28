// import functions and grab DOM elements
import questData from '../data.js';

const ul = document.querySelector('ul');
// initialize state

// set event listeners to update state and DOM
for (const quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = quest.title;
    //magic url stuff
    a.href = `../quest/?id=${quest.id}`;

    li.append(a);
    ul.append(li);
}
