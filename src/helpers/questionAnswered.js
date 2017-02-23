//used in playStateReducer
export function getStyles(correctIndex, userIndex) {
    /* make the users answer blink red if incorrect and blink the correct answer green */
    let newButtonStyles = ["", "", "", ""];
    if (correctIndex !== userIndex) {
        newButtonStyles[userIndex] = "myIncorrect";
    }
    newButtonStyles[correctIndex] = "myCorrect";

    return newButtonStyles;
}

//used in playStateReducer
export function getTimerStyle({ isCorrect, currentAnswerTime, averageAnswerTime }) {
    let target = 10; //for the first question the target is 10s
    if (!isCorrect) {
        return ""; //if not correct dont change any styling
    }
    if (averageAnswerTime) { //if averageAnswerTime is not zero then proceed normally
        return currentAnswerTime < averageAnswerTime ? "myCorrect" : "myIncorrect";
    } //otherwise compare to target for first question;
    return currentAnswerTime < target ? "myCorrect" : "myIncorrect";
}

//used in playStateReducer, brains behind question generation here
export function getNumbers(category, difficulty) {
    //map our category and difficulty to practical values
    let symbol = {
        "Addition": "+",
        "Subtraction": "-",
        "Multiplication": "×",
        "Division": "÷",
        "Random": ["+", "-", "×", "÷"][Math.floor(4 * Math.random())], //this line maps "Random" to a random operator
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
        case "×":
            return getAnswers("×", x, y, x * y, Math.max(x, y) * Math.max(x, y));
        //the case below handles division
        case "÷":
            return getAnswers("÷", x * y, x, y, max);
        default:
            return "not a valid category";
    }
}