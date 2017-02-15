import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class User extends Component {
  render(){
    return(
      <div>Какая-то инфа о юзере</div>
    )
  }
}




User.propTypes = {

};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
