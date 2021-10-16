var express = require('express')
var router = express.Router()
// var mongoose = require('mongoose')
var Blog = require('../models/Blog.js')
var passport = require('passport')
require('../config/passport')(passport)
/* GET ALL BlogS */
router.get('/', /* passport.authenticate('jwt', { session: false }), */ function (
  req,
  res
) {
  /* var token = getToken(req.headers)
  if (token || null) { */
  Blog.find(function (err, blogs, next) {
    if (err) return next(err)
    res.json(blogs)
  })
} /* else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' })
  }
} */)
/* GET SINGLE Blog BY ID */
router.get('/:id', function (req, res, next) {
  Blog.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})
/* SAVE Blog */
router.post('/', passport.authenticate('jwt', { session: false }), function (
  req,
  res
) {
  var token = getToken(req.headers)
  if (token) {
    Blog.create(req.body, function (err, post, next) {
      if (err) return next(err)
      res.json(post)
    })
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' })
  }
})
/* UPDATE BOOK */
router.put('/:id', function (req, res, next) {
  Blog.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})
/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {
  Blog.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

var getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ')
    if (parted.length === 2) {
      return parted[1]
    } else {
      return null
    }
  } else {
    return null
  }
}

module.exports = router
