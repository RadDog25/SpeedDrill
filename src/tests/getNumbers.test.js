import { getNumbers } from '../helpers/questionAnswered.js';

const iterations = 1;
const cats = ["Addition", "Subtraction", "Multiplication", "Division", "Random"];
const diffs = ["Easy", "Medium", "Hard"];

test('gets good numbers', () => {
    let oldQuestion = "2 + 2 =";
    for(let i = 0, catLength = cats.length; i < catLength; i++) {
        for(let j = 0, diffLength = diffs.length; j < diffLength; j++) { //check all valid input combos
            for (let k = 0; k < iterations; k++) {
                let { question, answers, correctIndex, correctAnswer } = getNumbers(cats[i], diffs[j], oldQuestion);
                expect(question).toMatch(/^[\d]+[\s]+[+-×÷][\s]+[\d]+[\s]+[=]$/); //check that the question generates the string we want
                expect(answers.length).toEqual(4); //returns 4 answers
                expect([0, 1, 2, 3].indexOf(correctIndex)).not.toBe(-1); //correctIndex is 0,1,2, or 3
                expect(answers.indexOf(correctAnswer)).toBe(correctIndex); //correctAnswer matches the correctIndex

                expect(question).not.toBe(oldQuestion); //questions should not repeat itself right way

                oldQuestion = question;
            }
        }
    }
});