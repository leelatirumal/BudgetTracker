import * as incomeService from '../services/incomeService.js';

async function getIncome(req: any, res: any) {
    const userId = req.params.userId;
    try {
        const totalIncome = await incomeService.getTotalIncome(userId);
        res.status(200).json({ totalIncome });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve total income' });
    }
}

async function addIncome(req: any, res: any) {
    const income = req.body;
    try {
        await incomeService.addIncome(income);
        res.status(201).json({ message: 'Income added successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add income' });
    }
}

async function getIncomesByUser(req: any, res: any) {
    const userId = req.params.userId;
    try {
        const incomes = await incomeService.getIncomesByUser(userId);
        res.status(200).json({ incomes });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve incomes' });
    }
}

export { getIncome, addIncome, getIncomesByUser };