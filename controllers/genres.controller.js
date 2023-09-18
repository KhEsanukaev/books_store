const Genre = require('../models/Genre.model');

module.exports.genresController = {

    getGenres: (req, res) => {
        Genre.find()
          .then((data) => res.json(data))
          .catch((error) => res.json(error));
      },
    
      addGenres: (req, res) => {
        Genre.create({
          genreName: req.body.genreName,
        })
        .then((data) => res.json(data))
        .catch((error) => res.json(error));
        
      },
    
      deleteGenres: (req, res) => {
        Genre.findByIdAndRemove(req.params.id)
        .then(() =>  res.json("жанр удален"))
        .catch((error) => res.json(error))
      },
}