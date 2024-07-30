import { Router } from 'express';
import { validateToken } from '../middlewares';
import todoRoutes from './todo.route';
import authRoutes from './auth.route';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/todo', validateToken, todoRoutes);

export default routes;
