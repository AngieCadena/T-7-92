
const {Router} = require('express');
const router = Router();

const {getBlogs, createBlog, getBlog, deleteBlog, updateBlog} = require('../controllers/Blogs.controllers');

router.route('/')
    .get(getBlogs)
    .post(createBlog);

router.route('/:id')
    .get(getBlog)
    .delete(deleteBlog)
    .put(updateBlog);

module.exports = router;