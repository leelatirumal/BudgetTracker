import {Router} from 'express';
import { addBudget, getBudgets } from '../controllers/budgetController.js';
import requireAuth from '../middleware/authMiddleware.js';

const router = Router();

console.log("Budget routes are being set up...");

router.get("/getBudgets/:userId", requireAuth, getBudgets);

router.post("/addBudget", requireAuth, addBudget);

export default router;
