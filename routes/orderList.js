const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const parser = require('../config/cloudinary');

//GET '/userId'
router.get('/:id', (req, res) => {
  const { id } = req.params;

  User.findById( id ).populate('orderList')
    .then( (foundUser) => {
      res.status(200).json(foundUser);
    })
    .catch((err) => {
      res.res.status(500).json(err);
    })
});
 
//PUT '/productId'
router.put('/', (req, res, next)=>{
  const user = req.body
  req.session.currentUser = user;
  console.log('req.body', req.session.currentUser)
   User.findByIdAndUpdate(user._id, user)
     .then((respone) => {
       res.json(respone);
     })
     .catch(err => {
       res.json(err);
     })
 })

module.exports = router;
