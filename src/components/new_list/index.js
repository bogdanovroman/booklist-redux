import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import BooksRow from './BooksRow';
import {addBookRow} from '../../actions/new_list';
import {changeViewTo} from '../../actions/view';
// import './style.scss';

class NewList extends Component {
    addBooksRow () {
        this.props.addBooksRow();
    }
    backToListsHandler() {
        this.props.changeViewTo('lists');
    }
    render() {
        return (
            <div>
                <h2 className="uk-heading-bullet">
                    Создать новый
                </h2>
                <div className="uk-card uk-card-default uk-card-hover">
                    <form>
                        <div className="uk-card-header">
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="newlist_title">Название</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="newlist_title" name="newlist_title" type="text" placeholder=""/>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="newlist_description">Описание</label>
                                <div className="uk-form-controls">
                                    <textarea className="uk-textarea" rows="2" id="newlist_description" name="newlist_description" type="text" placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <BooksRow />
                            <div className="uk-text-center">
                                <button
                                    type="button"
                                    className="uk-button uk-button-text"
                                    onClick={this.addBooksRow.bind(this)}
                                    >добавить еще</button>
                            </div>
                        </div>
                        <div className="uk-card-footer uk-text-right">
                            <button
                                className="uk-button uk-button-default uk-margin-right"
                                type="button"
                                onClick={this.backToListsHandler.bind(this)}
                                >Назад</button>
                            <button className="uk-button uk-button-primary" type="submit">готово</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

NewList.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBooksRow : () => dispatch(addBookRow()),
        changeViewTo: (view) => dispatch(changeViewTo(view)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewList);
