const $ = require('jquery'); //need jquery for ajax call

export default (state) => {
    console.log("requesting scores and id");

    const { log, pastCorrectAnswers, pastIncorrectAnswers, averageAnswerTime } = state;
    console.log(log, pastCorrectAnswers, pastIncorrectAnswers, averageAnswerTime);

    const makeRequest = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "https://nameless-savannah-12270.herokuapp.com/postScore",
                data: {
                    key: "rad777dog777X",
                    score: 5,
                    time: 3,
                    log: "log",
                },
                success: (data) => {
                    console.log(data);
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