import { combineReducers } from 'redux';
import { all_lists, itemsHasErrored, itemsIsLoading } from './lists';
import { newList } from './new_list';
import { view, currentList } from './view';
import { user } from './user';

export default combineReducers({
    view,
    user,
    all_lists,
    newList,
    currentList,
    itemsHasErrored,
    itemsIsLoading,
});
