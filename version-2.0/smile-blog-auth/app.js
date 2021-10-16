var express = require('express')
var path = require('path')
// var favicon = require('serve-favicon')
var auth = require('./routes/auth')
var logger = require('morgan')
var blog = require('./routes/blogs')
var app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: 'false' }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/blogs', express.static(path.join(__dirname, 'dist')))
app.use('/blog', blog)
app.use('/api/auth', auth)

var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose
  .connect(
    'mongodb+srv://smilebang:smilebang@cluster0.eauza.mongodb.net/smile-blogs2?retryWrites=true&w=majority', {
      promiseLibrary: require('bluebird')
    }
  )
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})
// restful api error handler
app.use(function (err, req, res, next) {
  console.log(err)
  if (req.app.get('env') !== 'development') {
    delete err.stack
  }
  res.status(err.statusCode || 500).json(err)
})
module.exports = app
