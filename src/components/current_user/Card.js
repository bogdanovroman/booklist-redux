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
        let likeIsActive;
        if (this.props.list.likes.indexOf(this.props.user._id) != -1) {
            likeIsActive = true;
        } else {
            likeIsActive = false;
        }
        let list = this.props.list,
            date = list.date.split('').slice(0, 10).join('').split('-'),
            dateString = date[2] + '.' + date[1] + '.' + date[0],
            likes = list.likes.length,
            commentsLength = list.comments.length,
            bookTemplate = list.items.map(function(item, index) {
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
                                <h3 className="uk-card-title uk-margin-remove-bottom">{list.title}</h3>
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
                    <div className="uk-card-footer uk-flex uk-flex-middle uk-flex-right">
                        <div className={likeIsActive ? 'active' : ''}>
                            <span href="#" is uk-icon="icon: heart"></span>
                            <span className="uk-margin-small-left">{likes}</span>
                        </div>
                        <div className="uk-margin-left">
                            <span is uk-icon="icon: comments"></span>
                            <span className="uk-margin-small-left">{commentsLength}</span>
                        </div>
                        <div className="uk-margin-left">
                            <span is uk-icon="icon: forward"></span>
                            <span className="uk-margin-small-left">{list.replies.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
