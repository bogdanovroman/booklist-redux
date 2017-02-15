import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loginToFacebook} from '../../actions/user';

class AuthModal extends Component {
    modalButtonHandler() {
        console.log('тут был модал');
    }
    render() {
        return (
            <div is id="auth-modal" uk-modal>
                <div className="uk-modal-dialog">
                    <div className="uk-modal-body">
                        <p className="uk-modal-title">Войти или зарегаться</p>
                        <button className="uk-button uk-button-primary uk-width-1-1"
                            onClick={this.modalButtonHandler.bind(this)}
                            type="button">
                            <span>facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

AuthModal.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
      loginToFacebook : () => dispatch(loginToFacebook())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
