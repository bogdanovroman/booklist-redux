import {isError, isLoading} from './utils';

export function fetchAllListsSuccess(all_lists) {
    return {
        type: 'FETCH_ALL_LISTS_SUCCESS',
        all_lists
    };
}

export function fetchAllLists() {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch('/all_lists')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((all_lists) => {
              dispatch(fetchAllListsSuccess(all_lists));
              dispatch(isLoading(false));
            })
            .catch(() => dispatch(isError(true)));
    };
}
