export function isError(bool) {
    return {
        type: 'ERROR',
        isError: bool
    };
}

export function isLoading(bool) {
    return {
        type: 'LOADING',
        isLoading: bool
    };
}
