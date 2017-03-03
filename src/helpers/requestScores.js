const $ = require('jquery'); //need jquery for ajax call

export default (state) => {
    console.log("requesting scores and id");

    const { log, pastCorrectAnswers, pastIncorrectAnswers, averageAnswerTime } = state;
    const makeRequest = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "https://nameless-savannah-12270.herokuapp.com/postScore",
                data: {
                    key: "rad777dog777X",
                    score: 5 * pastCorrectAnswers,
                    time: averageAnswerTime,
                    log: log,
                },
                success: (data) => {
                    resolve(data);
                },
                error: (error) => {
                    reject(error);
                } 
            });
        });
    }

    return makeRequest().then((data) => {
        return {
            ...state,
            playerId: data.playerId,
            scores: data.scores,
        }
    });
}