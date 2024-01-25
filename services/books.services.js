const constResponse = require("../constants/cons.response");
const bookModel = require("../models/books.model");

const bookRegisterValidation = function (bookData) {
  if (
    !bookData.bookId ||
    !bookData.bookName ||
    !bookData.author ||
    !bookData.price ||
    !bookData.genre
  ) {
    return constResponse.fieldMissingError;
  }
  return bookModel.booksRegister(bookData);
};

const getBookValidation = function () {
  return bookModel.getRegisteredBook();
};

const updateBookValidation = function (bookData) {
  if (
    !bookData.bookId ||
    !bookData.bookName ||
    !bookData.author ||
    !bookData.price ||
    !bookData.genre ||
    !bookData.status
  ) {
    return constResponse.fieldMissingError;
  }
  return bookModel.updateBookData(bookData);
};
const deleteBookValidation = function (bookData) {
  if (!bookData) {
    return constResponse.fieldMissingError;
  }
  return bookModel.deleteBookData(bookData);
};

module.exports = {
  bookRegisterValidation,
  getBookValidation,
  updateBookValidation,
  deleteBookValidation,
};
