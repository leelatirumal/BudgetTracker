console.log("Expense controller is being initialized--0...");
import * as expenseService from '../services/expenseService.js';
async function getExpenses(req, res) {
    try {
        const { budget_id } = req.params;
        const budgetId = Number(budget_id);
        if (isNaN(budgetId)) {
            return res.status(400).json({ message: "Budget id is required" });
        }
        const expenses = await expenseService.getExpenses(budgetId);
        res.status(200).json({ expenses });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching expenses', error });
    }
}
async function addExpense(req, res) {
    try {
        const expenseData = req.body;
        if (!expenseData.expense_id || !expenseData.expense_amount || !expenseData.budget_id || !expenseData.expense_date) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        await expenseService.addExpense(expenseData);
        res.status(201).json(expenseData);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating expense', error });
    }
}
async function deleteExpense(req, res) {
    try {
        let { expense_id } = req.params;
        const expenseId = Number(expense_id);
        if (isNaN(expenseId)) {
            return res.status(400).json({ message: "Expense id is required" });
        }
        await expenseService.deleteExpense(expenseId);
        res.status(200).json({ message: `Expense with id ${expenseId} deleted successfully` });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting expense', error });
    }
}
export { getExpenses, addExpense, deleteExpense };
//# sourceMappingURL=expenseController.js.map