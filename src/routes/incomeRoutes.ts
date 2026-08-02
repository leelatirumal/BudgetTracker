import  {Router} from 'express';

import { getIncome, addIncome, getIncomesByUser } from '../controllers/incomeController.js';


const router=Router();

router.get('/total/:userId', getIncome);
router.post('/add', addIncome);
router.get('/getIncomes/:userId', getIncomesByUser);

export default router;