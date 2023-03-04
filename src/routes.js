const express = require('express');
const CadastroController = require('./controllers/UsuarioController');
const DadosAnimalController = require ('./controllers/DadosAnimalController');
const routes = express.Router();

routes.get('/Usuarios', CadastroController.index);
routes.post('/Usuarios', CadastroController.store);

routes.get('/DadosAnimal', DadosAnimalController.index);
routes.post('/DadosAnimal', DadosAnimalController.store);


module.exports = routes;