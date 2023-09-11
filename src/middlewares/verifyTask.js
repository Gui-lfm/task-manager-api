const { getTaskById } = require('../services/task.service');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const taskExists = await getTaskById(id);

  if (taskExists.type) {
    return res.status(taskExists.type).json({ message: taskExists.message });
  }

  next();
};
