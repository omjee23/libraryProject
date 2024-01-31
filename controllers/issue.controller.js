const issueService = require("../services/issue.sevices");

const issueBookDetail = async (req, res) => {
  const detail = req.body;
  const issueInfo = await issueService.issueBookValidation(detail);
  res.send(issueInfo);
};

const returnBookDetail = async (req, res) => {
  const detail = req.body;
  const returnBookInfo = await issueService.returnBookValidation(detail);
  res.send(returnBookInfo);
};

module.exports = { issueBookDetail, returnBookDetail };
