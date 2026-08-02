import pool from "../config/db.js";
class ExpenseTracker {
    async addExpense(expense) {
        await pool.query("INSERT INTO expenses (expense_id, expense_amount, expense_name, budget_id, expense_date) VALUES (?, ?, ?, ?, ?)", [expense.expense_id, expense.expense_amount, expense.expense_name, expense.budget_id, expense.expense_date]);
    }
    //   async getTotalExpenses(userId: string): Promise<number> {
    //     const [rows]: any = await pool.query(
    //       "SELECT SUM(amount) as total FROM expenses where user_id = ?", [userId]
    //     );
    //     return rows[0].total || 0;
    //   }
    async deleteExpense(expense_id) {
        await pool.query("DELETE FROM expenses WHERE expense_id = ?", [expense_id]);
    }
    async getExpensesByUserId(userId) {
        const [rows] = await pool.query("SELECT * FROM expenses WHERE user_id = ?", [userId]);
        return rows;
    }
    async getExpensesFromBudget(budgetId) {
        const [rows] = await pool.query("SELECT * FROM expenses WHERE budget_id = ?", [budgetId]);
        return rows;
    }
}
export default ExpenseTracker;
//# sourceMappingURL=ExpenseTracker.js.map