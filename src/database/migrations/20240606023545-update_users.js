'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Renomeia a coluna de 'update_at' para 'updated_at'
    await queryInterface.renameColumn('users', 'update_at', 'updated_at');
  },

  down: async (queryInterface, Sequelize) => {
    // Reverte o nome da coluna de volta para 'update_at' se necessário
    await queryInterface.renameColumn('users', 'updated_at', 'update_at');
  }
};
