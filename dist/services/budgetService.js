import { BudgetTracker } from "../classes/BudgetTracker.js";
const budgetTracker = new BudgetTracker();
export async function getBudgetByUserId(userId) {
    return budgetTracker.getBudgetByUserId(userId);
}
export async function addBudget(budget) {
    return budgetTracker.addBudget(budget);
}
//# sourceMappingURL=budgetService.js.map