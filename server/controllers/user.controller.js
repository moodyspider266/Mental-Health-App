const User=require('../models/user.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {generateAccessToken,generateRefreshToken}=require('../utils/auth');
require('dotenv').config();

const register=async(req,res)=>{

     const {email,password,firstName,lastName}=req.body;

     try{

        const existingUser=await User.findOne({
            email
         });
       
         if(existingUser){
            return res.status(400).json({
                message:"user already registered"
            })
         }

         newUser=await User.create({email,password,firstName,lastName});
    
         const userId=newUser._id
         
         const accessToken=generateAccessToken(userId);
         const refreshToken=generateRefreshToken(userId);
         
         res.cookie('refreshToken',refreshToken,{
             httpOnly:true,
             sameSite:'None',
             secure:true
         })
     
         res.cookie('accessToken',accessToken,{
             httpOnly:true,
             sameSite:'None',
             secure:true
         })

         res.status(200).json({
            message:"user registered succesfully",
            user:newUser
         })

     }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
     }

}

const login=async (req,res)=>{

    const {email,password}=req.body;
  
    console.log("email",email); 
      console.log("password",password);
    try {

    const existingUser = await User.findOne({ email });
      
      if (!existingUser) {
          return res.status(400).json({ message: "User is not registered" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  
      if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid password" });
      }
  
      const userId=existingUser._id;
  
      const accessToken=generateAccessToken(userId);
      const refreshToken=generateRefreshToken(userId);
      
      res.cookie('accessToken',accessToken,{
          httpOnly:true,
          sameSite:'None',
          secure:true
      })
  
      res.cookie('refreshToken',refreshToken,{
          httpOnly:true,
          sameSite:'None',
          secure:true
      })

      res.status(200).json({ message:"wlcome back user",existingUser });
  
  } catch (err) {
      
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
  }
  
  
  }

  module.exports={
        register,
        login
    }
