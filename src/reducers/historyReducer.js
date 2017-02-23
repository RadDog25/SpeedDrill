const initialHistoryState = {
    pastCorrectAnswers: 0,
    pastIncorrectAnswers: 0,
    averageAnswerTime: 0,
}

let historyReducer = (state = initialHistoryState, action) => {
    switch (action.type) {
        case "CLICKED_ANSWER":
            let numberAnswered = state.pastCorrectAnswers + state.pastIncorrectAnswers;
            state = action.payload.isCorrect ? {
                ...state,
                // the formula below calculates the new average answer time // basically just total time divided by total answers //
                averageAnswerTime: (((state.averageAnswerTime) * (numberAnswered) + action.payload.currentAnswerTime) /
                    (numberAnswered + 1)),
                // incorrect answers do not affect the averageAnswerTime //
                pastCorrectAnswers: state.pastCorrectAnswers + 1,
            } : {
                    ...state,
                    pastIncorrectAnswers: state.pastIncorrectAnswers + 1,
                }
            break;
        case "NEW_SESSION":
            state = Object.assign({}, state, initialHistoryState);
            break;
    }
    return state;
}

export default historyReducer;