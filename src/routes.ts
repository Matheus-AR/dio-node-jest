import { Router } from 'express';

import { UserController } from './controllers/usersController';

const routes = Router();

const usersController = new UserController()

routes.get('/users', usersController.listarUsuarios)

routes.post('/users', usersController.criarUsuario)

// status code - (200 e 201) (404)

export { routes };