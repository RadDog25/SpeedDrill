import { getHistory } from '../helpers/questionAnswered.js';

const initialHistoryState = {
    pastCorrectAnswers: 0,
    pastIncorrectAnswers: 0,
    averageAnswerTime: 0,
}

const historyReducer = (state = initialHistoryState, action) => {
    switch (action.type) {
        case "CLICKED_ANSWER":
            state = getHistory(state, action.payload); //getHistory can be found in helpers/questionAnswered
            break;
        case "NEW_SESSION":
        case "CLICKED_RESTART":
            state = Object.assign({}, state, initialHistoryState);
            break;
    }
    return state;
}

export default historyReducer;