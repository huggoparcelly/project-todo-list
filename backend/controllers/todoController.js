const { StatusCodes } = require('http-status-codes');
const todoService = require('../services/todoService');

const getTask = async (_req, res) => {
  const tasks = await todoService.getAllTasks();

  return res.status(StatusCodes.OK).json(tasks);
}

// dúvida, retorno da criação da task
const createTask = async (req, res) => {
  const tasks = todoService.registerTask(req.body);

  return res.status(StatusCodes.CREATED).json(tasks);
}

// const updateTask = async (req, res) => {

// }

module.exports = { 
  getTask, 
  createTask,
  // updateTask,
}