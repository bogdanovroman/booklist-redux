let initialState = {
  id: '',
  name: '',
  url: '',
  isLogged : 'not_yet'
}
export function user(state = initialState, action) {
    switch (action.type) {
        case 'USER_WAS_LOGGED':
            return Object.assign({}, state, action.user);
        case 'USER_WAS_NOT_LOGGED':
            return Object.assign({}, state, {
              isLogged : 'no',
              id : '',
              name: '',
              url: ''
            });
        default:
            return state;
    }
}
