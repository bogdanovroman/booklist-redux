import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
  View для конкретного списка
*/

class List extends Component {
    render () {
      return (
        <div>
          Это какой-то там список
        </div>

      )
    }
}

List.propTypes = {

};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
