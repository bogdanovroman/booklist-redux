import React, { Component, PropTypes } from 'react';

export default class Comments extends Component {
    render(){
        const comments = this.props.data;
        let Comment = comments.map(function(comment, index){
            let date = comment.date.split('').slice(0, 10).join('').split('-'),
                dateString = date[2] + '.' + date[1] + '.' + date[0];
            return (
                <div key={index} className="uk-width-1-1 uk-margin-small-top">
                    <article className="uk-comment uk-card uk-card-header uk-card-default">
                        <header is class="uk-comment-header uk-grid-small uk-flex-middle" uk-grid>
                            <div className="uk-width-auto">
                                <img is class="uk-comment-avatar uk-border-circle" src={comment.author.picture} width="40" height="40" alt=""/>
                            </div>
                            <div className="uk-width-auto">
                                <h4 className="uk-comment-title uk-margin-remove">{comment.author.name}</h4>
                                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                    <li><a href="#">{dateString}</a></li>
                                </ul>
                            </div>
                            <div className="uk-width-expand uk-hidden-hover">
                                <button className="uk-button uk-button-text uk-align-right">Ответить</button>
                            </div>
                        </header>
                        <div className="uk-comment-body">
                            {comment.text}
                        </div>
                    </article>
                </div>
            )
        });
        return(
          <div className="comments-wrapper uk-margin-top">
            {Comment}
          </div>
        )
     }
}
