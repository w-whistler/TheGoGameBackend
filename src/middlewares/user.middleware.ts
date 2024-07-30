import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../types/auth.type';
import { server } from '../configs';

export const validateToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
    
        const decodedToken = jwt.verify(token, server.configs.jwt_secret);
    
        req.userId = (decodedToken as any).id;
        
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
};
