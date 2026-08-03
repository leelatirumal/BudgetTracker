import type { ResultSetHeader } from "mysql2";
import pool from "../config/db.js";
import type{ Budget } from "../types/interfaces.js";

export class BudgetTracker {

    
async getBudgetByUserId(userId: number): Promise<Budget [] | null> {
    const [result] = await pool.query("SELECT * FROM BUDGETS WHERE user_id = ?", [userId]);
    console.log("BudgetTracker.getBudgetByUserId result:", result);
    return result as Budget[];
}

async addBudget(budget: Budget): Promise<Budget> {
    const [result] = await pool.query<ResultSetHeader>(
        "INSERT INTO budgets (budget_id,budget_name,budget_amount,user_id) VALUES (?, ?, ?, ?)",
        [budget.budget_id, budget.budget_name, budget.budget_amount, budget.user_id]
    );
    if (result.affectedRows === 0) {
        throw new Error("Failed to add budget");
    }
    return budget;
}
}

