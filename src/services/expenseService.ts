import  ExpenseTracker  from "../classes/ExpenseTracker.js";
import type { Expense } from "../types/interfaces.js";

const tracker = new ExpenseTracker(); // created ONCE, here, and only here

export const deleteExpense = (expense_id: number) => tracker.deleteExpense(expense_id);

export const getExpenses = (budgetId: number) => tracker.getExpensesFromBudget(budgetId);

export const addExpense = async (expense: Expense): Promise<void> => {
   await tracker.addExpense(expense);
};

export const getTotalExpenses = (userId: string) => tracker.getTotalExpenses(userId);

export const getAllExpenses = (userId: string) => tracker.getAllExpensesByUserId(userId);

