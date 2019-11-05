// Actions
export const SET_TOAST_PROVIDER = 'SET_TOAST_PROVIDER'

// Action creator
export const setToastProvider = provider => {
    return {
        type: SET_TOAST_PROVIDER,
        provider,
    }
}

// Reducer
export const toastProvider = (state = '', action) => {
    switch (action.type) {
        case SET_TOAST_PROVIDER:
            return (state = action.provider)
        default:
            return state
    }
}
