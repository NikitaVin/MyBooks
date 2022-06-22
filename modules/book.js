const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  bookImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
