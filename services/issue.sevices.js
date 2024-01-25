const constResponse = require("../constants/cons.response");
const issuemodel = require("../models/issue.model");

const issueBookValidation = function (issueDetails) {
  if (
    !issueDetails.bookId ||
    !issueDetails.bookName ||
    !issueDetails.author ||
    !issueDetails.genre ||
    !issueDetails.memberDetails
  ) {
    return constResponse.fieldMissingError;
  }
  return issuemodel.issueBook(issueDetails);
};

const returnBookValidation = function (returnBook) {
  if (
    !returnBook.bookId ||
    !returnBook.bookName ||
    !returnBook.author ||
    !returnBook.genre ||
    !returnBook.memberDetails
  ) {
    return constResponse.fieldMissingError;
  }

  return issuemodel.returnIssueBook(returnBook);
};

module.exports = { issueBookValidation, returnBookValidation };
