import { model, Schema } from 'mongoose';
import { TodoStatus } from '../enums/todo.enum';

const TodoSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    status: {
        type: String,
        enum: Object.keys(TodoStatus),
        required: true,
    },
}, { timestamps: true });

export const TodoRepository = model('todo', TodoSchema);
