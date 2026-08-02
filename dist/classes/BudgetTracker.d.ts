import type { Budget } from "../types/interfaces.js";
export declare class BudgetTracker {
    getBudgetByUserId(userId: string): Promise<Budget[] | null>;
    addBudget(budget: Budget): Promise<Budget>;
}
//# sourceMappingURL=BudgetTracker.d.ts.map