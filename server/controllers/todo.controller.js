const Todo = require("../models/todo.model");
const User = require("../models/user.model");


const CreateTodo = async (req, res) => {
    const userId=req.userId;
    const {title,description,completed}=req.body;
  try {
    const newTodo = await Todo.create({userId,title,description,completed});
    res.status(200).json(newTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
        message: "Internal server error",
    });
  }

}

const deleteTodo = async (req, res) => {
  const id=req.body;
  try {
    const newTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json(newTodo);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
        message: "Internal server error",
    });
  }
}

module.exports = {
    CreateTodo,deleteTodo
    };
    