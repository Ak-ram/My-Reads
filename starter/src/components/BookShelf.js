import React from 'react'
import Book from './Book'

function BookShelf({name,books,category,shelf}) {
    const bookCategory = books.filter(book=> book.shelf === category)
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {bookCategory.map(book=> <Book book={book} key={book.id} shelf={shelf}/>)}
      </ol>
    </div>
  </div>
  
  )
}

export default BookShelf