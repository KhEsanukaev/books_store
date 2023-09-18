const mongoose = require("mongoose");

const genreShema = mongoose.Schema({
  genreName: String,
  genreDescription: String
});

const Genre = mongoose.model("Genre", genreShema);

module.exports = Genre;