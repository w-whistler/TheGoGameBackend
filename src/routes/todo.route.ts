import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';

const router = Router();

router.post('/', TodoController.createTodo);
router.get('/', TodoController.listTodos);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

export default router;
