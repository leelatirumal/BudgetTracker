import ExpenseTracker from "../classes/ExpenseTracker.js";
const tracker = new ExpenseTracker(); // created ONCE, here, and only here
export const deleteExpense = (expense_id) => tracker.deleteExpense(expense_id);
export const getExpenses = (budgetId) => tracker.getExpensesFromBudget(budgetId);
export const addExpense = async (expense) => {
    await tracker.addExpense(expense);
};
export const getExpensesByUserId = (userId) => tracker.getExpensesByUserId(userId);
// export const getExpenseByCategory = (userId: string, category: string) => tracker.getExpenseByCategory(userId, category);        await expenseService.addExpense(expenseData);
//# sourceMappingURL=expenseService.js.map