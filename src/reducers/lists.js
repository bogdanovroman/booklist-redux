export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function all_lists(state = [], action) {
    switch (action.type) {
        case 'FETCH_ALL_LISTS_SUCCESS':
            return action.all_lists;
        default:
            return state;
    }
}
