const mongoose = require("mongoose");

const bookreviewShema = mongoose.Schema({
  
  reviewText: String,
  reviewAuthorName: String,
  bookRev: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book"
    // Book model
  }

});

const Bookreview = mongoose.model("Bookreview", bookreviewShema);

module.exports = Bookreview;