import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {facebookData, logOut, loginToFacebook } from '../../actions/user';
import AuthModal from './AuthModal';
import './style.scss';

class Header extends Component {
    componentDidMount() {
        this.props.checkIfLoggedToFb();
    }
    logOutHandler () {
      this.props.logOut();
    }
    loginToFacebookHandler(){
        this.props.loginToFacebook();
    }
    render() {
        let authTemplate,
            user = this.props.user;
        if (user.isLogged == 'yes') {
            authTemplate = <ul className="uk-navbar-nav">
                <li className="uk-inline">
                    <span className="uk-text-middle">{user.name}</span>
                    <div className="uk-inline">
                        <img className="uk-border-circle uk-margin-left" src={user.url} width="50" height="50"/>
                    </div>
                </li>
            </ul>
        } else if (user.isLogged == 'no') {
            authTemplate = <button is class="uk-button uk-button-text" onClick={this.loginToFacebookHandler.bind(this)}>Facebook</button>
        } else {
            authTemplate = <div is uk-spinner></div>
        }
        return (
            <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">
                        <img is src="images/open-book.svg" alt=""/>
                    </a>
                </div>
                <div className="uk-navbar-right">
                    <div className="uk-navbar-item">
                        {authTemplate}
                    </div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {};

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkIfLoggedToFb: () => dispatch(facebookData()),
        logOut : () => dispatch(logOut()),
        loginToFacebook: () => dispatch(loginToFacebook())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
