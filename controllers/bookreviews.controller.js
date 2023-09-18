const Bookreview = require('../models/Bookreview.model');

module.exports.bookreviewController = {
    getBookreviews: (req, res) => {
        Bookreview.find({genreId: req.params.id}).populate('bookRev') // find({книга: "значение"})
          .then((data) => res.json(data))
          .catch((error) => res.json(error));
      },
    
      postBookreviews: (req, res) => {
        Bookreview.create({
            reviewText: req.body.reviewText,
            reviewAuthorName: req.body.reviewAuthorName,
            bookRev: req.body.bookRev
          
        })
        .then((data) => {
          res.json(data);
        });
      },
    
      deleteBookreviews: (req, res) => {
        Bookreview.findByIdAndRemove(req.param.id) // id
    
          .then((data) => res.json(data))
          .catch((error) => res.json(error));
      },
    
}