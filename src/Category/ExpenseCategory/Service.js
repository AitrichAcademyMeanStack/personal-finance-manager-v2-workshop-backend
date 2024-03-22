import ExpenseCategory from '../../Models/ExpenseCategoryModel.js'
import NotFoundError from "../../Exceptions/NotFoundError.js";
import logger from "../../Middleware/logger.js";

// fetching all expense category
const getExpenseCategory = async () => {
  try {
    return await ExpenseCategory.find();
  } catch (error) {
    throw new NotFoundError("Expense Category not found");
  }
};

// Adding new expense category
const addExpenseCategory = async (data) => {
  try {
    const newData = await ExpenseCategory.create(data);
    if (newData) {
      logger.info("New Expense Category :", newData);
      return newData;
    } else {
      logger.error("Error while adding Expense Category");
    }
  } catch (error) {
      logger.error(`validaion error : ${error.message}`);
      throw error
    } 
  }


export default {
  getExpenseCategory,
  addExpenseCategory,
};
