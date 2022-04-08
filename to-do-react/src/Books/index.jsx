import React from 'react';
import Book from '../Book'

export const Books = (props) => {
  return (
      <>
      {props.data.map((book) => {
       return (
          <div key={book.id} className="book-card col-sm-12 col-md-6 col-lg-4">
          <Book key={book.id} id={book.id} item={book} name={book.name} description={book.description} onRemoveBook={props.onRemoveBook} onCheckboxStatus={props.onCheckboxStatus}/>
        </div>
       ) 
     })}
      </>
  )
}
