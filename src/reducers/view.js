export function view(state = 'lists', action) {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return action.view;
        default:
            return state;
    }
}
