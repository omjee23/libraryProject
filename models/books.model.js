const { dbConstants } = require("../constants/db.constants");
const constResponse = require("../constants/cons.response");
const { connecToDb } = require("../models/db.model");
const { ObjectId } = require('mongodb');

const booksRegister = async (bookDetail) => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.bookCollection);
    const bookRegisterData = await dbCollection.findOne({
      bookNo: bookDetail.bookNo,
    });
    if (bookRegisterData) {
      return constResponse.registerBookExist;
    } else {
      await dbCollection.insertOne(bookDetail);
      return constResponse.registerMessage;
    }
  } catch (error) {
    console.error("registration error :", error);
    return constResponse.internalServerError;
  }
};

const getRegisteredBook = async () => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.bookCollection);
    const bookData = await dbCollection.find({}).toArray();
    if (bookData) {
      return bookData;
    } else {
      return constResponse.bookNotExist;
    }
  } catch (error) {
    console.error("book data missing error", error);
    return constResponse.internalServerError;
  }
};

const updateBookData = async (bookData , bookId) => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.bookCollection);
    const updateBook = await dbCollection.findOneAndUpdate(
      { _id: new ObjectId (bookId) },
      { $set: bookData },
      { returnDocument: "after" }
    );
    console.log(bookId , "dfghjkkjhgfdsdfg");
    return constResponse.bookUpdateSuccess;
  } catch (error) {
    console.error("Error updating book data :", error);
    return constResponse.internalServerError;
  }
};

const deleteBookData = async (bookId) => {
  try {
    const dbconn = await connecToDb();
    const dbCollection = dbconn.collection(dbConstants.bookCollection);
    const deleteBook = await dbCollection.deleteOne({
      _id: new ObjectId (bookId),
    });
    if (deleteBook.deletedCount === 1 ){
      return constResponse.deleteBook;
    }
    else {
      return constResponse.bookNotExist;
    }
  } catch (error) {
    console.error("book data is not delete", error);
    return constResponse.internalServerError;
  }
};

module.exports = {
  booksRegister,
  getRegisteredBook,
  updateBookData,
  deleteBookData,
};
