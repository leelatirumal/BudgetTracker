import { z } from 'zod';
export const createTransactionSchema = z.object({
    amount: z.number().positive({ message: 'Amount must be greater than 0' }),
    type: z.enum(['INCOME', 'EXPENSE']),
    categoryId: z.string().min(1, { message: 'Category ID is required' }),
    description: z.string().optional(),
    date: z.string().datetime().optional(),
});
export const updateTransactionSchema = createTransactionSchema.partial();
//# sourceMappingURL=transaction.schema.js.map