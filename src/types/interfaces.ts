
export interface Expense {
    expense_id: number;
    budget_id: number;
    expense_amount: number;
    expense_name: string;
    expense_date: Date;
}

export interface Income {
    income_id: string;
    income_amount: number;
    income_source: string;
    date: Date;
    user_id: string;
}

export interface Budget {
    budget_id: number;
    budget_name: string;
    budget_amount: number;
    user_id: string;
}

export interface User {
    user_id: string;
    username: string;
    profession: string;
}