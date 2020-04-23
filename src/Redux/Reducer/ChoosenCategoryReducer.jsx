const stateCateGory = {
    categoryList: [{ type: "topclothes" }]
}

export const ChoosenCategoryReducer = (state = stateCateGory.categoryList, action) => {
    switch (action.type) {
        case 'SET_CLOTHES': {
            state = action.payload
            return state
        }
        default:
            return state
    }
}