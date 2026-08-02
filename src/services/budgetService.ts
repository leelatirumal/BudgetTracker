
import { BudgetTracker } from "../classes/BudgetTracker.js";
import type { Budget } from "../types/interfaces.js";

const budgetTracker = new BudgetTracker();  

export async function getBudgetByUserId(userId: string): Promise<Budget [] | null> {
    return budgetTracker.getBudgetByUserId(userId);
}

export async function addBudget(budget: Budget): Promise<Budget> {
    return budgetTracker.addBudget(budget);
}