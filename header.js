import { getFromLocalStorage } from './localStorageUtils.js';
import { QUESTER } from './magicStrings.js';

export function updateHeaderStats() {
    const user = getFromLocalStorage(QUESTER);
    const div = document.querySelector('#game-stats');

    div.textContent = `${user.name} / ${user.quester} / 🖤 ${user.hp} / ⭐️ ${user.gold}`;
}