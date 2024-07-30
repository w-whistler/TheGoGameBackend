import { Response } from 'express';
import * as TodoService from '../services/todo.service';
import { AuthRequest } from '../types/auth.type';

export const createTodo = async (req: AuthRequest, res: Response) => {
    try {
        const { title, description } = req.body;

        if (!title || typeof title !== 'string' || title.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Title cannot be null',
            });
        }

        const result = await TodoService.createTodo({ user_id: req.userId as string, title, description });

        return res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

export const updateTodo = async (req: AuthRequest, res: Response) => {
    try {
        const updatedData = await TodoService.updateTodo(req.params.id, req.body);

        if (!updateTodo) {
            return res.status(404).json({
                success: false,
                message: 'Not Found',
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedData,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

export const listTodos = async (req: AuthRequest, res: Response) => {
    try {
        const todos = await TodoService.getTodos(req.userId as string);
        return res.status(200).json({
            success: true,
            data: todos,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

export const deleteTodo = async (req: AuthRequest, res: Response) => {
    try {
        const deletedTodo = await TodoService.deleteTodo(req.params.id);

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: 'Not Found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Deleted Successfully',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
