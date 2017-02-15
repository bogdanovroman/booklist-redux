import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeViewTo} from '../../actions/view';

class User extends Component {
    backToListsHandler () {
        this.props.changeViewTo('lists')
    }
    render() {
        return (
            <div>
                <h2 className="">
                    <button className="uk-button uk-button-default" id="back-to-lists-btn" onClick={this.backToListsHandler.bind(this)}>
                        <span is uk-icon="icon: chevron-left"></span>
                        <span className="uk-text-middle">назад</span>
                    </button>
                </h2>
            </div>
        )
    }
}

User.propTypes = {};

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeViewTo: (list) => dispatch(changeViewTo(list))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
