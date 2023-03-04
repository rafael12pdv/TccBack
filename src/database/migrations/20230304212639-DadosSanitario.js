'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dados_sanitarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero_nf:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome_medicacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dose_utilizada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      data_aplicacao: {
        type: Sequelize.STRING,
        allowNull: false,
      }
  });
},

async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('dados_sanitarios');
}
};
