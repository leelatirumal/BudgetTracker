import pool from "../config/db.js";
import type { Income } from "../types/interfaces";

export default class IncomeTracker {

    async getTotalIncome(userId: string): Promise<number> {
        const [rows]: any = await pool.query(
            "SELECT SUM(income_amount) as total FROM incomes WHERE user_id = ?", [userId]
        );
        return rows[0].total || 0;
    }

    async addIncome(income: Omit<Income, "id">): Promise<void> {
        console.log("Adding income:", income);
        await pool.query(
            "INSERT INTO incomes (income_id, income_amount, user_id, income_source, income_date) VALUES (?, ?, ?, ?, ?)",
            [income.income_id, income.income_amount, income.user_id, income.income_source, income.income_date]
        );
    }

    async getIncomesByUser(userId: string): Promise<Income[]> {
        const [rows]: any = await pool.query(
            "SELECT * FROM incomes WHERE user_id = ?", [userId]
        );
        return rows;
    }


}