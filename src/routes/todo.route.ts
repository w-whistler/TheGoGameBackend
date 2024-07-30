import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';

const router = Router();

router.post('/', TodoController.createTodo);
router.put('/:id', TodoController.updateTodo);
router.get('/', TodoController.listTodos);
router.delete('/:id', TodoController.deleteTodo);

export default router;
