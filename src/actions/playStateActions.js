export function clickedPause(paused) {
    return {
        type: "CLICKED_TIMER",
        payload: paused,
    }
}

export function updateTimer(currentAnswerTime, increment) {
    return {
        type: "UPDATE_TIMER",
        payload: {
            currentAnswerTime: currentAnswerTime,
            increment: increment
        }
    }
}

/* this action also is relevant to the historyReducer and so it needs to provide payload for that as well */
export function questionAnswered(index, isCorrect, currentAnswerTime, averageAnswerTime, category, difficulty) {
    return {
        type: "CLICKED_ANSWER",
        payload: {
            index: index,
            isCorrect: isCorrect,
            currentAnswerTime: currentAnswerTime,
            averageAnswerTime: averageAnswerTime,
            category: category,
            difficulty: difficulty,
        }
    }
}

export function transitionCompleted(category, difficulty) {
    return {
        type: "TRANSITION_COMPLETED",
        payload: {
            category: category,
            difficulty: difficulty,
        }
    }
}

export function clickedRestart() {
    return {
        type: "CLICKED_RESTART"
    }
}