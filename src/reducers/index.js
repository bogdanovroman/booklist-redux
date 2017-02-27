import { combineReducers } from 'redux';
import { all_lists } from './lists';
import { newList } from './new_list';
import { view } from './view';
import { user } from './user';
import { currentUser } from './current_user';
import { currentList } from './current_list';
import { isError, isLoading } from './utils';

export default combineReducers({
    view,
    user,
    all_lists,
    newList,
    currentList,
    isError,
    isLoading,
    currentUser
});
