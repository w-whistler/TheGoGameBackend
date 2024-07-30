import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
   
        const data = AuthService.login(email, password);

        if (!data) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        } else {
            return res.status(200).json({ success: true, data });
        }
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
};
