const mongoose = require("mongoose");

const bookShema = mongoose.Schema({
  name: String,
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author"
    // Author model
  },
  
  genreId: {
     type: mongoose.SchemaTypes.ObjectId,
     ref: "Genre"

  } 
});

const Book = mongoose.model("Book", bookShema);

module.exports = Book;
