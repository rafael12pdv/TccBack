'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dados_producaos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_animal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_de_litros: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      data_coleta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: false,
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dados_producaos');
  }
};