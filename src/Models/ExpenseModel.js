import mongoose from "mongoose"; // Importing Mongoose

const expenseSchema = new mongoose.Schema(
  {
    user: {
      userId: mongoose.Schema.Types.ObjectId,
      firstName: String,
      lastName: String,
      email: String,
      phone: Number,
      userName: String,
      password: String,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "Expense",
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      // Embedding Category
      name: {
        type: String,
        required: true,
        trim: true,
      }
    },
    description: {
      type: String,
      required: true,
      maxLength: 20,
      trim: true,
    },
  },
  { versionKey: false }
);

const Expense =  mongoose.model("Expense",expenseSchema)

export default Expense

