const $ = require("jquery");

export function scoresHaveErrored(pastCorrectAnswers, averageAnswerTime) {
    return {
        type: 'SCORES_HAVE_ERRORED',
        payload: {
            playerId: -1,
            scores: [{
                id: -1,
                name: "You",
                score: 5 * pastCorrectAnswers,
                time: averageAnswerTime,
                rank: 1,
            }]
        }
    }
};

export function scoresAreLoading() {
    return {
        type: 'SCORES_ARE_LOADING',
    };
}
export function scoresFetchSuccess(data) {

    return {
        type: 'SCORES_FETCH_SUCCESS',
        payload: data,
    };
}

/* this will be our development ajax call */


export function requestScores(pastCorrectAnswers, averageAnswerTime, log) {
    return (dispatch) => {
        dispatch(scoresAreLoading()); //about to begin
        setTimeout(() => {

            //dispatch(scoresHaveErrored(pastCorrectAnswers, averageAnswerTime));
            dispatch(scoresFetchSuccess({
                playerId: 0,
                scores: [{
                    id: 1,
                    name: "Rob",
                    score: 25,
                    time: 2.21212312,
                }, {
                    id: 1219,
                    name: "Jake",
                    score: 25,
                    time: 2.21212312,
                }, {
                    id: 777,
                    name: "Michael",
                    score: 20,
                    time: 3,
                }, {
                    id: 2,
                    name: "bob",
                    score: 13,
                    time: 1.5221,
                }, {
                    id: 3,
                    name: "luke",
                    score: 13,
                    time: 1.5221,
                }, {
                    id: 33,
                    name: "walker",
                    score: 4,
                    time: 3.4
                }, {
                    id: 43,
                    name: "peppy",
                    score: 3.0000,
                    time: 66,
                }, {
                    id: 902,
                    name: "mike brown",
                    score: 1,
                    time: 2.132123213
                }, {
                    id: 122,
                    name: "Scott",
                    score: 0,
                    time: 12,
                }, {
                    id: 0,
                    name: "You",
                    score: 0,
                    time: 14,
                }   
                ]
            }))

        }, 2000);
    }
}



/*
export function requestScores(pastCorrectAnswers, averageAnswerTime, log) {
    return (dispatch) => {
        dispatch(scoresAreLoading()); //about to begin
        $.ajax({
            type: "GET",
            url: "https://nameless-savannah-12270.herokuapp.com/postScore",
            data: {
                key: "rad777dog777X",
                score: 5 * pastCorrectAnswers,
                time: averageAnswerTime,
                log: log.toString(),
            },
            success: (data) => {
                dispatch(scoresFetchSuccess(data));
            },
            error: (error) => {
                dispatch(scoresHaveErrored(pastCorrectAnswers, averageAnswerTime));
            }
        });
    }
}
*/
