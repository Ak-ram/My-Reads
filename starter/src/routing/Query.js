import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import NotFound from "./404";
function Query({ queryingFunc, query, queryResult, shelf }) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => queryingFunc(event)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <div>{queryResult?.length} result{`${queryResult?.length === 1 ? '' : 's'}`}</div>
        <ol className="books-grid">

          {
            !queryResult?.length ? <NotFound /> : (
              queryResult.map((book) => (
                <Book key={book.id} book={book} shelf={shelf} />
              ))
            )
          }
        </ol>
      </div>
    </div>
  );
}

export default Query;
