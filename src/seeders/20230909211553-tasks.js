'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Faxina',
        description: 'limpeza semanal da casa',
        status: 'concluída',
        token: '123456789',
      },
      {
        title: 'Exercicios',
        description: 'ir p/ a academia treinar',
        status: 'em andamento',
        token: '987654321',
      },
      {
        title: 'Exames de rotina',
        description: 'agendar ida ao médico',
        status: 'pendente',
        token: '123459876',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
