import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {facebookData} from '../../actions/user'
import './style.scss';

class Header extends Component {
    componentDidMount() {
        this.props.checkIfLoggedToFb();
    }
    render() {
        return (
            <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/">
                        <img is src="images/open-book.svg" alt=""/>
                    </a>
                </div>
                <div className="uk-navbar-right">
                    <div className="uk-navbar-item">Имя и Аватарка</div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkIfLoggedToFb: () => dispatch(facebookData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
