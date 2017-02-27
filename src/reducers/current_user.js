export function currentUser(state = {}, action) {
    switch (action.type) {
        case 'CURRENT_USER':
            return Object.assign({}, action.result.user, {listsData: action.result.listsData});
        default:
            return state;
    }
}
