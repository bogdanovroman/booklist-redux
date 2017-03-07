export function currentList(state = {}, action) {
    switch (action.type) {
        case 'CURRENT_LIST':
            return Object.assign({}, action.result.list, {userData: action.result.userData});
        case 'SHOW_COMMENTS':
            return Object.assign({}, state, {showComments: action.bool});
        case 'SHOW_NEW_COMMENT' :
            return Object.assign({}, state, {showNewComment: action.bool});
        case 'ADD_NEW_COMMENT' :
            return Object.assign({}, state, {comments: action.comments});
        case 'UPDATE':
            if (action.option == 'like') {
                return Object.assign({}, state, {likes: action.response});
            }
        default:
            return state;
    }
}
