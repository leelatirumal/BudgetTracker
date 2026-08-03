import type { Request, Response } from 'express';
import type{Users} from '../types/interfaces.js';
import * as authService from '../services/authServices.js';

const register = async (req: Request, res: Response) => {
    try {
        const user: Users = req.body;
        if (!user.name || !user.email || !user.password) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const result = await authService.register(user);
        res.status(201).json({ message: "User registered successfully", userId: user.user_id });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const result = await authService.login(email, password);
        res.status(200).json({ message: "Login successful", userId: result.user_id, token: result.token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

export { register, login };