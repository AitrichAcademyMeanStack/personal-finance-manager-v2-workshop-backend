import mongoose from "mongoose"; // Importing mongoose
import logger from "../middleware/logger.js"; // Importing logger
import ExpenseCategory from "../Models/ExpenseCategoryModel.js"; // Importing ExpenseCategory model
import IncomeCategory from "../Models/IncomeCategoryModel.js"; // Importing IncomeCategory model
import { createRequire } from "module"; // Importing createRequire to load JSON data

const require = createRequire(import.meta.url);

const expenseCategoryData = require("../../data/ExpenseCategory.json"); // Importing ExpenseCategory JSON data
const incomeCategoryData = require("../../data/IncomeCategory.json"); // Importing IncomeCategory JSON data

// Establishing connection to the database
const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    // Mongoose connection setup
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      logger.info("🍀 MongoDB Connected Successfully");
      resolve();
    });

    mongoose.connection.on("error", (err) => {
      logger.error("Error while connecting to database: " + err);
      reject(err);
    });

    mongoose.connection.on("disconnected", () => {
      logger.warn("MongoDB connection disconnected");
    });
  })
    .then(() => {
      // After connecting to database, inserting data
      return Promise.all([
        insertExpenseCategoryData(),
        insertIncomeCategoryData(),
      ]);
    })
    .catch((err) => {
      logger.error("MongoDB Connection failed", err);
    });
};

// Inserting ExpenseCategory data
const insertExpenseCategoryData = async () => {
  try {
    const existingData = await ExpenseCategory.find();
    if (existingData.length === 0) {
      await ExpenseCategory.insertMany(expenseCategoryData);
      logger.info("Expense Category data added successfully");
    } else {
      logger.info("Expense Category data already exists");
    }
  } catch (error) {
    logger.error("Error inserting Expense Category data: " + error);
  }
};

// Inserting IncomeCategory data
const insertIncomeCategoryData = async () => {
  try {
    const existingData = await IncomeCategory.find();
    if (existingData.length === 0) {
      await IncomeCategory.insertMany(incomeCategoryData);
      logger.info("Income Category data added successfully");
    } else {
      logger.info("Income Category data already exists");
    }
  } catch (error) {
    logger.error("Error inserting Income Category data: " + error);
  }
};

export default connectToDatabase;
