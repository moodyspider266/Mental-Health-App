const express = require("express");
const { createReply, getRepliesForPost} = require("../controllers/reply.controller");
const { authMiddleware } = require("../middlewares/usermiddleware");
const router = express.Router();

router.post("/create", authMiddleware, createReply);
router.get("/get/:postId", authMiddleware, getRepliesForPost);


module.exports = router;