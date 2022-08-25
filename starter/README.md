# MyReads: A Book Tracking App
##### _Read, Search, and categorize your Books_

As a component of [Udacity's React Nanodegree curriculum](https://www.udacity.com/course/react-nanodegree--nd019), the MyReads web app was developed using React.js.


# Overview

The navigation of this single-page software, which lets you save your books and keep track of what you're reading, takes place without refreshing the page.
Your digital book collection can be managed using MyReads. 3 shelves are supported by it.

- Currently Reading
- Want to Read
- Read

Furthermore, you can browse and add books to any shelf.


## Development

In addition to a backend API to connect to an Udacity backend server for book data and long-term storage, a static example of the CSS and HTML markup was also supplied.
The static code was then converted into react components, in accordance with the DOT (Do One Thing) principle, and interaction was added to the app.


### Starter Code
[https://github.com/udacity/reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter)

### Backend Server

The provided file [`BooksAPI.js`](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js) contains following methods to perform necessary operations on the backend:

* `getAll` To get all the books from the API
* `update` Update shelf information of the book
* `search` Search book in the database





### Features I needed to add

In terms of UI:

- The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
- The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
- The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
- each book (in the main page, or in the results of a search) has a control that allows users to move it between shelves. The control is tied to each book instance.
- the shelf the book is in is reflected through its control on all pages
- any changes in book shelves should be reflected on all pages.
    ie. If a book's shelf is changed on the search page, then it should appear in the responding shelf on the main page.


In terms of state
- Component state is transmitted from parent components to child components in terms of state. The setState() function is used instead of explicitly changing the state variable.
- Both the search page and the main application page show the same state for books: Both locations show the presence of a book on a bookshelf.


UI and URL are in sync; react-router was used.







## Installation

Clone the repository, change directories, and use NPM to install the dependencies.
- Clone/Download this repo.
- Run `npm install`or `yarn install` in the project directory to install dependencies.

## Start
- The project can be run with `npm start`
- Then it can be viewed in the browser at [http://localhost:3000](http://localhost:3000)
