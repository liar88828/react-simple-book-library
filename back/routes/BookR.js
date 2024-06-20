const express = require('express');
const {createBook, getBookById, updateBook, deleteBook, getBooks} = require("../controller/BookC");

const routerBook = express.Router();

routerBook.get('/books', getBooks);
routerBook.get('/books/:id', getBookById);
routerBook.post('/books', createBook);
routerBook.patch('/books/:id', updateBook);
routerBook.delete('/books/:id', deleteBook);

module.exports = {routerBook}