import asyncHandler from "../../utils/asyncHandler.js";
import incomeCategoryService from "./Service.js";

// fetching all locations
const getAllCategories = asyncHandler(async (req, res) => {
  const category = await incomeCategoryService.getIncomeCategory();
  res.status(200).json(category);
});

// adding location
const addCategory = asyncHandler(async (req, res) => {
  const newCategory = req.body;
  const location = await incomeCategoryService.addIncomeCategory(newCategory);
  res.status(201).json(location);
});

export default {
  getAllCategories,
  addCategory,
};
