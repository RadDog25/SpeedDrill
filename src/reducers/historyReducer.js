import { getHistory } from '../helpers/questionAnswered.js';

const initialHistoryState = {
    pastCorrectAnswers: 0,
    pastIncorrectAnswers: 0,
    averageAnswerTime: 0,
    /* new additions here */
    log: [],
    playerId: null,
    scores: [],
    loading: false,
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
        case "SCORES_ARE_LOADING":
            state = {
                ...state,
                loading: true,
            }
            break;
        case "SCORES_HAVE_ERRORED":
            state = {
                ...state,
                playerId: action.payload.playerId,
                scores: action.payload.scores,
                loading: false,
            }
            break;
        case "SCORES_FETCH_SUCCESS":
            console.log(action);
            state = {
                ...state,
                playerId: action.payload.playerId,
                scores: action.payload.scores,
                loading: false,
            }
            console.log("new state", state);
            break;
        case "FORM_SUBMIT":
            state = {
                ...state,
                scores: action.payload.scores
            }
            break;
    }
    return state;
}

export default historyReducer;
