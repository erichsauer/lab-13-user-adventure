import { getFromLocalStorage, setToLocalStorage } from '../localStorageUtils.js';
import { QUESTER } from '../magicStrings.js';
import { findById } from '../utils.js';

export function generateForm(currentQuest) {
    const inputForm = document.querySelector('section>form');
    const choiceResultDiv = document.querySelector('section>div');
    const submitChoice = document.createElement('button');
    const backToMap = document.createElement('button');
    const user = getFromLocalStorage(QUESTER);

    for (const choice of currentQuest.choices) {
        const input = document.createElement('input');
        const img = document.createElement('img');
        const label = document.createElement('label');
        
        input.type = 'radio';
        input.name = 'choice';
        input.value = choice.id;
        
        img.src = `../assets/${choice.id}.png`;
        
        label.textContent = choice.description;
        
        label.append(input, img);
        inputForm.append(label);
    }
    submitChoice.textContent = "Let's go!";
    
    inputForm.append(submitChoice);
    
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // create form data bundle
        const formData = new FormData(inputForm);
        // get stuff out of bundle and set it to stuff
        const selectionId = formData.get('choice');
        const choice = findById(currentQuest.choices, selectionId);
        
        updateUserStats(user, choice, currentQuest);
        
        choiceResultDiv.textContent = choice.result;
        inputForm.textContent = '';
        backToMap.textContent = 'Back to map!';
        
        backToMap.addEventListener('click', () => {
            window.location.href = '../map';
        });

        choiceResultDiv.append(backToMap);
    });
}

export function updateUserStats(user, choice, currentQuest) {
    user.hp += choice.hp;
    user.gold += choice.gold;
    user.completed[currentQuest.id] = true;
    
    setToLocalStorage(QUESTER, user);
}
