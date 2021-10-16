var passport = require('passport')
require('../config/passport')(passport)
const blogsCtrl = {}

const Blog = require('../models/Blog')
// var passport = require('passport')

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

blogsCtrl.getBlogs = async (req, res) => {
  const blogs = await Blog.find()
  res.json(blogs)
}

blogsCtrl.createBlog = async (req, res) => {
  const { title, content, date, author } = req.body
  var token = getToken(req.headers)

  const newBlog = new Blog({
    title: title,
    content: content,
    date: date,
    author: author
  })
  if (token) {
    await newBlog.save()
    res.json({ message: 'Blog Saved: ' + newBlog })
  }
}

blogsCtrl.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  res.json(blog)
}

blogsCtrl.updateBlog = async (req, res) => {
  const { title, content, date, author } = req.body

  await Blog.findByIdAndUpdate(req.params.id, {
    title: title,
    content: content,
    date: date,
    author: author
  })
  res.json({ message: 'Blog Updated' })
}

blogsCtrl.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id)
  res.json({ message: 'Blog deleted' })
}

module.exports = blogsCtrl
