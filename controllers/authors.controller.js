const Author = require("../models/Autor.model");

module.exports.authorsController = {
  addAthor: (req, res) => {
    Author.create({
      authorName: req.body.authorName,
      infoAboutHim: req.body.infoAboutHim,
    })
      .then(() => res.json("Добавлено"))
      .catch((error) => res.json(error));
  },
};
