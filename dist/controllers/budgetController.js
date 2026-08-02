import * as budgetService from "../services/budgetService.js";
export async function getBudgets(req, res) {
    const userId = req.params.userId;
    if (typeof userId !== "string") {
        res.status(400).send("Invalid userId");
        return;
    }
    const budgets = await budgetService.getBudgetByUserId(userId);
    if (budgets) {
        res.json(budgets);
    }
    else {
        res.status(404).send("Budgets not found");
    }
}
export async function addBudget(req, res) {
    const budget = req.body;
    try {
        const newBudget = await budgetService.addBudget(budget);
        res.status(201).json(newBudget);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
//# sourceMappingURL=budgetController.js.map