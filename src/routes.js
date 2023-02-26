const express = require('express');
const CadastroController = require('./controllers/CadastroController');
const UserController = require('./controllers/UserController');
const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);


routes.get('/cadastros', CadastroController.index);
routes.post('/cadastros', CadastroController.store);


module.exports = routes;