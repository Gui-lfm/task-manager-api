const { getTaskById } = require('../services/task.service');
// função responsável por verificar se o token presente em headers pertence a tarefa que deseja editar
const belongToTask = async (token, id) => {
  const task = await getTaskById(id);

  return token === task.message.dataValues.token;
};

module.exports = belongToTask;
