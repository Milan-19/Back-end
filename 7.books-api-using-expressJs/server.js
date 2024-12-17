// !Import the express library to create a web server
const express = require("express");

// !Create an instance of the express application
const app = express();

// !Define the port number where the server will listen for requests
const PORT = 8082;

// !Middleware to parse incoming JSON requests
app.use(express.json());

// !An array of books that acts as a simple in-memory database
const books = [
  { id: "1", title: "The great Gatsby", author: "F. Scott" },
  { id: "2", title: "The Moby Dic", author: "Herman" },
  { id: "3", title: "The MERN Stack", author: "Masynctech" },
];

/*
 *Route: GET "/"
 *Purpose: Base route that welcomes the user to the API
 */
app.get("/", (req, res) => {
  res.json({
    status: "success", // Response status
    message: "Welcome to my first API using expressJS", // Message to be shown
  });
});

/*
 *Route: GET "/books"
 *Purpose: Fetch the list of all books
 */
app.get("/books", (req, res) =>
  res.json({
    status: "success", // Response status
    message: "Books fetched successfully.", // Success message
    data: books, // The list of books
  })
);

/*
 *Route: GET "/books/:id"
 *Purpose: Fetch details of a single book by its ID
 */
app.get("/books/:id", (req, res) => {
  // *Extract the book ID from the route parameter
  const id = req.params.id;

  // *Search for the book with the given ID in the books array
  const bookFound = books.find((book) => book.id === id);

  // *If the book is not found, return an error response
  if (!bookFound) {
    return res.json({
      status: "failed", // Response status for failure
      message: `Book with id ${id} not found.`, // Error message
    });
  }

  // *If book is found, return its details
  res.json({
    status: "success", // Response status
    message: "Book fetched successfully.", // Success message
    data: bookFound, // The requested book data
  });
});

/*
 *Route: POST "/books"
 *Purpose: Add a new book to the books array
 */
app.post("/books", (req, res) => {
  // *Extract the new book details from the request body
  const newBook = req.body;

  // *Add the new book to the books array
  books.push(newBook);

  // *Return a success response with the updated list of books
  res.json({
    status: "success", // Response status
    message: "Book created successfully.", // Success message
    data: books, // Updated list of books
  });
});

/* 
  !Start the server and make it listen on the defined PORT
  *http://localhost:PORT will be the base URL for requests
*/
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
