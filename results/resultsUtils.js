import questData from '../data.js';

export function evaluateResults(user) {

    let completedAllQuests = true;

    for (const quest of questData) {
        if (!user.completed[quest.id]) {
            completedAllQuests = false;
        } 
    }
    
    if (completedAllQuests) {
        return `Congratulations, ${user.name}! You completed all three quests! You ended with ${user.hp} health points and ${user.gold} gold!`;
    }
    return `Well, ${user.name}, brave ${user.quester}, you didn't quite get out alive, but you managed to finish with ${user.gold} in the bank!`;
}