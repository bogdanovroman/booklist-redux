import React, {Component, PropTypes} from 'react';
import AllLists from '../all_lists';
import List from '../current_list';
import NewList from '../new_list';
import User from '../current_user';
import Header from '../header';
import {connect} from 'react-redux';
import './style.scss';

/*
  в этом компоненте будет менять state.view в зависимости от которого
  будет меняться содержимое приложения
*/

class App extends Component {
    render() {
        let View, stateView = this.props.view, isLoadingClassName = this.props.isLoading ? " loading" : "";
        if (stateView === 'lists') {
            View = <AllLists/>
        } else if (stateView === 'current_list') {
            View = <List/>
        } else if (stateView === 'new_list') {
            View = <NewList/>
        } else if (stateView === 'current_user') {
            View = <User/>
        }
        return (
            <div className={"wrapper " + isLoadingClassName}>
                <Header/>
                <div className="uk-container uk-margin-large-bottom uk-margin-medium-top uk-container-large">
                    {View}
                </div>
                <div is id="offcanvas-push" uk-offcanvas="mode: slide; overlay: true" class="uk-animation uk-width-1-1">
                    <div className="uk-offcanvas-bar">
                        <h3>Крутая надпись</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    view: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        view: state.view,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
