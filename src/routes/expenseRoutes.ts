import {Router} from 'express';
import { getExpenses, addExpense, deleteExpense } from '../controllers/expenseController.js';
const router = Router();
console.log("Expense routes are being set up...");

router.get("/getExpenses/:budget_id", getExpenses);

router.post("/addExpenses", addExpense);

router.delete("/deleteExpense/:expense_id", deleteExpense);

export default router;