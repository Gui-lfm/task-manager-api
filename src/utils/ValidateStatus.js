// verifica se o status fornecido possui um dos três valores válidos: pendente, em andamento ou concluida
const validateStatus = (receivedStatus) => {
  const validStatus = ['pendente', 'em andamento', 'concluída'];

  return validStatus.includes(receivedStatus);
};

module.exports = validateStatus;
