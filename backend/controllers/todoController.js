const { StatusCodes } = require('http-status-codes');
const { getAllTasks } = require('../services/todoService');

const getTask = async (_req, res) => {
  const tasks = await getAllTasks();

  return res.status(StatusCodes.OK).send(tasks);
}

module.exports = { getTask }