const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const Product = require('../models/product');
const parser = require('../config/cloudinary');

//GET '/product'
router.get('/getCategory/:id', (req, res) => {
  const { id } = req.params;
  Product.find( {category_id: id }).populate('category_id')
    .then( (foundProduct) => {
      res.status(200).json(foundProduct);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
});

router.get('/getOne/:id', (req, res) => {
  const { id } = req.params;
  Product.findById( id )
    .then( (Product) => {
      res.status(200).json(Product);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
});

//POST '/product'
router.post('/', ( req, res, next) =>{
  const { name, imageUrl, description, category_id} = req.body;
  const newProduct = new Product({name, img: imageUrl, description, category_id})
  const saveProduct = newProduct.save()
  Product.create({ name, img: imageUrl, description, category_id})
  .then((response)=>{
    res.status(201).json(response);
  })
  .catch((err)=>{
    res.status(500).json(err);
  })
})

//POST '/image'
router.post('/image', parser.single('photo'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
  };
  const imageUrl = req.file.secure_url;
  res.json(imageUrl).status(200);
});

//Delete '/:id'
router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
  .then((response) => {
    res
      .status(202) 
      .json(response);
  })
  .catch( err => {
    res.status(500).json(err);
  })
})

module.exports = router;