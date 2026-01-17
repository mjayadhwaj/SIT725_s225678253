// controllers/books.controller.js
const books = require("../services/books.service");

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
};
