

import incomeService from "./Service.js"
import asyncHandler from "../utils/asyncHandler.js";

//addexpense
const addIncome = asyncHandler(async (req, res) => {
    const userId = req.params.userId; // Extract userId from request parameters
    const incomeData = req.body;
        const income = await incomeService.addIncome(userId, incomeData);
        res.status(201).json(income);
    });


const fecthIncome = asyncHandler (async (req , res) => {
    const myIncome= await incomeService.getIncome()
    res.status(200).json(myIncome)
})


const deleteIncome = asyncHandler( async (req , res) => {
    const id = req.params.incomeId;
    await incomeService.removeIncome(id)
    res.status(200).json({message: "Income Removed Successfully"})
})

export default {addIncome , fecthIncome , deleteIncome}