export function isError(state = false, action) {
    switch (action.type) {
        case 'ERROR':
            return action.isError;
        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
