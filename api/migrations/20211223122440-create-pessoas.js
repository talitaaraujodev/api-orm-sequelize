'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => { // up de criar a migração
    await queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER // constraint - restrições
      },
      nome: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: { //criado em 
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: { // atualizado em
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => { // down dropar o db
    await queryInterface.dropTable('Pessoas');
  }
};