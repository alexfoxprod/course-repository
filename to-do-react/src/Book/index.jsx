import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Book = ({count, item, onRemoveBook, onCheckboxStatus}) => {
  const bookTitle = `book-title ${item.isRead ? "isRead" : ""}`
  return (
  <>
        <Card sx={{ width: 345, height: 320}} className="book-card">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={bookTitle}>
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.description}
        </Typography>
      </CardContent>
      <CardActions className="action-row">
        <input className="form-check-input me-1" checked={item.isRead} type="checkbox" value="" onChange={()=> onCheckboxStatus(item.id)} />
        <Button size="small" onClick={()=> onRemoveBook(item.id)}>Delete book</Button>
      </CardActions>
    </Card>
  </>
  )
}

export default Book;
