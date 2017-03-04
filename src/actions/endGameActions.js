const $ = require('jquery');

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

export function submitForm(username, playerId, scores) {
    //talk to our database asyncronously
    //for the purpose of the UI, we dont actually care when the data reaches the API
    $.ajax({
        type: "GET",
        url: "https://nameless-savannah-12270.herokuapp.com/postName",
        data: {
            key: "rad777dog777X",
            playerId: playerId,
            name: username,
        },
        success: (data) => {
            console.log("successfully sent username to database!");
        },
        error: (error) => {
            console.log("could not send username to database! Error: ", error);
        }
    });
    return {
        type: "FORM_SUBMIT",
        payload: {
            scores: scores.map((score, index) => {
                return {
                    id: score.id,
                    name: score.id === playerId ? username : score.name,
                    score: score.score,
                    time: score.time,
                }
            }),
        }
    }
}

