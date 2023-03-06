const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const DadosAnimalController = require ('./controllers/DadosAnimalController');
const DadosProducaoController = require ('./controllers/DadosProducaoController');
const DadosSanitarioController = require ('./controllers/DadosSanitarioController');
const routes = express.Router();

routes.get('/Usuario', UsuarioController.index);
routes.post('/Usuario', UsuarioController.store);
routes.post('/UsuarioValida', UsuarioController.validaEmail);

routes.get('/DadosAnimal', DadosAnimalController.index);
routes.post('/DadosAnimal', DadosAnimalController.store);

routes.get('/DadosProducao', DadosProducaoController.index);
routes.post('/DadosProducao', DadosProducaoController.store);

routes.get('/DadosSanitario', DadosSanitarioController.index);
routes.post('/DadosSanitario', DadosSanitarioController.store);


module.exports = routes;