const initialSettingsState = {
    category: "Addition",
    difficulty: "Easy",
}

const settingsReducer = (state = initialSettingsState, action) => {
    switch (action.type) {
        case "CLICKED_CATEGORY":
            state = { ...state, category: action.payload }
            break;
        case "CLICKED_DIFFICULTY":
            state = { ...state, difficulty: action.payload }
            break;
        case "CLICKED_COMPETE_MODE":
            state = {
                ...state,
                category: "Random",
                difficulty: "Hard",
            }
            break;
    }
    return state;
}

export default settingsReducer;
