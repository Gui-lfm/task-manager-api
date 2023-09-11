const { getTaskById } = require('../services/task.service');
// middleware responsável por verificar se o id corresponde a uma tarefa existente
module.exports = async (req, res, next) => {
  const { id } = req.params;

  const taskExists = await getTaskById(id);

  if (taskExists.type) {
    return res.status(taskExists.type).json({ message: taskExists.message });
  }

  next();
};
