import React, {useState} from 'react';
import "./App.css";
import BOOK_LIST from "./store/store.json";
import {Books} from "./Books";
import {AddForm} from "./AddForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {

  const [bookList, setBookList] = useState(BOOK_LIST);
  const finishedBooks = bookList.filter(book => book.isRead === true).length;
  const allBooks = bookList.length;
  const notReadBooks = bookList.filter(book => book.isRead === false).length;
  
  const removeBook = (id) => {
    setBookList(bookList.filter(book => book.id !== id ))
  }

  const removeAll = () => {
    const newArr = bookList.splice(bookList.length, 0);
    setBookList(newArr);
  }

  const onAddBook = book => {
    setBookList(prev => ([...prev, {...book, id: bookList.length + 1} ]))
  }

  function checkboxStatus (id) {
    let newToDo = bookList.filter(book => {
      if (book.id === id) {
        book.isRead = !book.isRead
      }
      return book;
    })
    setBookList(newToDo)
  }

  return (
    <>
    <div className="wrapper">
      <div className="container">
      <span className="title-name">Book check-list</span>
      <AddForm onAddBook={onAddBook}/>
    <div className="books-status">
        <span className="badge bg-info text-dark">All books : {allBooks}</span>
        <span className="badge bg-success">Read : {finishedBooks}</span>
        <span className="badge bg-warning text-dark">Not read : {notReadBooks}</span>
        <button type="button" className="btn btn-danger"
        onClick={() => removeAll()}>Delete All</button>
      </div>

    <div className="book-list">
    <div className="row row-cols-2">
      <Books data={bookList} onRemoveBook={removeBook} onCheckboxStatus={checkboxStatus}/>
      </div>
     </div>
     </div>
     </div>
    </>
  );
};

export default App;
