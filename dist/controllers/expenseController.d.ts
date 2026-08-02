import type { Request, Response } from 'express';
declare function getExpenses(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function addExpense(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare function deleteExpense(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export { getExpenses, addExpense, deleteExpense };
//# sourceMappingURL=expenseController.d.ts.map