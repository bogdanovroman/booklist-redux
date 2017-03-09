import React, {Component, PropTypes} from 'react';
import AllLists from '../all_lists';
import List from '../current_list';
import NewList from '../new_list';
import User from '../current_user';
import Header from '../header';
import Sidebar from '../sidebar';
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
                <Sidebar/>
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
