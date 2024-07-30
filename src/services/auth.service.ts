import jwt from 'jsonwebtoken';
import { users } from '../mockups/users';
import { server } from '../configs';

export const login = (email: string, password: string) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!user) {
        return null;
    }

    const token = jwt.sign({ id: user.id }, server.configs.jwt_secret, { expiresIn: 24000 });

    return { user: { email: user.email, id: user.id }, token };
};
