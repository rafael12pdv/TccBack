const Sequelize  = require('sequelize');
const dbConfig = require('../config/database');
const Usuario = require('../models/Usuario');
const DadosAnimal = require('../models/DadosAnimal');
const connection = new Sequelize(dbConfig);

Usuario.init(connection);
DadosAnimal.init(connection);
DadosAnimal.associate(connection.models)

module.exports = connection;