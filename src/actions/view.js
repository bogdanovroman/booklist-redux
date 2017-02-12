export function changeViewTo(view) {
    return {type: 'CHANGE_VIEW', view};
}

export function changeViewToCurrentList(view, list) {
    return {type: 'CHANGE_VIEW_TO_CURRENT_LIST', list: list, view: view};
}

export function getCurrentList(list) {
    return {type: 'CURRENT_LIST', list};
}
