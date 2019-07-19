const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const Product = require('../models/product');

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

// //POST '/product'
// router.post('/', ( req, res, next) =>{
//   const { name, img, description, category_id} = req.body;
  
//   Product.create({ name, img, description, category_id})
//   .than((response)=>{
//     res.status(201).jason(response);
//   })
//   .catch((err)=>{
//     res.status(500).json(err);
//   })
// })


module.exports = router;