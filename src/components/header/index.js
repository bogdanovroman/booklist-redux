import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/">
                        <img is src="images/open-book.svg" alt=""/>
                    </a>
                </div>
                <div className="uk-navbar-right">
                    <div className="uk-navbar-item">asdasd</div>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
