export function view(state = 'lists', action) {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return action.view;
        default:
            return state;
    }
}

export function currentList(state = {}, action) {
    switch (action.type) {
        case 'CURRENT_LIST':
            return action.list;
        default:
            return state;
    }
}
