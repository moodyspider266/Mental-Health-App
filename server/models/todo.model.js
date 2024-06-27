const mongoose=require("mongoose");

const TodoSchema=new mongoose.Schema({
    
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength: 100
    },
    description:{
        type:String,
        trim:true,
        maxLength: 500
    },
    completed:{
        type:Boolean,
        default:false
    },

});

const Todo=new mongoose.model("Todo",TodoSchema);

module.exports=Todo;
