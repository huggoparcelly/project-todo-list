const modelTodo = require('../models/todoModel')
const dateNow = require('../schema/date');
const getAllTasks = async () => modelTodo.getTasks();


const registerTask = async (body) => {
  const { task, status } = body;
  const date = dateNow();
  return modelTodo.addTask(task, status, date);
}

const updatedTask = async (id, body) => modelTodo.upTask(id, body);


const deleteTask = async (id) => modelTodo.removeTask(id);

module.exports = { 
  getAllTasks,
  registerTask,
  updatedTask,
  deleteTask,
}