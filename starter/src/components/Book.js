import React from "react";

function Book({ shelf, book }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => {
                shelf(book, e.target.value);
              }}
              value={book?.shelf}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">{book?.authors}</div>
        <div className="book-shelf">
          {book.shelf ? book.shelf : "no shelf"}
        </div>
      </div>
    </li>
  );
}

export default Book;
