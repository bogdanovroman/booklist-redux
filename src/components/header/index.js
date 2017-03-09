import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {facebookData, logOut, loginToFacebook} from '../../actions/user';
import './style.scss';

class Header extends Component {
    componentDidMount() {
        this.props.checkIfLoggedToFb();
    }
    logOutFromFacebookHandler() {
        this.props.logOut();
    }
    loginToFacebookHandler() {
        this.props.loginToFacebook();
    }
    render() {
        let authTemplate,
            user = this.props.user;
        if (user.isLogged == 'yes') {
            authTemplate = <ul className="uk-navbar-nav uk-animation-fade">
                <li className="uk-inline">
                    <span className="uk-text-middle uk-visible@s">{user.name}</span>
                    <div className="uk-inline">
                        <img className="uk-border-circle uk-margin-small-left user-picture" src={user.picture} width="50" height="50"/>
                    </div>
                </li>
                <ul is uk-drop="mode: click; pos: bottom-right" class="uk-card-default uk-list uk-width-auto header-dropdown uk-box-shadow-medium uk-visible@s">
                    <li className="uk-padding-small ">
                        <span is uk-icon="icon: settings" class="uk-margin-small-right uk-margin-small-left"></span>
                        <span onClick={this.logOutFromFacebookHandler.bind(this)}>Настройки</span>
                    </li>
                    <li className="uk-padding-small ">
                        <span is uk-icon="icon: user" class="uk-margin-small-right uk-margin-small-left"></span>
                        <span onClick={this.logOutFromFacebookHandler.bind(this)}>Аккаунт</span>
                    </li>
                    <li className="uk-padding-small">
                        <span is uk-icon="icon: sign-out" class="uk-margin-small-right uk-margin-small-left"></span>
                        <span onClick={this.logOutFromFacebookHandler.bind(this)}>Выйти</span>
                    </li>
                </ul>
            </ul>
        } else if (user.isLogged == 'no') {
            authTemplate = <button is class="uk-button uk-button-text uk-animation-fade" onClick={this.loginToFacebookHandler.bind(this)}>Facebook</button>
        }
        return (
            <div>
                <nav is class="uk-navbar-container" uk-navbar uk-sticky="bottom: #offset">
                    <div className="uk-navbar-left">
                        <span class="uk-navbar-item uk-icon-link uk-hidden@s" is uk-toggle="target: #offcanvas-push">
                            <span is uk-icon="icon: menu; ratio: 1.5"/>
                        </span>
                        <a className="uk-navbar-item uk-logo uk-visible@s" href="#">
                            <img src="images/logo.svg" alt=""/>
                        </a>
                    </div>
                    <div className="uk-navbar-center">
                        <a className="uk-navbar-item uk-logo uk-hidden@s" href="#">
                            <img src="images/logo.svg" alt=""/>
                        </a>
                    </div>
                    <div className="uk-navbar-right">
                        <div className="uk-navbar-item">
                            {authTemplate}
                        </div>
                    </div>
                    <div className="loading-alert uk-animation-fast uk-animation-slide-top-small"></div>
                </nav>
            </div>

        )
    }
}

Header.propTypes = {};

const mapStateToProps = (state) => {
    return {user: state.user};
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkIfLoggedToFb: () => dispatch(facebookData()),
        logOut: () => dispatch(logOut()),
        loginToFacebook: () => dispatch(loginToFacebook())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
