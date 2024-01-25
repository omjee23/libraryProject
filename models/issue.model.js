const { dbConstants } = require("../constants/db.constants");
const constResponse = require("../constants/cons.response");
const db = require("../models/db.model");

const issueBook = async (bookDetail) => {
  try {
    const dbconn = await db.connecToDb();
    const dbCollection = dbconn.collection(dbConstants.bookCollection);
    const issueCollection = dbconn.collection(dbConstants.issueBookCollection);
    const issueBookInfo = await dbCollection.findOne({bookId: bookDetail.bookId,});
    if (issueBookInfo.status === "available") {
      const update = { $set: { status: "issued" } };
      const result = await dbCollection.updateOne(
        { bookId: bookDetail.bookId },
        update
      );
      bookDetail.issueDate = new Date().toJSON().slice(0, 10);
      const issueBook = await issueCollection.insertOne(bookDetail);
      return constResponse.bookIssue;

    } else if (issueBookInfo.status === "issued") {
      return constResponse.issueBookExist;
    } else {
      return constResponse.issueBookError;
    }
  } catch (error) {
    console.error("issued book error", error);
    return constResponse.internalServerError;
  }
};

const returnIssueBook = async (returnBookDetails) => {
  try {
    const dbconn = await db.connecToDb();
    const dbCollection = dbconn.collection(dbConstants.bookCollection);
    const issueBook = dbconn.collection(dbConstants.issueBookCollection);
    const returnBooks = await dbCollection.findOne({
      bookId: returnBookDetails.bookId,
    });
    if (returnBooks.status === "issued") {
      const update = { $set: { status: "available" } };
      const result = await dbCollection.updateOne(
        { bookId: returnBookDetails.bookId },
        update
      );
      const returnDate  = new Date().toJSON().slice(0,10);
      const updateDate = {$set : {returnDate : returnDate}}
      await issueBook.updateOne({ bookId: returnBookDetails.bookId},updateDate)
      return constResponse.returnIssueBook;
    } else if (returnBooks.status === "available") {
      return constResponse.returnBookExist;
    } else {
      return constResponse.returnBookError;
    }
  } catch (error) {
    console.error("return book error", error);
    return constResponse.internalServerError;
  }
};

module.exports = { issueBook, returnIssueBook };
