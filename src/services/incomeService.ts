import IncomeTracker from "../classes/IncomeTracker.js";
import type { Income } from "../types/interfaces";

async function getTotalIncome(userId: string): Promise<number> {
    const incomeTracker = new IncomeTracker();
    return await incomeTracker.getTotalIncome(userId);
}

async function addIncome(income: Omit<Income, "id">): Promise<void> {
    const incomeTracker = new IncomeTracker();
    await incomeTracker.addIncome(income);
}

async function getIncomesByUser(userId: string): Promise<Income[]> {
    const incomeTracker = new IncomeTracker();
    return await incomeTracker.getIncomesByUser(userId);
}

export { getTotalIncome, addIncome, getIncomesByUser };