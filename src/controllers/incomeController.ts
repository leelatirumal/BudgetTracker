import * as incomeService from '../services/incomeService.js';
import type { AuthRequest } from '../types/interfaces.js';
import type { Response } from 'express';

async function getIncome(req: AuthRequest, res: Response) {
    const userId = Number(Number(req.params.userId));
    try {
        const totalIncome = await incomeService.getTotalIncome(userId);
        res.status(200).json({ totalIncome });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve total income' });
    }
}

async function addIncome(req: AuthRequest, res: Response) {
    const income = req.body;
    try {
        await incomeService.addIncome(income);
        res.status(201).json({ message: 'Income added successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add income' });
    }
}

async function getIncomesByUser(req: AuthRequest, res: Response) {
    const userId = Number(req.params.userId);
    if(typeof userId !== 'number' || isNaN(userId)) {
        return res.status(400).json({ message: "User id is required" });
    }
    if(userId != req.user_id) {
        return res.status(403).json({ message: "Forbidden: You can only access your own incomes" });
    }
    try {
        const incomes = await incomeService.getIncomesByUser(userId);
        res.status(200).json({ incomes });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve incomes' });
    }
}

export { getIncome, addIncome, getIncomesByUser };