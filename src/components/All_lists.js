import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsHasErrored } from '../actions/lists';

class AllLists extends Component {
  componentDidMount() {
      this.props.fetchData('/all_lists');
  }
  onClickHandler(item) {
    this.props.setError(true);
  }
  render() {
      if (this.props.hasErrored) {
          return <p>Sorry! There was an error loading the items</p>;
      }

      if (this.props.isLoading) {
          return <p>Loading…</p>;
      }
      return (
          <ul>
              {this.props.all_lists.map((item, index) => (
                  <li key={index} onClick={this.onClickHandler.bind(this, item)}>
                      {item.title}
                  </li>
              ))}
          </ul>
      );
  }
}


AllLists.propTypes = {
    fetchData: PropTypes.func.isRequired,
    all_lists: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        all_lists: state.all_lists,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        setError : (bool) => dispatch(itemsHasErrored(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLists);
