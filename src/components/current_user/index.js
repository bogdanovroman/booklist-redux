import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeViewToCurrentList, changeViewTo, getCurrentList, getCurrentUser} from '../../actions/view';
import {fecthCurrentList} from '../../actions/current_list';
import Card from './Card';


class User extends Component {
    backToListsHandler () {
        this.props.changeViewTo('lists')
    }
    setViewToCurrentList(item) {
        this.props.fecthCurrentList('/list/' + item._id);
    }
    render() {
        let user = this.props.user;
        let CardTemplate = user.listsData.map(function(item, index) {
            let detailsClick = this.setViewToCurrentList.bind(this, item);
            return (
                <Card list={item} key={index} showDetails={detailsClick}/>
            )
        }.bind(this))
        return (
            <div>
                <h2 className="">
                    <button className="uk-button uk-button-default" id="back-to-lists-btn" onClick={this.backToListsHandler.bind(this)}>
                        <span is uk-icon="icon: chevron-left"></span>
                        <span className="uk-text-middle">назад</span>
                    </button>
                </h2>
                <div className="uk-child-width-1@m uk-card-hover">
                    <div className="uk-card uk-card-default uk-width-1@m">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle uk-grid">
                                <div className="uk-width-auto">
                                    <img class="uk-border-circle uk-svg" width="40" height="40" title={user.name} is uk-tooltip src={user.url}/></div>
                                <div className="uk-width-expand">
                                    {user.name}
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <div className="uk-grid-small uk-flex-middle uk-grid">
                              <div className="uk-width-auto">
                                  Какая-то инфа об этом юзере
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="uk-heading-bullet">
                    Списки пользователя: {user.name}
                </h4>
                <div is class="uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-2 uk-grid-match booklists-card-wrapper" uk-grid>
                  {CardTemplate}
                </div>
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
        changeViewTo: (view) => dispatch(changeViewTo(view)),
        fecthCurrentList: (url) => dispatch(fecthCurrentList(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
