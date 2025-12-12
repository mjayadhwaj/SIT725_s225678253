// controller functions to return book data
const books = require("../services/books.service");

// get all books
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// get a specific book by id
exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
};
