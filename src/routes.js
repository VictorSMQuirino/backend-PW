const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');

//Lista todos os usuarios(*)
routes.get('/users', UserController.list)

//Lista um único usuário
routes.get('/users/:id', UserController.show)

//salva no banco um novo usuario
routes.post('/users', UserController.create)

//atualiza um usuario no banco
routes.put('/users/:id', UserController.update)

//deleta um usuario no banco
routes.delete('/users/:id', UserController.delete)

module.exports = routes;