// let initialState = {
//     screen: 'lists',
//     list: {}
// }
export function view(state = 'lists', action) {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return action.view;
        case 'CHANGE_VIEW_TO_CURRENT_LIST':
            return Object.assign({}, state, {screen: action.view, list: action.list});
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
