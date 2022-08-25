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

  The Search Result, has a listed books with no .shelf property.





  */
  const queryProcess = async (search) => {
    BooksAPI.search(search).then((res) => {
      const handleShelf = res.map(booksSearch=>{
        books.forEach(book => {
          if(booksSearch.id === book.id){
            booksSearch.shelf = book.shelf
          }
        });
        return booksSearch
      })
      setQueryResult(handleShelf)
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
            path="/query"
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
