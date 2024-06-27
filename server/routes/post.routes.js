const express = require('express');

const {getPosts, createPost, likePost} = require('../controllers/post.controller');

const {authMiddleware}=require('../middlewares/usermiddleware');
const router = express.Router();

router.get("/getposts", authMiddleware, getPosts);
router.post("/create", authMiddleware, createPost);
router.post("/like/:postId", authMiddleware, likePost);

module.exports = router;