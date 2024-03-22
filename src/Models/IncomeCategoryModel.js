import mongoose from "mongoose"; // Importing Mongoose

const incomeCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const IncomeCategory = mongoose.model("IncomeCategory", incomeCategorySchema);

export default IncomeCategory;
