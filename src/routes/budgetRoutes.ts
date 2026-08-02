import {Router} from 'express';
import { addBudget, getBudgets } from '../controllers/budgetController.js';
const router = Router();
console.log("Budget routes are being set up...");

router.get("/getBudgets/:userId",getBudgets);

router.post("/addBudget", addBudget);

export default router;
