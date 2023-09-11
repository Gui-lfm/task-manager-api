const { Task } = require('../models');
const { createToken } = require('../utils/tokenFunctions');
const validateStatus = require('../utils/ValidateStatus');

// create task
const createTask = async (title, description, taskStatus) => {
  const token = createToken({ title, description, taskStatus });
  if (!validateStatus(taskStatus)) {
    return { type: 400, message: 'Invalid status format' };
  }
  const newTask = await Task.create({
    title,
    description,
    status: taskStatus,
    token,
  });

  return { type: null, message: newTask };
};

// get all tasks
const getTasks = () => Task.findAll();

// get task by id
const getTaskById = async (id) => {
  const task = await Task.findByPk(id);

  if (!task) {
    return { type: 404, message: 'Task does not exist' };
  }

  return { type: null, message: task };
};

// filter tasks by status
const getTasksByStatus = async (status) => {
  if (!validateStatus(taskStatus)) {
    return { type: 400, message: 'Invalid status format' };
  }

  const tasks = await Task.findAll({ where: { status } });

  if (tasks.length === 0) {
    return { type: 404, message: 'No tasks were found with requested status' };
  }

  return { type: null, message: tasks };
};

// update task
const updateTask = async (id, description, taskStatus) => {
  if (!validateStatus(taskStatus)) {
    return { type: 400, message: 'Invalid status format' };
  }

  await Task.update({ description, status: taskStatus }, { where: { id } });

  const updatedtask = await Task.findByPk(id);

  return { type: null, message: updatedtask };
};

// delete task
const deleteTask = async (id) => {
  const task = await Task.findByPk(id);

  await task.destroy();

  return { type: null };
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  getTasksByStatus,
  updateTask,
  deleteTask,
};
