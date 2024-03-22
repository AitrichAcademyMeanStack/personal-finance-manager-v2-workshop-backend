import asyncHandler from "../../utils/asyncHandler.js";
import expenseCategoryService from "./Service.js";

// fetching all locations
const getAllCategories = asyncHandler(async (req, res) => {
  const category = await expenseCategoryService.getExpenseCategory();
  res.status(200).json(category);
});

// adding location
const addCategory = asyncHandler(async (req, res) => {
  const newCategory = req.body;
  const location = await expenseCategoryService.addExpenseCategory(newCategory);
  res.status(201).json(location);
});


export default {
  getAllCategories,
  addCategory,
};
