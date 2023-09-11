const express = require('express');
const controller = require('../controllers/task.controller');
const {
  verifyDescription,
  verifyStatus,
  verifyTask,
  verifyTitle,
  verifyToken,
} = require('../middlewares');

const TaskRoutes = express.Router();

TaskRoutes.get('/', controller.getTasks);
TaskRoutes.post(
  '/',
  verifyTitle,
  verifyDescription,
  verifyStatus,
  controller.createTask
);
TaskRoutes.put(
  '/:id',
  verifyToken,
  verifyTask,
  verifyDescription,
  verifyStatus,
  controller.updatedtask
);
TaskRoutes.delete('/:id', verifyToken, verifyTask, controller.deleteTask);

module.exports = TaskRoutes;
