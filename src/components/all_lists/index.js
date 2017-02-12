import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {itemsFetchData, itemsHasErrored} from '../../actions/lists';
import {changeViewToCurrentList, changeViewTo, getCurrentList} from '../../actions/view';
import Card from './Card'
import './style.scss';

class AllLists extends Component {
    componentDidMount() {
        this.props.fetchData('/all_lists');
    }
    setViewToNewList() {
        this.props.changeViewTo('new_list');
    }
    setViewToCurrentList(item) {
        this.props.changeViewTo('current_list');
        this.props.currentList(item);
    }
    render() {
        let CardTemplate = this.props.all_lists.map(function(item, index) {
            let boundClick = this.setViewToCurrentList.bind(this, item);
            return (
                <Card list={item} key={index} showDetails={boundClick}/>
            )
        }.bind(this))
        return (
            <div>
                <h2 className="uk-heading-bullet">
                    Все списки
                    <button className="uk-button uk-button-primary uk-position-center-right" onClick={this.setViewToNewList.bind(this)}>
                        <span is uk-icon="icon: plus"></span>
                        <span className="uk-margin-small-left">создать</span>
                    </button>
                </h2>
                <div is class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid id="all_lists__wrapper">
                    {CardTemplate}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        all_lists: state.all_lists
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        changeViewTo: (view) => dispatch(changeViewTo(view)),
        changeViewToCurrentList: (view, list) => dispatch(changeViewToCurrentList(view, list)),
        currentList: (list) => dispatch(getCurrentList(list))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLists);
