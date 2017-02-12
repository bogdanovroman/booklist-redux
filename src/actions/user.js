function getUserData(callback) {
    FB.api("/me", function(response) {
        if (response && !response.error) {
            callback(response);
        }
    });
}
function getUserAvatar(callback) {
    FB.api("/me/picture", function(response) {
        if (response && !response.error) {
            callback(response);
        }
    });
}
export function userWasLogged(user) {
    return {
        type: 'USER_WAS_LOGGED',
        user
    };
}
export function userWasNotLogged() {
    return {
        type: 'USER_WAS_NOT_LOGGED'
    };
}
export function facebookData() {
    return (dispatch) => {
        window.fbAsyncInit = function() {
            FB.init({appId: '592619720942995', xfbml: false, status: true, cookie: true, version: 'v2.8'});
            FB.AppEvents.logPageView();
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    getUserData(function(dataNameId) {
                        getUserAvatar(function(dataUrl) {
                            let user = {
                                name: dataNameId.name,
                                id: dataNameId.id,
                                url: dataUrl
                            }
                            dispatch(userWasLogged(user));
                        })
                    })
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
