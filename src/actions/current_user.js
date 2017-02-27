import {changeViewTo} from './view';
import {isError, isLoading} from './utils';

export function fecthCurrentUserSuccess(result) {
    return {type: 'CURRENT_USER', result};
}

export function fecthCurrentUser(url) {
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
                dispatch(fecthCurrentUserSuccess(result))
                dispatch(changeViewTo('current_user'))
                dispatch(isLoading(false));
            })
    };
}
