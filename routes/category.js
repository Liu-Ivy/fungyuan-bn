const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const Category = require('../models/category');

// GET '/category'
router.get('/', (req, res, next) => {
  Category.find()
    .then(allCategory => {
      res.json(allCategory)
    })
    .catch(err => {res.json(err)})
});

//POST '/category'
router.post('/', ( req, res, next) =>{
  const {title, image} = req.body;
  
  Category.create({ title, image})
  .than((response)=>{
    res.status(201).jason(response);
  })
  .catch((err)=>{
    res.status(500).json(err);
  })
})


module.exports = router;