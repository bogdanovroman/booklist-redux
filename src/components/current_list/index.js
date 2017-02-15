import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeViewTo} from '../../actions/view';
import './style.scss';

/*
  View для конкретного списка
*/

class List extends Component {
    backToListsHandler() {
        this.props.changeViewTo('lists');
    }
    render() {
        let data = this.props.list;
        let date = this.props.list.date.split('').slice(0, 10).join('').split('-');
        let dateString = date[2] + '.' + date[1] + '.' + date[0];
        let bookTemplate = this.props.list.items.map(function(item, index) {
            return (
                <div className="uk-card uk-card-hover uk-card-body" key={index}>
                    <h3 className="uk-card-title uk-margin-remove">{item.title}</h3>
                    <p className="uk-margin-remove">{item.author}</p>
                </div>
            )
        })
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
                                    <img class="uk-border-circle uk-svg" width="40" height="40" title={this.props.list.userData.name} is uk-tooltip src={this.props.list.userData.url}/></div>
                                <div className="uk-width-expand">
                                    <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.list.title}</h3>
                                    <p className="uk-text-meta uk-margin-remove-top">
                                        <time>{dateString}</time>
                                    </p>
                                </div>
                                <div className="uk-width-expand">
                                    {this.props.list.description}
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <div className="uk-grid">
                                {bookTemplate}
                            </div>
                        </div>
                        <div className="uk-card-footer uk-text-center">
                            <a href="#" className="uk-button uk-button-text">комментировать</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

List.propTypes = {};

const mapStateToProps = (state) => {
    return {
        list: state.currentList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeViewTo: (list) => dispatch(changeViewTo(list))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
