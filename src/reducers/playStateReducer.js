import { getStyles, getNumbers } from '../helpers/questionAnswered.js';

const initialPlayState = {
    currentAnswerTime: 0,
    paused: false,
    transitioning: false,
    question: "2 + 2 = ",
    questionStyle: "",
    answers: [2, 3, 4, 5],
    buttonStyles: ["", "", "", ""],
    correctIndex: 2,
    correctAnswer: 4,
}

let playStateReducer = (state = initialPlayState, action) => {
    switch (action.type) {
        case "CLICKED_TIMER":
            state = { ...state, paused: !action.payload }
            break;
        case "UPDATE_TIMER":
            state = { ...state, currentAnswerTime: action.payload.currentAnswerTime + action.payload.increment }
            break
        case "CLICKED_ANSWER":
            console.log("CLICKED_ANSWER = ", action.payload.index);
            state = {
                ...state,
                transitioning: true,
                questionStyle: action.payload.isCorrect ? "myCorrect" : "myIncorrect",
                buttonStyles: getStyles(state.correctIndex, action.payload.index),
            }
            break;
        case "TRANSITION_COMPLETED":
            let { question, answers, correctIndex, correctAnswer } = getNumbers(action.payload.category, action.payload.difficulty);
            state = {
                ...state,
                currentAnswerTime: 0,
                transitioning: false,
                question: question,
                questionStyle: "",
                answers: answers,
                buttonStyles: ["", "", "", ""],
                correctIndex: correctIndex,
                correctAnswer: correctAnswer,
            }

            break;
    }
    return state;
}

export default playStateReducer;