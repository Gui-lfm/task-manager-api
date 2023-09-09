/**
 *
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} Datatypes
 */
const TaskSchema = (Sequelize, Datatypes) => {
  const TaskTable = Sequelize.define('Task', {
    title: Datatypes.STRING,
    description: Datatypes.STRING,
    status: Datatypes.STRING,
    token: Datatypes.STRING,
  });

  return TaskTable;
};

module.exports = TaskSchema;
