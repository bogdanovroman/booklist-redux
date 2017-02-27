import React, { Component, PropTypes } from 'react';


export default class Comments extends Component {
  render(){
    return(
      <div className="sss">Тут будут комменты
        {this.props.data}
      </div>
    )
  }
}




Comments.propTypes = {

};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};
