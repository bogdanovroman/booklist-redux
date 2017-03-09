import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchAllLists, itemsHasErrored} from '../../actions/lists';
import {changeViewTo} from '../../actions/view';
import {fecthCurrentUser} from '../../actions/current_user';
import {fecthCurrentList} from '../../actions/current_list';
import 'whatwg-fetch';
import Card from './Card'
import './style.scss';

class AllLists extends Component {
    componentDidMount() {
        this.props.fetchAllLists();
    }
    setViewToNewList() {
        this.props.changeViewTo('new_list');
    }
    setViewToCurrentList(item) {
        this.props.fecthCurrentList('/list/' + item._id);
    }
    setViewToCurrentUser (item) {
        this.props.fecthCurrentUser('/user/' + item.author);
    }
    render() {
        let CardTemplate = this.props.all_lists.map(function(item, index) {
            let detailsClick = this.setViewToCurrentList.bind(this, item);
            let userClick = this.setViewToCurrentUser.bind(this, item);
            return (
                <Card list={item} key={index} showDetails={detailsClick} showCurrentUserInfo={userClick} user={this.props.user}/>
            )
        }.bind(this))
        return (
            <div>
                <h2 className="uk-heading-bullet">
                    Все списки
                    <button className="uk-button uk-button-primary uk-position-center-right uk-visible@s" onClick={this.setViewToNewList.bind(this)}>
                        <span is uk-icon="icon: plus"></span>
                        <span className="uk-margin-small-left">создать</span>
                    </button>
                </h2>
                <div is class="uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl uk-grid-match booklists-card-wrapper uk-grid-small" uk-grid id="all_lists__wrapper">
                    {CardTemplate}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        all_lists: state.all_lists,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllLists: (url) => dispatch(fetchAllLists(url)),
        changeViewTo: (view) => dispatch(changeViewTo(view)),
        fecthCurrentUser: (url) => dispatch(fecthCurrentUser(url)),
        fecthCurrentList: (url) => dispatch(fecthCurrentList(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLists);
