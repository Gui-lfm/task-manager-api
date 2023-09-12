'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Faxina',
        description: 'limpeza semanal da casa',
        status: 'concluída',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpdGxlIjoiRmF4aW5hIiwiZGVzY3JpcHRpb24iOiJsaW1wZXphIHNlbWFuYWwgZGEgY2FzYSIsInRhc2tTdGF0dXMiOiJjb25jbHXDrWRhIn0sImlhdCI6MTY5NDUyOTc2NywiZXhwIjoxNjk0OTYxNzY3fQ.RC1O6kfFza4RmWmDdPjsozfRN0PGHHDJmLapxCeZrgw',
      },
      {
        title: 'Exercicios',
        description: 'ir p/ a academia treinar',
        status: 'em andamento',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpdGxlIjoiRXhlcmNpY2lvcyIsImRlc2NyaXB0aW9uIjoiaXIgcC8gYSBhY2FkZW1pYSB0cmVpbmFyIiwidGFza1N0YXR1cyI6ImVtIGFuZGFtZW50byJ9LCJpYXQiOjE2OTQ1MzE3MTMsImV4cCI6MTY5NDk2MzcxM30.0TUPQuZNOzSpAjwX8b-NARdc8cez9Z_bTf5884KXXs8',
      },
      {
        title: 'Exames de rotina',
        description: 'agendar ida ao médico',
        status: 'pendente',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpdGxlIjoiRXhhbWVzIGRlIHJvdGluYSIsImRlc2NyaXB0aW9uIjoiYWdlbmRhciBpZGEgYW8gbcOpZGljbyIsInRhc2tTdGF0dXMiOiJwZW5kZW50ZSJ9LCJpYXQiOjE2OTQ1MzE2NTEsImV4cCI6MTY5NDk2MzY1MX0._AJfN0IocmEkeuyLA2NObW7vUb_HIYUrcsMcFphKl7I',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
