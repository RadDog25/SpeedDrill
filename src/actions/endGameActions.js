export function gameOver() {
    return {
        type: "GAME_OVER",
    }
} 

export function newSession() {
    return {
        type: "NEW_SESSION",
    }
}

export function formChange(username) {
    return {
        type: "FORM_CHANGE",
        payload: {
            username: username,
        }
    }
}

export function submitForm() {
    console.log("form submission action!");
    return {
        type: "FORM_SUBMIT",
    }
}

export function receivedScores(playerId, scores) {
    console.log("received scores");
    return {
        type: "RECEIVED_SCORES",
        payload: {
            playerId: playerId,
            scores: scores,
        }
    }
}