const { StatusCodes } = require('http-status-codes');
const modelTodo = require('../models/todoModel')
const dateNow = require('../schema/date');


const getAllTasks = async () => modelTodo.getTasks();

const registerTask = async (body) => {
  const { task, status } = body;
  const date = dateNow();
  return modelTodo.addTask(task, status, date);
}

const updatedTask = async (id, body) => {
  
  const task = await modelTodo.upTask(id, body)

  if (!task) return { code: StatusCodes.NOT_FOUND, message: 'Tarefa não encontrada' };

  return task;
};

const deleteTask = async (id) => {
 const taskRemoved = await modelTodo.removeTask(id);

 if (!taskRemoved) return { code: StatusCodes.NOT_FOUND, message: 'Tarefa não encontrada' };

 return taskRemoved;
}

const updatedStatus = async (id, body) => {
  const status = await modelTodo.upStatus(id, body)

  if (!status) return { code: StatusCodes.NOT_FOUND, message: 'Status não encontrado' };

  return status;
}

module.exports = { 
  getAllTasks,
  registerTask,
  updatedTask,
  deleteTask,
  updatedStatus,
}