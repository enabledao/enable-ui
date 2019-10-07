// Actions
export const SET_NETWORK_ID = 'SET_NETWORK_ID'

// Action creator
export const setNetworkId = id => {
    return {
        type: SET_NETWORK_ID,
        id,
    }
}

// Reducer
export const networkId = (state = 0, action) => {
    switch (action.type) {
        case SET_NETWORK_ID:
            return (state = action.id)
        default:
            return state
    }
}
