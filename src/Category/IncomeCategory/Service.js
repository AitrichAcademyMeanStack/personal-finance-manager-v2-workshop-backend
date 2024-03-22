import IncomeCategory from "../../Models/IncomeCategoryModel.js";
import NotFoundError from "../../Exceptions/NotFoundError.js";
import logger from "../../Middleware/logger.js";

// fetching all income category
const getIncomeCategory = async () => {
  try {
    return await IncomeCategory.find();
  } catch (error) {
    throw new NotFoundError("Income Category not found");
  }
};

// Adding new income category
const addIncomeCategory = async (data) => {
  try {
    const newData = await IncomeCategory.create(data);
    if (newData) {
      logger.info("New Income Category :", newData);
      return newData;
    } else {
      logger.error("Error while adding Income Category");
    }
  } catch (error) {
    logger.error(`validaion error : ${error.message}`);
    throw error;
  }
};

export default {
  getIncomeCategory,
  addIncomeCategory,
};
