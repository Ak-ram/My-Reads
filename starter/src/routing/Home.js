import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";

function Home({shelf,books}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
      <BookShelf name="Currently Reading" books={books} category='currentlyReading' shelf={shelf}/>
      <BookShelf name="Want To Read" books={books} category='wantToRead' shelf={shelf}/>
      <BookShelf name="Read" books={books} category='read' shelf={shelf}/>
        </div>
      </div>
      <div className="open-search">
        {/* <a
          href="#d"
          // onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Add a book
        </a> */}
        <Link to='/query'>Add a book
        </Link>
      </div>
    </div>
  );
}

export default Home;
