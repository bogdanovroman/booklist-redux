export function user(state = {}, action) {
    switch (action.type) {
        case 'USER_WAS_LOGGED':
            return action.user;
            case 'USER_WAS_NOT_LOGGED':
            return state;
        default:
            return state;
    }
}
