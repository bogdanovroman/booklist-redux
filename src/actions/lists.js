export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}

export function fetchAllListsSuccess(all_lists) {
    return {
        type: 'FETCH_ALL_LISTS_SUCCESS',
        all_lists
    };
}

export function fetchAllLists() {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch('/all_lists')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((all_lists) => dispatch(fetchAllListsSuccess(all_lists)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
