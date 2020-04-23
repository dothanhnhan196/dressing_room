const stateModel = {
    topclothes: '',
    botclothes: '',
}

export const ModalReducer = (state = stateModel, action) => {
    switch (action.type) {
        case 'SET_CLOTH_MODEL': {
            state[action.payload.type] = action.payload.img
            // => state.topclothes
            return {...state}
        }
        default:
            return state
    }
}