import {isError, isLoading} from './utils';

export function userWasLogged() {
    return {type: 'USER_WAS_LOGGED'};
}
export function userWasNotLogged() {
    return {type: 'USER_WAS_NOT_LOGGED'};
}
export function updateUserData (user) {
    return {type: 'UPDATE_USER_DATA', user};
}
export function updateUserListsScope (id) {
    return {type: 'UPDATE_USER_LISTS_SCOPE', id};
}


// FACEBOOK

function getFacebookUserData(callback) {
    FB.api("/me", {fields: 'id,name,email'}, function(response) {
        if (response && !response.error) {
            callback(response);
        }
    });
}
function getFacebookUserAvatar(callback) {
    FB.api("/me/picture", function(response) {
        if (response && !response.error) {
            callback(response);
        }
    });
}
function getFacebookUserAvatarLarge(callback) {
    FB.api("/me/picture", {type: 'large'}, function(response) {
        if (response && !response.error) {
            callback(response);
        }
    });
}
export function facebookData() {
    return (dispatch) => {
        window.fbAsyncInit = function() {
            FB.init({appId: '592619720942995', xfbml: false, status: true, cookie: true, version: 'v2.8'});
            FB.AppEvents.logPageView();
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    dispatch(fecthUserData('/user/fb/' + response.authResponse.userID));
                } else {
                    dispatch(userWasNotLogged());
                }
            });
        };
        (function(d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
}
export function loginToFacebook() {
    return (dispatch) => {
        FB.login(function(response) {
            console.log(response);
          if (response.status === 'connected') {
              getFacebookUserData(function(data) {
                  getFacebookUserAvatar(function(picture) {
                    getFacebookUserAvatarLarge(function(pictureLarge){
                      let user = {
                          name: data.name,
                          id: data.id,
                          email: data.email,
                          picture: picture.data.url,
                          pictureLarge: pictureLarge.data.url
                      }
                      console.log('response user is ', user);
                      dispatch(sendUserData(user))
                    })
                  })
              })
          } else {
              dispatch(userWasNotLogged());
          }
        }, {scope: 'public_profile,email'});
    }
}
export function logOut () {
  return (dispatch) => {
    FB.logout(function(response) {
        dispatch(userWasNotLogged());
      });
  }
}


// AJAX TO DB

export function sendUserData (user) {
  return (dispatch) => {
    dispatch(isLoading(true));
    let data = {};
      data.id = user.id;
      data.name = user.name;
      data.email = user.email;
      data.picture = user.picture;
      data.pictureLarge = user.pictureLarge;
      $.ajax({
          url: '/new_user',
          dataType: 'json',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(data),
          complete: function(result) {
              let userData = result.responseJSON;
              dispatch(updateUserData(userData));
              dispatch(userWasLogged());
              console.log('send login data to db');
              dispatch(isLoading(false));
          }.bind(this)
      });
  }
}
export function fecthUserData(url) {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) { throw Error(response.statusText);}
                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                dispatch(updateUserData(user))
                dispatch(userWasLogged());
                dispatch(isLoading(false));
            })
    };
}
