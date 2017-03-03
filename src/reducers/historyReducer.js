import { getHistory } from '../helpers/questionAnswered.js';
import requestScores from '../helpers/requestScores.js';

const initialHistoryState = {
    pastCorrectAnswers: 0,
    pastIncorrectAnswers: 0,
    averageAnswerTime: 0,
    /* new additions here */
    log: [],
    playerId: null,
    scores: [],
}

const historyReducer = (state = initialHistoryState, action) => {
    switch (action.type) {
        case "CLICKED_ANSWER":
            state = getHistory(state, action.payload); //getHistory can be found in helpers/questionAnswered
            break;
        case "CLICKED_PRACTICE_MODE": //only reset history once a new game begins
        case "CLICKED_COMPETE_MODE":
            state = Object.assign({}, state, initialHistoryState);
            break;
        case "GAME_OVER":
            console.log( requestScores(state) ); //send log to be analyzed
            break;
    }
    return state;
}

export default historyReducer;