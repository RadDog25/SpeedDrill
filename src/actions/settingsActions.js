export function clickedSetting(label, string) {
    switch (label) {
        case "Category":
            return {
                type: "CLICKED_CATEGORY",
                payload: string,
            }
        case "Difficulty":
            return {
                type: "CLICKED_DIFFICULTY",
                payload: string,
            }
        default:
            return {
                type: "ERROR",
                payload: "label not found"
            }
    }
}