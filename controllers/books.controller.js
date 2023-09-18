const Book = require("../models/Book.model");

module.exports.booksController = {
  addBooks: (req, res) => {
    const {name, author} = req.body
    Book.create({
        name: name,
        author: author
    })
      .then((data) => res.json(data))
      .catch((error) => res.json(error));
  },

deleteBooks: (req, res) => {
    Book.findByIdAndRemove() // id
    .then(() => res.json(data))
      .catch(() => res.json('книга удалена'));
  },

  editBooks: (req, res) => { // editBook
    Book.patch()             // method patch
    .then((data) => {
      res.json(data);
    });
},

getBooksByCategory: (req, res) => {
    Book.find({categoryId: req.param.id}).populate(['author', 'genreId'])

     .then((data) => res.json(data))
     .catch((error) => res.json(error))
  },


  getBooks: (req, res) => {
    Book.find().populate(['author', 'genreId'])
    .then(() => { res.json("книги найдены")
    .catch((error) => res.json(error))
    })
},


getBooksById: (req, res) => {
    Book.findById(req.params.id).populate(['author', 'genreId'])
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
  
  },




};
