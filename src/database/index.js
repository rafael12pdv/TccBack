const Sequelize  = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const Cadastro = require('../models/Cadastro');
const connection = new Sequelize(dbConfig);

User.init(connection);
Cadastro.init(connection);

module.exports = connection;