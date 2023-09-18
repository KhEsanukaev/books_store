const { Router } = require('express');
const { authorsController } = require('../controllers/authors.controller');

const router = Router();

router.post('/author', authorsController.addAthor)


module.exports = router;
