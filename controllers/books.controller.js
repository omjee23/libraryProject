const bookservice = require("../services/books.services");

const registerDetail = async (req, res) => {
  const detail = req.body;
  const registerInfo = await bookservice.bookRegisterValidation(detail);
  res.send(registerInfo);
};

const registerBookDetail = async (req, res) => {
  const bookDetail = req.body;
  const bookInfo = await bookservice.getBookValidation(bookDetail);
  res.send(bookInfo);
};

const updateBook = async (req, res) => {
  const bookData = req.body;
  const bookInfo = await bookservice.updateBookValidation(bookData);
  res.send(bookInfo);
};

const deleteBook = async (req, res) => {
  const bookData = req.params.bookId;
  const bookInfo = await bookservice.deleteBookValidation(bookData);
  res.send(bookInfo);
};

module.exports = { registerDetail, registerBookDetail, updateBook, deleteBook };
