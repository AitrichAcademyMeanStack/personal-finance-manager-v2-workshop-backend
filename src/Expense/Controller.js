

import expenseService from "./Service.js"
import asyncHandler from "../utils/asyncHandler.js";

//addexpense
const addExpense = asyncHandler(async (req, res) => {
    const userId = req.params.userId; // Extract userId from request parameters
    const expenseData = req.body;
        const expense = await expenseService.addExpense(userId, expenseData);
        res.status(201).json(expense);
    });


const fetchExpense = asyncHandler (async (req , res) => {
    const myExpense = await expenseService.getExpenses()
    res.status(200).json(myExpense)
})


const deleteExpense = asyncHandler( async (req , res) => {
    const id = req.params.expenseId;
    await expenseService.removeExpense(id)
    res.status(200).json({message: "Expense Removed Successfully"})
})

export default {addExpense , fetchExpense , deleteExpense}