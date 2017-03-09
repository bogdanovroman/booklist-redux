import {changeViewTo} from './view';
import {isError, isLoading} from './utils';

export function showComments(bool) {
    return {type: 'SHOW_COMMENTS', bool};
}

export function showNewComment(bool) {
    return {type: 'SHOW_NEW_COMMENT', bool};
}

export function addNewCommentSuccess(comments) {
    return {type: 'ADD_NEW_COMMENT', comments}
}

// отправляем аяксом новый коммент в базу
export function addNewComment(comment) {
    return (dispatch) => {
        dispatch(isLoading(true));
        var data = {};
        data.author = comment.author;
        data.text = comment.text;
        data.listId = comment.listId;
        $.ajax({
            url: '/new_comment',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            complete: function(comments) {
                dispatch(addNewCommentSuccess(comments.responseJSON));
                dispatch(showComments(true));
                dispatch(showNewComment(false));
                dispatch(isLoading(false));
            }
        });
    }
}
