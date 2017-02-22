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

export function questionAnswered(index) {
    return {
        type: "CLICKED_ANSWER",
        payload: index,
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