const {Router}= require('express');
const {login,register}=require('../controllers/user.controller');
const {authMiddleware}=require('../middlewares/usermiddleware');
const userRoutes=Router();

userRoutes.route('/login').post(login);
userRoutes.route('/register').post(register);
//userRoutes.route('/logout').post(authMiddleware,logout);

module.exports=userRoutes;