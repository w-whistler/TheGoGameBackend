import { TodoStatus } from '../enums/todo.enum';

export type Todo = {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  status: TodoStatus
}

export type TodoCreateInput = Pick<Todo, 'user_id' | 'title' | 'description'>

export type TodoUpdateInput = Partial<Pick<Todo, 'title' | 'description' | 'status'>>
