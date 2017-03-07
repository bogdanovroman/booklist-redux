import {changeViewTo} from './view';
import {isError, isLoading} from './utils';

export function fecthCurrentListSuccess(result) {
    return {type: 'CURRENT_LIST', result};
}

export function fecthCurrentList(url) {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((result) => {
                dispatch(fecthCurrentListSuccess(result))
                dispatch(changeViewTo('current_list'))
                dispatch(isLoading(false));
            })
    };
}

export function updateCurrentListSuccess (option, response) {
    return {type: 'UPDATE', option, response};
}

// отправляем аяксом лайк в базу
export function updateCurrentList(id, option, content) {
    return (dispatch) => {
        dispatch(isLoading(true));
        if (option =='like') {
            var data = {};
            data.id = content;
        }
        const url = '/update/list/'+ id +'/' + option;
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            complete: function(response) {
                dispatch(updateCurrentListSuccess(option, response.responseJSON));
                dispatch(isLoading(false));
            }
        });
    }
}
