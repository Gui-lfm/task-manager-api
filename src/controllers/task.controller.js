const taskService = require('../services/task.service');

const createTask = async (req, res) => {
  const { title, description, status } = req.body;

  const response = await taskService.createTask(title, description, status);

  if (response.type) {
    return res.status(response.type).json({ message: response.message });
  }

  return res.status(201).json(response.message);
};

const getTasks = async (_req, res) => {
  const tasks = await taskService.getTasks();

  return res.status(200).json(tasks);
};

const updatedtask = async (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;

  const response = await taskService.updateTask(id, description, status);

  if (response.type) {
    return res.status(response.type).json({ message: response.message });
  }

  return res.status(200).json({ message: response.message });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const response = taskService.deleteTask(id);

  if (response.type) {
    return res.status(response.type).json({ message: response.message });
  }

  return res.status(204).json();
};

module.exports = {
  createTask,
  getTasks,
  updatedtask,
  deleteTask,
};
