import { getFromLocalStorage, setToLocalStorage } from '../localStorageUtils.js';
import { QUESTER } from '../magicStrings.js';
import { findById } from '../utils.js';


export function generateForm(currentQuest) {
    const inputForm = document.querySelector('section>form');
    const button = document.createElement('button');
    
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
    button.textContent = "Let's go!";
    
    inputForm.append(button);
    
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // create form data bundle
        const formData = new FormData(inputForm);
        // get stuff out of bundle and set it to stuff
        const selectionId = formData.get('choice');
        const choice = findById(currentQuest.choices, selectionId);
        const user = getFromLocalStorage(QUESTER);

        console.log(selectionId);

        user.hp = user.hp + choice.hp;
        user.gold = user.gold + choice.gold;
    
        setToLocalStorage(QUESTER, user);
    });
}
