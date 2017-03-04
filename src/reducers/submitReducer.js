const initialSubmitState = {
    username: "",
    submitted: false,
}

const submitReducer = (state = initialSubmitState, action) => {
    switch (action.type) {
        case "FORM_CHANGE":
            state = {
                ...state,
                username: action.payload.username,
            }
            break;
        case "FORM_SUBMIT":
            state = {
                ...state,
                submitted: true,
            }
            break;
        case "CLICKED_PRACTICE_MODE":
        case "CLICKED_COMPETE_MODE":
            state = {
                ...state,
                submitted: false,
            }
            break;
    }
    return state;
}

export default submitReducer;