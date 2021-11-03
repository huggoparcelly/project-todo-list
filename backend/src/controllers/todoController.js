const { StatusCodes } = require('http-status-codes');
const todoService = require('../services/todoService');
const middlewares = require('../middlewares');

const getTask = async (_req, res) => {
  const tasks = await todoService.getAllTasks();

  return res.status(StatusCodes.OK).json(tasks);
}

// dúvida, retorno da criação da task
const createTask = async (req, res, next) => {
  
  const { error } = middlewares.validateTask(req.body);
  if (error) return next(error);

  await todoService.registerTask(req.body);

  return res.status(StatusCodes.CREATED).json({message: 'Criado com sucesso'});
}

const updateTask = async (req, res, next) => {
  const { id } = req.params;
  
  const { error } = middlewares.validateTask(req.body);
  if (error) return next(error);

  const updatedTask = await todoService.updatedTask(id, req.body);

  if (updatedTask.message) return res.status(updatedTask.code).json({ message: updatedTask.message });

  return res.status(StatusCodes.OK).json(updatedTask)
}

const removeTask = async (req, res) => {
  const { id } = req.params;
  
  const deletedTask = await todoService.deleteTask(id);
  if (deletedTask.message) return res.status(deletedTask.code).json({ message: deletedTask.message });

  return res.status(StatusCodes.OK).json({message: 'Deletado com sucesso'})
}

module.exports = { 
  getTask, 
  createTask,
  updateTask,
  removeTask,
}