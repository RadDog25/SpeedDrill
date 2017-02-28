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
    const target = 10; //for the first question the target is 10s
    if (!isCorrect) {
        return ""; //if not correct dont change any styling
    }
    if (averageAnswerTime) { //if averageAnswerTime is not zero then proceed normally
        return currentAnswerTime < averageAnswerTime ? "myCorrect" : "myIncorrect";
    } //otherwise compare to target for first question;
    return currentAnswerTime < target ? "myCorrect" : "myIncorrect";
}

//used in playStateReducer, brains behind question generation here
export function getNumbers(category, difficulty, oldQuestion) {
    //map our category and difficulty to practical values
    const symbol = {
        "Addition": "+",
        "Subtraction": "-",
        "Multiplication": "×",
        "Division": "÷",
        "Random": ["+", "-", "×", "÷"][Math.floor(4 * Math.random())], //this line maps "Random" to a random operator
    }[category];

    const max = {
        "Easy": 6,
        "Medium": 10,
        "Hard": 16
    }[difficulty];

    //this function generates an array of 4, one number of which is the correct one
    const getAnswers = (symbol, x, y, correctAnswer, max) => {
        const newQuestion = `${x} ${symbol} ${y} =`;
        if (newQuestion === oldQuestion) { //if the old question is the same as the new question then recurse
            return getNumbers(category, difficulty, oldQuestion);
        }
        let answers = [];
        let num = 0; //keep pushing random nums onto our array until the length is 4, then insert the correct answer to a random index
        while (answers.length < 4) {
            num = Math.floor(Math.random() * (max + 1));
            if (answers.indexOf(num) === -1 && num !== correctAnswer) {
                answers.push(num);
            }
        }
        const correctIndex = Math.floor(Math.random() * 4);
        answers[correctIndex] = correctAnswer;
        //return the correct index and the answers
        return {
            question: newQuestion,
            answers: answers,
            correctIndex: correctIndex,
            correctAnswer: correctAnswer,
        }
    }

    let x = Math.floor((max - 1) * Math.random()) + 1, y = Math.floor((max - 1) * Math.random()) + 1;
    /* x ? y = z except for divison where z / x = y */
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
            //default should never fire
            console.log(symbol, "is not a valid category");
            return "not a valid category";
    }
}

export function getHistory(state, { isCorrect, currentAnswerTime }) {
    const { averageAnswerTime, pastCorrectAnswers, pastIncorrectAnswers } = state;
    return isCorrect ? {
        ...state,
        // the formula below calculates the new average answer time // basically just total time divided by total answers //
        averageAnswerTime: (((averageAnswerTime) * (pastCorrectAnswers + pastIncorrectAnswers) + currentAnswerTime) /
            (pastCorrectAnswers + pastIncorrectAnswers + 1)),
        // incorrect answers do not affect the averageAnswerTime //
        pastCorrectAnswers: pastCorrectAnswers + 1,
    } : {
            ...state,
            pastIncorrectAnswers: pastIncorrectAnswers + 1,
        }
}