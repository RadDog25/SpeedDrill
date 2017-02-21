export function clickedCategory(category) {
    return {
        type: "CLICKED_CATEGORY",
        payload: category,
    }
}

export function clickedDifficulty(difficulty) {
    return {
        type: "CLICKED_DIFFICULTY",
        payload: difficulty,
    }
}