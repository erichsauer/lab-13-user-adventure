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
