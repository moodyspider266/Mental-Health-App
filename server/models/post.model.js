const mongoose=require('mongoose');

const postSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    content:{
        type:String,
        required:true
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    reply:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Reply'
    }],

});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;

