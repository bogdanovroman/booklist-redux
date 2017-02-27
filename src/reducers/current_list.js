export function currentList(state = {}, action) {
    switch (action.type) {
        case 'CURRENT_LIST':
            return Object.assign({}, action.result.list, {userData: action.result.userData});
        case 'SHOW_COMMENTS':
            return Object.assign({}, state, {commentsShow: action.bool});
        default:
            return state;
    }
}
