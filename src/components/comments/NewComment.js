import React, {Component, PropTypes} from 'react';

export default class NewComment extends Component {
    onClickHandler () {
        const newCommentText = this.refs.newCommentArea.value;
        this.props.submit(newCommentText);
    }
    render() {
        return (
            <div className="uk-card uk-card-default uk-width-1-1 uk-margin-top uk-card-hover">
                <div className="uk-card-body uk-card-header no-border">
                    <div is class="uk-grid-small uk-flex-middle uk-width-auto" uk-grid>
                        <div className="uk-width-auto">
                            <img className="uk-border-circle" width="40" height="40" src={this.props.user.picture}/>
                        </div>
                        <div className="uk-width-expand">
                            <p className="uk-margin-remove-bottom">{this.props.user.name}</p>
                        </div>
                    </div>
                    <textarea className="uk-textarea uk-margin-top comment-area" rows="3" ref="newCommentArea"></textarea>
                    <div className="uk-text-right uk-margin-small-top">
                        <button className="uk-button uk-button-text" onClick={this.onClickHandler.bind(this)}>Добавить</button>
                    </div>
                </div>
            </div>
        )
    }
}

NewComment.propTypes = {};
