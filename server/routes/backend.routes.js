const  {Router}=require("express");
const userRoutes=require("./user.routes");
const postRoutes=require("./post.routes");
const replyRoutes=require("./reply.routes");
const backendroutes=Router();

backendroutes.use('/user',userRoutes);
backendroutes.use('/post',postRoutes);
backendroutes.use('/reply',replyRoutes);


module.exports=backendroutes;