import { combineReducers } from 'redux';
import { all_lists, itemsHasErrored, itemsIsLoading } from './lists';
import { view } from './view';

export default combineReducers({
    view,
    all_lists,
    itemsHasErrored,
    itemsIsLoading
});
