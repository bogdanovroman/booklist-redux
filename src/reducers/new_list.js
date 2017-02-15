let initialState = {
    books: [
        {
            'author': '',
            'title': ''
        }
    ]
}
export function newList(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            let clearBook = {
                'author': '',
                'title': ''
            }
            return Object.assign({}, state, {books: [...state.books, clearBook]});
        case 'ADD_LIST':
            return state;
        case 'NEW_LIST_SET_TITLE':
            return Object.assign({}, state, {title: action.title});
        case 'NEW_LIST_SET_DESCRIPTION':
            return Object.assign({}, state, {description: action.description});
        case 'NEW_LIST_BOOKS_UPDATE':
            return Object.assign({}, state, {books: action.books});
        default:
            return state;
    }
}
