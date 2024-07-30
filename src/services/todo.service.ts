import { TodoStatus } from '../enums/todo.enum';
import { TodoRepository } from '../models/todo.model';
import { TodoCreateInput, TodoUpdateInput } from '../types';

export const createTodo = (data: TodoCreateInput) => {
    return TodoRepository.create({ ...data, status: TodoStatus.TODO });
};

export const getTodos = (userId: string) => {
    return TodoRepository.find({ user_id: userId }).lean();
};

export const updateTodo = (id: string, data: TodoUpdateInput) => {
    return TodoRepository.findByIdAndUpdate(id, data, { lean: true, new: true });
};

export const deleteTodo = (id: string) => {
    return TodoRepository.findByIdAndDelete(id);
};
