import { z } from 'zod';
export declare const createTransactionSchema: z.ZodObject<{
    amount: z.ZodNumber;
    type: z.ZodEnum<{
        EXPENSE: "EXPENSE";
        INCOME: "INCOME";
    }>;
    categoryId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateTransactionSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodEnum<{
        EXPENSE: "EXPENSE";
        INCOME: "INCOME";
    }>>;
    categoryId: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    date: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
//# sourceMappingURL=transaction.schema.d.ts.map