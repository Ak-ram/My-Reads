import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Query from "./routing/Query";
import Home from "./routing/Home";
function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setBooks(res);
    });
  }, []);

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => setBooks(res));
  };

  /*
  RECHANGED !

  Search process returned a list of books as a response, but these books come with 
  no .shelf property, so to handle this, we need to:
    1- Loop over all reponse returned books.
    2- Check the existance of each returned book in ['currently reading','want to read', 'read'] sections -- main page--
    3- If returned book already exist in the main page, then we set shelf property to it with the value that present in it's mirror in main page.
  
    ❗ DO YOU HAVE ANOTHER SOLUTIONS? 🤔
  */
  const queryProcess = async (search) => {
    BooksAPI.search(search).then((res) => {
      console.log(res)
      if (res instanceof Array) {
        const handleShelf = res.map(booksFromSearch => {
          books.find(bookAlreadyExistInMainPage => {
            if (booksFromSearch.id === bookAlreadyExistInMainPage.id) {
              booksFromSearch.shelf = bookAlreadyExistInMainPage.shelf
            }
            else {
              booksFromSearch.shelf = 'none'
            }
            return null;
          });
          return booksFromSearch
        })
        setQueryResult(handleShelf)
      } else {
        console.log('not found');
        setQueryResult([])
      }
    });

  };
  const querying = async (event) => {
    let query = await event.target.value; // any event consider async process, so we should wait it
    setQuery(await query);
    queryProcess(query);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/search"
            element={
              <Query
                queryingFunc={querying}
                query={query}
                queryResult={queryResult}
                shelf={changeShelf}
              />
            }
          ></Route>
          <Route
            path="/"
            element={<Home books={books} shelf={changeShelf} />}
          ></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
