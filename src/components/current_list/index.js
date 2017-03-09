import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeViewTo} from '../../actions/view';
import {updateCurrentList} from '../../actions/current_list';
import {fecthCurrentUser} from '../../actions/current_user';
import {addNewComment, showNewComment, showComments} from '../../actions/comments';
import './style.scss';
import 'whatwg-fetch';
import Comments from '../comments';
import NewComment from '../comments/NewComment';

/*
  View для конкретного списка
*/
class List extends Component {
    backToListsHandler() {
        this.props.changeViewTo('lists');
    }
    showHideCommentsHandler() {
        const bool = !this.props.list.showComments;
        this.props.showComments(bool);
    }
    showNewCommentHandler () {
        const bool = !this.props.list.showNewComment;
        this.props.showNewComment(bool);
    }
    onUserAvatarClickHandler() {
        this.props.fecthCurrentUser('/user/' + this.props.list.userData._id);
    }
    likeCurrentListHandler () {
        this.props.updateCurrentList(this.props.list._id, 'like', this.props.user._id);
    }
    addNewCommentHandler (comment) {
        const data = {
            author : this.props.user._id,
            text : comment,
            listId : this.props.list._id
        }
        this.props.addNewComment(data);
    }
    render() {
        let likeIsActive;
        if (this.props.list.likes.indexOf(this.props.user._id) != -1) {
            likeIsActive = true;
        } else {
            likeIsActive = false;
        }
        let likesActiveClass = likeIsActive ? 'active' : '';
        let list = this.props.list,
            date = list.date.split('').slice(0, 10).join('').split('-'),
            dateString = date[2] + '.' + date[1] + '.' + date[0],
            commentsLength = list.comments.length,
            likes = list.likes.length,
            CommentsTemplate = list.showComments ? <Comments data={list.comments} /> : null,
            NewCommentTemplate =  list.showNewComment ? <NewComment user={this.props.user} submit={this.addNewCommentHandler.bind(this)}/> : null,
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
                                    <img class="uk-border-circle" width="40" height="40" title={list.userData.name} is uk-tooltip src={list.userData.picture} onClick={this.onUserAvatarClickHandler.bind(this)}/>
                                </div>
                                <div className="uk-width-expand">
                                    <h3 className="uk-card-title uk-margin-remove-bottom">{list.title}</h3>
                                    <p className="uk-text-meta uk-margin-remove-top">
                                        <time>{dateString}</time>
                                    </p>
                                </div>
                                <div className="uk-width-expand">
                                    {list.description}
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <div className="uk-grid">
                                {bookTemplate}
                            </div>
                        </div>
                        <div className="uk-card-footer uk-flex uk-flex-middle uk-flex-right">
                            <div className={"uk-margin-right " + likesActiveClass}>
                                <a is uk-icon="icon: heart" onClick={this.likeCurrentListHandler.bind(this)}></a>
                                <span className="uk-margin-small-left">{likes}</span>
                            </div>
                            <div className="uk-margin-right">
                                <span is uk-icon="icon: comment"></span>
                                <span className="uk-margin-small-left">{list.comments.length}</span>
                            </div>
                            <div className="">
                                <span is uk-icon="icon: forward"></span>
                                <span className="uk-margin-small-left">{list.replies.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-top">
                    <div className="uk-flex">
                        <button className="uk-button uk-button-default" onClick={this.showHideCommentsHandler.bind(this)}>
                            <span is uk-icon="icon: comments" class="uk-display-inline-block"></span>
                            <span className="uk-display-inline-block uk-margin-small-left">Показать/скрыть комментарии</span>
                        </button>
                        <button className="uk-button uk-button-default uk-margin-left" onClick={this.showNewCommentHandler.bind(this)}>
                            <span is uk-icon="icon: commenting" class="uk-display-inline-block"></span>
                            <span className="uk-display-inline-block uk-margin-small-left">Добавить новый</span>
                        </button>
                    </div>
                    {CommentsTemplate}
                    {NewCommentTemplate}
                </div>
            </div>
        )
    }
}

List.propTypes = {};

const mapStateToProps = (state) => {
    return {
        list: state.currentList,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeViewTo: (list) => dispatch(changeViewTo(list)),
        showComments: (bool) => dispatch(showComments(bool)),
        showNewComment: (bool) => dispatch(showNewComment(bool)),
        addNewComment: (data) => dispatch(addNewComment(data)),
        fecthCurrentUser: (url) => dispatch(fecthCurrentUser(url)),
        updateCurrentList : (id, option, content) => dispatch(updateCurrentList(id, option, content))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
