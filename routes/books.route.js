const { Router } = require('express');
const { booksController } = require('../controllers/books.controller');

const router = Router();

router.post('/books', booksController.addBooks);
router.get('/books', booksController.getBooks);
router.delete('/books/:id', booksController.deleteBooks); // :id
router.patch('/books/:id', booksController.editBooks)        // patch
router.get('/books/:id', booksController.getBooksById);
router.get('/books/genre/:id', booksController.getBooksByCategory)




module.exports = router;