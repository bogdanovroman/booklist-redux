import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateStateBooks} from '../../actions/new_list';

class BooksRow extends Component {
    setBookAuthor(item, index, event) {
      var books = this.props.books;
      books[index].author = event.target.value;
      this.props.updateStateBooks(books)
    }
    setBookTitle(item, index, event) {
      var books = this.props.books;
      books[index].title = event.target.value;
      this.props.updateStateBooks(books);
    }
    render() {
        let bookTemplate = this.props.books.map((item, index) => {
            var boundAuthorChange = this.setBookAuthor.bind(this, item, index);
            var boundTitleChange = this.setBookTitle.bind(this, item, index);
            return (
                <div className="uk-margin uk-grid" key={index}>
                    <div className="uk-width-1-2@m">
                        <label className="uk-form-label" htmlFor={"newbook_author-" + index}>Фамилия автора</label>
                        <div className="uk-form-controls">
                            <input className="uk-input uk-width-1" id={"newbook_author-" + index} name={"newbook_author-" + index} onChange={boundAuthorChange} type="text" placeholder=""/>
                        </div>
                    </div>
                    <div className="uk-width-1-2@m">
                        <label className="uk-form-label" htmlFor={"newbook_title-" + index}>Название книги</label>
                        <div className="uk-form-controls">
                            <input className="uk-input uk-width-1" id={"newbook_title-" + index} name={"newbook_title-" + index} type="text" onChange={boundTitleChange} placeholder=""/>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {bookTemplate}
            </div>
        )
    }
}

BooksRow.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        books: state.newList.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      updateStateBooks: (books) => dispatch(updateStateBooks(books))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksRow);
