export function all_lists(state = [], action) {
    switch (action.type) {
        case 'FETCH_ALL_LISTS_SUCCESS':
            return action.all_lists;
        default:
            return state;
    }
}
