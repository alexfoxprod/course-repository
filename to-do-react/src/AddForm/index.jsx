import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const AddForm = ({onAddBook}) => {
  const [book, setBook] = useState({name: "",description: "",});
  const handleChange = e => {
  const {name, value} = e.target;
    setBook(book => ({
      ...book,
      [name]:value
    }))
  }


  return (
    <form className="adding-form"
    onSubmit={(e) => {
      e.preventDefault();
      if (book.name.length) {
        onAddBook(book);
      setBook({
        isRead: false,
        name: book.name,
        description: book.description,
        
      })
      }
    }}>
      <TextField label="Book name" variant="standard" type="text"
        placeholder="Add new book"
        value={book.name}
        name="name"
        onChange={handleChange}
        className="name-input"/>

      <TextField label="Description" variant="standard" 
      placeholder="Add description"
      value={book.description}
      type="text"
      name="description"
      onChange={handleChange}
      className="name-input"
      />
      <Button variant="contained" disableElevation type="submit">
      Add new book
    </Button>
  </form>
  );
}