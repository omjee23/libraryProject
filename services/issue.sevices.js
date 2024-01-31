const constResponse = require("../constants/cons.response");
const issuemodel = require("../models/issue.model");

const issueBookValidation = function (issueDetails) {
  if (
    !issueDetails.bookNo ||
    !issueDetails.memberDetails
  ) {
    return constResponse.fieldMissingError;
  }
  return issuemodel.issueBook(issueDetails);
};

const returnBookValidation = function (returnBook) {
  if (
    !returnBook.bookNo ||
    !returnBook.memberDetails
  ) {
    return constResponse.fieldMissingError;
  }

  return issuemodel.returnIssueBook(returnBook);
};

module.exports = { issueBookValidation, returnBookValidation };
