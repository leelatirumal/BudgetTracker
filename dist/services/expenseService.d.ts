import type { Expense } from "../types/interfaces.js";
export declare const deleteExpense: (expense_id: number) => Promise<void>;
export declare const getExpenses: (budgetId: number) => Promise<Expense[]>;
export declare const addExpense: (expense: Expense) => Promise<void>;
export declare const getExpensesByUserId: (userId: string) => Promise<Expense[]>;
//# sourceMappingURL=expenseService.d.ts.map