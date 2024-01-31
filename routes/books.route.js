const express = require("express");
const bookCon = require("../controllers/books.controller");
const router = express.Router();

router.post("/books", bookCon.registerDetail);
router.get("/books", bookCon.registerBookDetail);
router.put("/books/:bookId", bookCon.updateBook);
router.delete("/book/:bookId", bookCon.deleteBook);

module.exports = router;
