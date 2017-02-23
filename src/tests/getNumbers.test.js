import { getNumbers } from '../helpers/questionAnswered.js';

/* input is category, difficulty (ex 'Subtraction', 'Medium') */
/* output looks like {question, answers, correctIndex, correctAnswer} */


it('gets good numbers', () => {
    ["Addition", "Subtraction", "Multiplication", "Division", "Random"].forEach( (cat) => {
        ["Easy", "Medium", "Hard"].forEach( (diff) => { //check all valid input combos
            let { question, answers, correctIndex, correctAnswer } = getNumbers(cat, diff); 
            expect( /^[\d]+[\s]+[+-×÷][\s]+[\d]+[\s]+[=]$/.test(question) ).toEqual(true); //check that the question generates the string we want
            expect(answers.length).toEqual(4); //returns 4 answers
            expect([0,1,2,3].indexOf(correctIndex) !== -1).toEqual(true); //correctIndex is 0,1,2, or 3
            expect(answers.indexOf(correctAnswer) === correctIndex).toEqual(true); //correctAnswer matches the correctIndex
        });
    });
});