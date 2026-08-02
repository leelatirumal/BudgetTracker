import express from "express";
import expenseRoutes from "./routes/expenseRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/expenses", expenseRoutes);
    
app.use("/api/budgets", budgetRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));