import type { Expense } from "../types/interfaces.js";
declare class ExpenseTracker {
    addExpense(expense: Omit<Expense, "id">): Promise<void>;
    deleteExpense(expense_id: number): Promise<void>;
    getExpensesByUserId(userId: string): Promise<Expense[]>;
    getExpensesFromBudget(budgetId: number): Promise<Expense[]>;
}
export default ExpenseTracker;
//# sourceMappingURL=ExpenseTracker.d.ts.map