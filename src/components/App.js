import React, { Component, PropTypes } from 'react';
import AllLists from './All_lists';
import List from './List';
import Header from './header';
import { connect } from 'react-redux';
import { changeViewTo } from '../actions/view';

/*
  в этом компоненте будет менять state.view в зависимости от которого
  будет меняться содержимое приложения
*/

class App extends Component {
    changeViewHandler() {
      this.props.changeView('list');
    }
    render () {
      let view, stateView = this.props.view;
      if (stateView === 'lists') {
        view = <AllLists />
      } else if (stateView === 'list') {
        view = <List />
      }
      return (
        <div>
          <Header />
          <div>set view to:
              <span onClick={this.changeViewHandler.bind(this)}>lists</span>
          </div>
          {view}

        </div>

      )
    }
}

App.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        view: state.view
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeView : (view) => dispatch(changeViewTo(view))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
