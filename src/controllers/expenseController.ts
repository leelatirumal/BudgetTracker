import type { Request, Response } from 'express';
console.log("Expense controller is being initialized--0...");
import type { Expense } from '../types/interfaces.js';
import * as expenseService from '../services/expenseService.js';

async function getExpenses(req: Request, res: Response) {
    try {
        const { budget_id } = req.params;
        const budgetId = Number(budget_id);
        if (isNaN(budgetId)) {
            return res.status(400).json({ message: "Budget id is required" });
        }
        const expenses = await expenseService.getExpenses(budgetId);
        res.status(200).json({ expenses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenses', error });
    }
}

async function addExpense(req: Request, res: Response) {
    try {
        const expenseData: Expense = req.body;
        if (!expenseData.expense_id || !expenseData.expense_amount || !expenseData.budget_id || !expenseData.expense_date) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        await expenseService.addExpense(expenseData);
        res.status(201).json(expenseData);
    } catch (error) {
        res.status(500).json({ message: 'Error creating expense', error });
    }
}

async function deleteExpense(req: Request, res: Response) {
    try {
        let { expense_id } = req.params;
        const expenseId = Number(expense_id);
        if (isNaN(expenseId)) {
            return res.status(400).json({ message: "Expense id is required" });
        }
        await expenseService.deleteExpense(expenseId);
        res.status(200).json({ message: `Expense with id ${expenseId} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting expense', error });
    }   
}

async function getTotalExpenses(req: Request, res: Response) {
    try {
        const { userId } = req.params;
        if(typeof userId !== 'string' || userId.trim() === '') {
            return res.status(400).json({ message: "User id is required" });
        }
        const totalExpenses = await expenseService.getTotalExpenses(userId);
        res.status(200).json({ totalExpenses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching total expenses', error });
    }
}

async function getAllExpenses(req: Request, res: Response) {
    try {
        const { userId } = req.params;
        if(typeof userId !== 'string' || userId.trim() === '') {
            return res.status(400).json({ message: "User id is required" });
        }
        const expenses = await expenseService.getAllExpenses(userId);
        res.status(200).json({ expenses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenses', error });
    }
}

export { getExpenses, addExpense, deleteExpense, getTotalExpenses, getAllExpenses };

