const blogsCtrl = {};

const Blog = require('../models/Blog');

blogsCtrl.getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
}

blogsCtrl.createBlog = async (req, res) => {
    const {title, content, date, author} = req.body;
    
    const newBlog = new Blog({
        title: title, 
        content: content,
        date: date,
        author: author
    });

    await newBlog.save();
    res.json({message : 'Blog Saved'});
}

blogsCtrl.getBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
}

blogsCtrl.updateBlog = async (req, res) => {

    const {title, content, date, author} = req.body;

    await Blog.findByIdAndUpdate(req.params.id, {
        title: title, 
        content: content,
        date: date,
        author: author
    });
    res.json({message: 'Blog Updated'})
}

blogsCtrl.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({message: "Blog deleted"});
}

module.exports = blogsCtrl;