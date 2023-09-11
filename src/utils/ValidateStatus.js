const validateStatus = (receivedStatus) => {
  const validStatus = ['pendente', 'em andamento', 'concluída'];

  return validStatus.includes(receivedStatus);
};

module.exports = validateStatus;
