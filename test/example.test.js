import { setNewQuester } from '../utils.js';

const test = QUnit.test;

test('function should take in a form bundle and set new adventurer to localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = JSON.parse(localStorage.getItem('QUESTER'));
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = setNewQuester(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
