const constResponse = require("../constants/cons.response");
const bookModel = require("../models/books.model");

const bookRegisterValidation = function (bookData) {
  if (
    !bookData.bookNo ||
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

const   updateBookValidation = function (bookData , bookId) {
  if (
    !bookId|| !bookData
  ) {
    return constResponse.fieldMissingError;
  }
  return bookModel.updateBookData(bookData , bookId);
};

const deleteBookValidation = function (bookId) {
  if (!bookId) {
    return constResponse.fieldMissingError;
  }
  return bookModel.deleteBookData(bookId);
};

module.exports = {
  bookRegisterValidation,
  getBookValidation,
  updateBookValidation,
  deleteBookValidation,
};
