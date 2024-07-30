import jwt from 'jsonwebtoken';
import { users } from '../mockups/users';
import { server } from '../configs';

export const login = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return null;
    }

    const token = jwt.sign({ id: user.id }, server.configs.jwt_secret, { expiresIn: 24000 });

    return token;
};
