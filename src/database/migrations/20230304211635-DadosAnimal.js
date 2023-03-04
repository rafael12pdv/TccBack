'use strict';

//const Usuario = require('../../models/Usuario');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dados_animals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      /*id_users: {
        type: Sequelize.INTEGER,
        //references: {model: 'usuarios', key: 'id_user' },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },*/
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexo:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      origem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      guia_animal: {
        type: Sequelize.STRING,
        allowNull: false,
      }
  });
},

async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('dados_animals');
}
};
