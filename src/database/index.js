const Sequelize  = require('sequelize');
const dbConfig = require('../config/database');
const Usuario = require('../models/Usuario');
const DadosAnimal = require('../models/DadosAnimal');
const DadosProducao = require('../models/DadosProducao');
const DadosSanitario = require('../models/DadosSanitario')
const connection = new Sequelize(dbConfig);

Usuario.init(connection);
DadosAnimal.init(connection);
DadosProducao.init(connection);
DadosSanitario.init(connection);


module.exports = connection;