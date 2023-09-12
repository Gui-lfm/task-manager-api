const taskService = require('../services/task.service');

const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  // envia uma requisição à camada service para criar uma tarefa, retorna um erro se necessário
  try {
    const response = await taskService.createTask(title, description, status);
    // caso type exista, significa que um erro ocorreu na camada service e será retornado o código do erro junto de uma mensagem. O mesmo ocorre para as outras funções abaixo.
    if (response.type) {
      return res.status(response.type).json({ message: response.message });
    }

    return res.status(201).json(response.message);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error while creating a new task.' });
  }
};

const getTasks = async (req, res) => {
  const { status } = req.query;

  try {
    // verifica se queryParams foram adicionados a requisição e chama a função correspondente
    if (status) {
      const response = await taskService.getTasksByStatus(status);
      if (response.type) {
        return res.status(response.type).json({ message: response.message });
      }

      return res.status(200).json(response);
    }
    // busca todas as tarefas presentes no banco de dados
    const tasks = await taskService.getTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    // Caso ocorra um erro não monitorado
    console.log(error)
    return res.status(500).json({ error: 'Error while fetching tasks.' });
  }
};

const updatedtask = async (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;

  try {
    const response = await taskService.updateTask(id, description, status);

    if (response.type) {
      return res.status(response.type).json({ message: response.message });
    }

    return res.status(200).json({ message: response.message });
  } catch (error) {
    // Caso ocorra um erro não monitorado
    console.log(error)
    return res.status(500).json({ error: 'Error while updating the task.' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await taskService.deleteTask(id);

    if (response.type) {
      return res.status(response.type).json({ message: response.message });
    }

    return res.status(204).json();
  } catch (error) {
    // Caso ocorra um erro não monitorado
    console.log(error)
    return res.status(500).json({ error: 'Error while deleting the task.' });
  }
};

module.exports = {
  createTask,
  getTasks,
  updatedtask,
  deleteTask,
};
