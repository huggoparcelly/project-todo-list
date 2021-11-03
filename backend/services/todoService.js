const modelTodo = require('../models/todo')

const getAllTasks = async () => modelTodo.getTasks();

module.exports = { getAllTasks }