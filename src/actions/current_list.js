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

export function showComments(bool) {
    return {type: 'SHOW_COMMENTS', bool};
}
