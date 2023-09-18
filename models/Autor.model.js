const mongoose = require("mongoose");

const authorShema = mongoose.Schema({
  
  authorName: String,
  infoAboutHim: String
});

const Author = mongoose.model("Author", authorShema);

module.exports = Author;
