import { getStyles, getTimerStyle, getNumbers } from '../helpers/questionAnswered.js';

const initialPlayState = {
    currentAnswerTime: 0,
    paused: false,
    transitioning: false,
    question: "2 + 2 = ",
    questionStyle: "",
    timerStyle: "",
    answers: [2, 3, 4, 5],
    buttonStyles: ["", "", "", ""],
    correctIndex: 2,
    correctAnswer: 4,
    isGameOver: false,
    competing: false,
}

const playStateReducer = (state = initialPlayState, action) => {
    switch (action.type) {
        case "CLICKED_PRACTICE_MODE":
        case "CLICKED_COMPETE_MODE":
            state = {
                ...state,
                competing: action.type === "CLICKED_COMPETE_MODE" ? true : false,
                transitioning: true,
                questionStyle: "myDropdownClick",
                isGameOver: false,
                paused: false,
            }
            break;
        case "CLICKED_TIMER":
            state = { ...state, paused: !action.payload }
            break;
        case "UPDATE_TIMER":
            state = { ...state, currentAnswerTime: action.payload.currentAnswerTime + action.payload.increment }
            break
        case "CLICKED_ANSWER":
            state = {
                ...state,
                transitioning: true,
                questionStyle: action.payload.isCorrect ? "myCorrect" : "myIncorrect",
                timerStyle: getTimerStyle(action.payload),
                buttonStyles: getStyles(state.correctIndex, action.payload.index),
            }
            break;
        case "CLICKED_CATEGORY":
        case "CLICKED_DIFFICULTY":
            state = {
                ...state,
                transitioning: true,
                questionStyle: "myDropdownClick",
                isGameOver: false,
            }
            break;
        case "TRANSITION_COMPLETED":
            let { question, answers, correctIndex, correctAnswer } = getNumbers(action.payload.category, action.payload.difficulty, state.question);
            state = {
                ...state,
                currentAnswerTime: 0,
                transitioning: false,
                question: question,
                questionStyle: "",
                timerStyle: "",
                answers: answers,
                buttonStyles: ["", "", "", ""],
                correctIndex: correctIndex,
                correctAnswer: correctAnswer,
            }
            break;
        case "GAME_OVER":
            state = {
                ...state,
                isGameOver: true,
            }
            break;
    }
    return state;
}

export default playStateReducer;