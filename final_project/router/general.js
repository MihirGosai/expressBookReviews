const express = require('express');
let books = require("./booksdb.js");
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    if (users.some(user => user.username === username)) {
        return res.status(409).json({ message: "User already exists" });
    }
    users.push({ username, password });  // ✅ Store user correctly
    return res.status(201).json({ message: "User registered successfully" });
});

public_users.get('/', async (req, res) => {
  res.status(200).json({ books });
});

public_users.get('/isbn/:isbn', async (req, res) => {
  const isbn = parseInt(req.params.isbn);
  books[isbn] ? res.status(200).json(books[isbn]) : res.status(404).json({ message: "Book not found" });
});

public_users.get('/author/:author', async (req, res) => {
    const result = Object.values(books).filter(book => book.author === req.params.author);
    return result.length > 0 ? res.status(200).json(result) : res.status(404).json({ message: "No books found by this author" });
});

public_users.get('/title/:title', async (req, res) => {
    const result = Object.values(books).filter(book => book.title.toLowerCase() === req.params.title.toLowerCase());
    return result.length > 0 ? res.status(200).json(result) : res.status(404).json({ message: "No books found with this title" });
});

public_users.get('/review/:isbn', async (req, res) => 
  books[req.params.isbn]?.reviews ? res.status(200).json(books[req.params.isbn].reviews) : res.status(404).json({ message: "No reviews found" })
);

module.exports.general = public_users;
