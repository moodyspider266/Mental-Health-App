const mongoose = require('mongoose');


const replySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
          }, 
    post: { type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true
          }, 
    content: { type: String,
               required: true
             },
    
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;