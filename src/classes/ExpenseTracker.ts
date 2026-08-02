import pool from "../config/db.js";
import type{ Expense } from "../types/interfaces.js";

class ExpenseTracker {
  async addExpense(expense: Omit<Expense, "id">): Promise<void> {
    await pool.query(
      "INSERT INTO expenses (expense_id, expense_amount, expense_name, budget_id, expense_date) VALUES (?, ?, ?, ?, ?)",
      [expense.expense_id, expense.expense_amount, expense.expense_name, expense.budget_id, expense.expense_date]
    );
  }

  async getTotalExpenses(userId: string): Promise<number> {
    const [rows]: any = await pool.query(
      "SELECT SUM(e.expense_amount) as total FROM expenses e JOIN budgets b ON e.budget_id = b.budget_id WHERE b.user_id = ?", [userId]
    );
    return rows[0].total || 0;
  }

  async deleteExpense(expense_id: number): Promise<void> {
    await pool.query("DELETE FROM expenses WHERE expense_id = ?", [expense_id]);
  }

  async getAllExpensesByUserId(userId: string): Promise<Expense[]> {
    const [rows]: any = await pool.query(
      "SELECT e.* FROM expenses e JOIN budgets b ON e.budget_id = b.budget_id WHERE b.user_id = ?", [userId]
    );
    return rows;
  }

  async getExpensesFromBudget(budgetId: number): Promise<Expense[]> {
    const [rows]: any = await pool.query(
      "SELECT * FROM expenses WHERE budget_id = ?", [budgetId]
    );
    return rows;
  }
  
}

export default ExpenseTracker;