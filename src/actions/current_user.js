import {changeViewTo} from './view';

export function fecthCurrentUserSuccess(user) {
    return {type: 'CURRENT_USER', user};
}

export function fecthCurrentUser(url) {
    return (dispatch) => {
        // dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                dispatch(fecthCurrentUserSuccess(user))
                dispatch(changeViewTo('current_user'))
            })
            // .catch(() => dispatch(itemsHasErrored(true)));
    };
}
