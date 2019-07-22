const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const Product = require('../models/product');
const parser = require('../config/cloudinary');

//GET '/product'
router.get('/:id', (req, res) => {
  console.log('req.params', req.params)
  const { id } = req.params;

  Product.find( {category_id: id }).populate('category_id')
    .then( (foundProduct) => {
      res.status(200).json(foundProduct);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
});

//POST '/product'
router.post('/', ( req, res, next) =>{
  const { name, imageUrl, description, category_id} = req.body;
  const newProduct = new Product({name, img: imageUrl, description, category_id})
  
  // console.log('req.body', name,imageUrl, description, category_id)
  // const saveProduct = newProduct.save()
  
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
  console.log('file upload');
  if (!req.file) {
    next(new Error('No file uploaded!'));
  };
  const imageUrl = req.file.secure_url;
  res.json(imageUrl).status(200);
});



module.exports = router;