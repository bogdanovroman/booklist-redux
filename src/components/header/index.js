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
                    <span className="uk-text-middle">{user.name}</span>
                    <div className="uk-inline">
                        <img className="uk-border-circle uk-margin-left" src={user.picture} width="50" height="50"/>
                    </div>
                </li>
                <div is uk-drop="mode: click; pos: bottom-right" class="uk-card uk-card-body uk-card-default uk-width-auto uk-padding-small">
                      <button className="uk-button uk-button-text" onClick={this.logOutFromFacebookHandler.bind(this)}>Выйти</button>
                </div>
            </ul>
        } else if (user.isLogged == 'no') {
            authTemplate = <button is class="uk-button uk-button-text uk-animation-fade" onClick={this.loginToFacebookHandler.bind(this)}>Facebook</button>
        } 
        return (
            <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar uk-sticky="bottom: #offset">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">
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
