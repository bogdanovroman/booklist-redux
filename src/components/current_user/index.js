import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeViewToCurrentList, changeViewTo, getCurrentList, getCurrentUser} from '../../actions/view';
import {fecthCurrentList} from '../../actions/current_list';
import Card from './Card';

class User extends Component {
    backToListsHandler() {
        this.props.changeViewTo('lists')
    }
    setViewToCurrentList(item) {
        this.props.fecthCurrentList('/list/' + item._id);
    }
    render() {
        let user = this.props.user,
            numberOfLists = user.lists.length,
            CardTemplate = user.listsData.map(function(item, index) {
            let detailsClick = this.setViewToCurrentList.bind(this, item);
            return (<Card list={item} key={index} showDetails={detailsClick}/>)
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
                            <div className="uk-flex-middle uk-text-center">
                                <h3 className="uk-heading-line uk-text-center"><span>{user.name}</span></h3>
                                <div className="">
                                    <img class="uk-border-circle uk-svg" title={user.name} is uk-tooltip src={user.pictureLarge} width="200" height="200"/>
                                </div>
                                <ul className="uk-iconnav uk-flex-center uk-flex-middle uk-margin-top">
                                    <li className="">
                                        <a href="#" is uk-icon="icon: heart" class="uk-display-inline-block"></a>
                                        <span className="uk-display-inline-block uk-margin-small-left">2</span>
                                    </li>
                                    <li className="uk-margin-small-left">
                                        <span is uk-icon="icon: copy" class="uk-display-inline-block"></span>
                                        <span className="uk-display-inline-block uk-margin-small-left">{numberOfLists}</span>
                                    </li>
                                </ul>
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
                <div is class="uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-2 uk-grid-match booklists-card-wrapper uk-margin-top" uk-grid>
                    {CardTemplate}
                </div>
            </div>
        )
    }
}

User.propTypes = {};

const mapStateToProps = (state) => {
    return {user: state.currentUser};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeViewTo: (view) => dispatch(changeViewTo(view)),
        fecthCurrentList: (url) => dispatch(fecthCurrentList(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
