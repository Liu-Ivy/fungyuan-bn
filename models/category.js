const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  topic: String,
  image: String
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;