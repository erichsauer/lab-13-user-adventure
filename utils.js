import { QUESTER } from './magicStrings.js';
import { setToLocalStorage } from './localStorageUtils.js';

export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function setNewQuester(formBundle) {
    const newQuester = {
        name: formBundle.get('quester-name'),
        quester: formBundle.get('quester-type'),
        hp: 35,
        gold: 0,
        completed: {},
    };

    setToLocalStorage(QUESTER, newQuester);
}