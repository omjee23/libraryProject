const express = require("express");
const issuecon = require("../controllers/issue.controller");
const router = express.Router();

router.post("/issue/book", issuecon.issueBookDetail);
router.put("/return/book", issuecon.returnBookDetail);

module.exports = router;
