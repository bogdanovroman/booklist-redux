import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default class Card extends Component {
    onDetailsButtonClickHandler() {
        this.props.showDetails();
    }
    onUserAvatarClickHandler () {
        this.props.showCurrentUserInfo();
    }
    render() {
        var data = this.props.list;
        var date = this.props.list.date.split('').slice(0, 10).join('').split('-');
        var dateString = date[2] + '.' + date[1] + '.' + date[0];
        var bookTemplate = this.props.list.items.map(function(item, index) {
            return (
                <div className="uk-card uk-card-hover uk-card-body" key={index}>
                    <h3 className="uk-card-title uk-margin-remove">{item.title}</h3>
                    <p className="uk-margin-remove">{item.author}</p>
                </div>
            )
        })
        return (
            <div>
                <div className="uk-margin uk-card uk-card-default uk-card-hover"
                  onClick={this.onDetailsButtonClickHandler.bind(this)}>
                    <div className="uk-card-header">
                        <div className="uk-grid uk-grid-small uk-flex-middle">
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">{data.title}</h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <time>{dateString}</time>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body no-padding">
                        <div className="books-posters uk-child-width-1-3">
                          <div className="books-posters-item">
                            <img src="/images/books/1.jpg"/>
                          </div>
                          <div className="books-posters-item">
                            <img src="/images/books/2.jpg"/>
                          </div>
                          <div className="books-posters-item">
                            <img src="/images/books/3.jpg"/>
                          </div>
                          <div className="books-posters-item">
                            <img src="/images/books/4.jpg"/>
                          </div>
                          <div className="books-posters-item">
                            <img src="/images/books/5.jpg"/>
                          </div>
                          <div className="books-posters-item">
                            <img src="/images/books/6.jpg"/>
                          </div>
                        </div>
                    </div>
                    <div className="uk-card-footer">
                        <ul className="uk-iconnav uk-flex-right uk-flex-middle">
                            <li className="">
                                <a href="#" is uk-icon="icon: heart" class="uk-display-inline-block"></a>
                                <span className="uk-display-inline-block uk-margin-small-left">11</span>
                            </li>
                            <li className="uk-margin-small-left">
                                <span is uk-icon="icon: comments" class="uk-display-inline-block"></span>
                                <span className="uk-display-inline-block uk-margin-small-left">11</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
