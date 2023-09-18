const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.post('/genres', genresController.addGenres);
router.delete('/genres/:id', genresController.deleteGenres); // id
router.get('/genres', genresController.getGenres);

module.exports = router;
