import type{ AuthRequest, Budget } from "../types/interfaces.js";
import * as budgetService from "../services/budgetService.js";

import type { Request, Response } from "express";

export async function getBudgets(req: AuthRequest, res: Response): Promise<void> {
    const userId = Number(Number(req.params.userId));
    if(typeof userId !== "number" || isNaN(userId)) {
        res.status(400).send("Invalid userId");
        return;
    }
    const budgets = await budgetService.getBudgetByUserId(userId);
    if (budgets) {
        res.json(budgets);
    } else {
        res.status(404).send("Budgets not found");
    }
}

export async function addBudget(req: AuthRequest, res: Response): Promise<void> {
    const budget: Budget = req.body;
    try {
        const newBudget = await budgetService.addBudget(budget);
        res.status(201).json(newBudget);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
}

