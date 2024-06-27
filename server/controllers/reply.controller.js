const Reply = require("../models/reply.model");
const Post = require("../models/post.model");
const createReply = async (req, res) => {
    try {
        const { postId, content } = req.body;
        const userId = req.userId;

        const newReply = await Reply.create({
            user: userId,
            post: postId,
            content,
        });

        await Post.findByIdAndUpdate(postId, { $push: { replies: newReply._id } });

        res.status(201).json(newReply);
    } catch (error) {
        console.error("Error creating reply:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getRepliesForPost = async (req, res) => {
    try {
        const { postId } = req.params;

        const replies = await Reply.find({ post: postId }).populate('user', '-password');
        res.status(200).json(replies);
    } catch (error) {
        console.error("Error fetching replies:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { createReply, getRepliesForPost };