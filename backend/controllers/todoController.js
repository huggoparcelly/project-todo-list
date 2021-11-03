const { StatusCodes } = require('http-status-codes');
const todoService = require('../services/todoService');

const getTask = async (_req, res) => {
  const tasks = await todoService.getAllTasks();

  return res.status(StatusCodes.OK).json(tasks);
}

// dúvida, retorno da criação da task
const createTask = async (req, res) => {
  const tasks = await todoService.registerTask(req.body);

  return res.status(StatusCodes.CREATED).json(tasks);
}

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await todoService.updatedTask(id, req.body);

  return res.status(StatusCodes.OK).json(updatedTask)
}

const removeTask = async (req, res) => {
  const { id } = req.params;
  
  await todoService.deleteTask(id);

  return res.status(StatusCodes.OK).json({message: 'Deletado com sucesso'})
}

module.exports = { 
  getTask, 
  createTask,
  updateTask,
  removeTask,
}