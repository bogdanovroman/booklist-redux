import {changeViewTo} from './view';

export function addBookRow() {
    return {type: 'ADD_BOOK'};
}

export function newListSetTitle(title) {
    return {type: 'NEW_LIST_SET_TITLE', title}
}

export function newListSetDescription(description) {
    return {type: 'NEW_LIST_SET_DESCRIPTION', description}
}

export function updateStateBooks(books) {
    return {type: 'NEW_LIST_BOOKS_UPDATE', books}
}

export function addList() {
    return {type: 'ADD_LIST'};
}



// отправляем аяксом новый список в базу
export function createNewList(new_list) {
    return (dispatch) => {
        var data = Object.assign({}, new_list);
        $.ajax({
            url: '/new_list',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            complete: function() {
                dispatch(addList());
                dispatch(changeViewTo('lists'));
            }
        });
    }
}
