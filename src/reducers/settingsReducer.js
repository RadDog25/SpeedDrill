const initialSettingsState = {
    category: "Addition",
    difficulty: "Easy",
}

let settingsReducer = (state = initialSettingsState, action) => {
    switch (action.type) {
        case "CLICKED_CATEGORY":
            state = { ...state, category: action.payload }
            break;
        case "CLICKED_DIFFICULTY":
            state = { ...state, difficulty: action.payload }
            break;
    }
    return state;
}

export default settingsReducer;
