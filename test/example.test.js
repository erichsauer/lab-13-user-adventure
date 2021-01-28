import { QUESTER } from '../magicStrings.js';
import { updateUserStats } from '../quest/questUtils.js';
import { evaluateResults } from '../results/resultsUtils.js';
import { setNewQuester } from '../utils.js';

const test = QUnit.test;

test('function should take in a form bundle and set new adventurer to localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const form = new FormData();
    form.append('quester-name', 'erich');
    form.append('quester-type', 'quester-2');
    setNewQuester(form);
    const actual = JSON.parse(localStorage.getItem('QUESTER'));
    
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = {
        name: 'erich',
        quester: 'quester-2',
        hp: 35,
        gold: 0,
        completed: {},
    };


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('function should take in a user object, a choice object and currentQuest object and update user object in localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        name: 'erich',
        quester: 'quester-2',
        hp: 35,
        gold: 0,
        completed: {},
    };
    const choice = {
        hp: -10,
        gold: 20,
    };
    const currentQuest = { id: 'monsters' };
    updateUserStats(user, choice, currentQuest);
    const actual = JSON.parse(localStorage.getItem('QUESTER'));
    
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = {
        name: 'erich',
        quester: 'quester-2',
        hp: 25,
        gold: 20,
        completed: {
            monsters: true
        },
    };


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('function should load user from localStorage and evaluate results', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        name: 'erich',
        quester: 'quester-2',
        hp: 0,
        gold: 30,
        completed: { monsters: true, dragon: true },
    };
    JSON.stringify(localStorage.setItem(QUESTER, user));
    const actual = evaluateResults(user);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = `Well, erich, brave quester-2, you didn't quite get out alive, but you managed to finish with 30 in the bank!`;


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
