const express = require('express');
const bookCon = require('../controllers/books.controller')
const router = express.Router();


router.post('/books/register', bookCon.registerDetail);
router.get('/get/books', bookCon.registerBookDetail)
router.put('/book/update', bookCon.updateBook)
router.delete('/delete/book/:bookId', bookCon.deleteBook)
module.exports = router;