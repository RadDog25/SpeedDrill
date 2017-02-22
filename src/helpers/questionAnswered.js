export function getStyles(correctIndex, userIndex) {
    let newButtonStyles = ["", "", "", ""];
    if (correctIndex !== userIndex) {
        newButtonStyles[userIndex] = "myIncorrect";
    }
    newButtonStyles[correctIndex] = "myCorrect";

    return newButtonStyles;
}

export function getNumbers(category, difficulty) {
    //map our category and difficulty to practical values
    let symbol = {
        "Addition": "+",
        "Subtraction": "-",
        "Multiplication": "x",
        "Division": "/"
    }[category];

    let max = {
        "Easy": 6,
        "Medium": 10,
        "Hard": 16
    }[difficulty];

    //this function generates an array of 4, one number of which is the correct one
    let getAnswers = (symbol, x, y, correctAnswer, max) => {
        let answers = [];
        let num = 0; //keep pushing random nums onto our array until the length is 4, then insert the correct answer to a random index
        while (answers.length < 4) {
            num = Math.floor(Math.random() * (max + 1));
            if (answers.indexOf(num) === -1 && num !== correctAnswer) {
                answers.push(num);
            }
        }
        let correctIndex = Math.floor(Math.random() * 4);
        answers[correctIndex] = correctAnswer;
        //return the correct index and the answers
        return {
            question: `${x} ${symbol} ${y} =`,
            answers: answers,
            correctIndex: correctIndex,
            correctAnswer: correctAnswer,
        }
    }

    /* x ? y = z except for divison where z / x = y */
    let x = Math.floor((max - 1) * Math.random()) + 1, y = Math.floor((max - 1) * Math.random()) + 1;
    switch (symbol) {
        case "+":
            return getAnswers("+", x, y, x + y, 2 * max);
        case "-":
        //swap x and y if they would yield negative numbers
            if (x < y) { [x, y] = [y, x] };
            return getAnswers("-", x, y, x - y, max);
        case "x":
            return getAnswers("x", x, y, x * y, max * max);
            //the case below handles division
        default:
            return getAnswers("/", x * y, x, y, max);
    }

}