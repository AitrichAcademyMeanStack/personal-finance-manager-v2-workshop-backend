// import asyncHandler from "../Utils/asyncHandler.js";
// import incomeService from "./Service.js"

// // Adding Income
// const addIncome = asyncHandler ( async(req , res) => {
//     const income = req.body;
//     const result = await incomeService.addIncome(income)
//     res.status(201).json(result)

// })

// // Fetching Income
// const fecthIncome = asyncHandler (async (req , res) => {
//     const myIncome = await incomeService.getIncome()
//     res.status(200).json(myIncome)
// })

// // Deleting Income
// const deleteIncome = asyncHandler( async (req , res) => {
//     const id = req.params.incomeId;
//     await incomeService.removeIncome(id)
//     res.status(200).json({message:"Income removed Successfully"})
// })

// export default {addIncome , fecthIncome , deleteIncome}

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