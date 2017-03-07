let initialState = {
  id: '',
  name: '',
  picture: '',
  email: '',
  pictureLarge: '',
  isLogged : 'not_yet'
}
export function user(state = initialState, action) {
    switch (action.type) {
        case 'USER_WAS_LOGGED':
            return Object.assign({}, state, {isLogged: 'yes'});
        case 'USER_WAS_NOT_LOGGED':
            return Object.assign({}, state, {
              isLogged : 'no',
              id : '',
              name: '',
              email: '',
              picture: '',
              pictureLarge: ''
            });
        case 'UPDATE_USER_DATA':
          return Object.assign({}, state, action.user);
        case 'UPDATE_USER_LISTS_SCOPE':
          return Object.assign({}, state, {lists: [...state.lists, action.id]});
        default:
            return state;
    }
}
