const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const productSchema = new Schema({
	name: String,
  img: String,
  description: String,
  category_id: {type: ObjectId, ref: 'Category' }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;