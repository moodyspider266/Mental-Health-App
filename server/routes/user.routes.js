const {Router}= require('express');
const {login,register}=require('../controllers/user.controller');
const {CreateTodo,deleteTodo}=require('../controllers/todo.controller');
const {authMiddleware}=require('../middlewares/usermiddleware');
const userRoutes=Router();

userRoutes.route('/login').post(login);
userRoutes.route('/register').post(register);
//userRoutes.route('/logout').post(authMiddleware,logout);
userRoutes.route('/createTodo').post(authMiddleware,CreateTodo);
userRoutes.route('/deleteTodo').post(authMiddleware,deleteTodo);
module.exports=userRoutes;