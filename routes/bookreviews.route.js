const { Router } = require('express');
const { bookreviewController } = require('../controllers/bookreviews.controller');

const router = Router();

router.get('/bookreviews/:id', bookreviewController.getBookreviews);

router.post('/bookreviews', bookreviewController.postBookreviews);
router.delete('/bookreviews/:id', bookreviewController.deleteBookreviews);



module.exports = router;