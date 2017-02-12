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
            return { books: [...state.books, clearBook] }
        case 'DECREMENT_NUMBER_OF_BOOKS_ROWS':
            return Object.assign({}, state, {
                booksRows: state.booksRows - 1
            });
        default:
            return state;
    }
}
