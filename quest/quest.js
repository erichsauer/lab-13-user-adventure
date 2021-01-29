// import functions and grab DOM elements
import { findById } from '../utils.js';
import quests from '../data.js';
import { generateForm } from './questUtils.js';
import { updateHeaderStats } from '../header.js';

const questTitle = document.querySelector('h2');
const questImage = document.querySelector('section>img');
const questDescription = document.querySelector('section>p');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const currentQuest = findById(quests, questId);

// initialize state

// set event listeners to update state and DOM
updateHeaderStats();

questTitle.textContent = currentQuest.title;
questImage.src = `../assets/${currentQuest.image}`;
questDescription.textContent = currentQuest.description;

generateForm(currentQuest);
