const { Schema, model } = require('mongoose')

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    author: String,
    date: String
  },
  {
    timestamps: true
  }
)

module.exports = model('Blog', blogSchema)
