
import Expense from "../Models/ExpenseModel.js"
import User from "../Models/UserModel.js";
// import moment from "moment";

// Add Expense
const addExpense = async (userId, expenseData) => {
    try {
        const finduser = await User.findById(userId)
        if (finduser) {
            expenseData.user = {
                userId: finduser._id,
                lastName: finduser.lastname,
                password: finduser.password,
                userName: finduser.username,
                firstName: finduser.firstname,
                phone: finduser.phone,
                email:finduser.email
            }
            const postexpense = await Expense.create(expenseData)
            if (postexpense) {
                return postexpense
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};





const getExpenses = async () => {
    try {
        const expenses = await Expense.find().sort({ created: -1 }).populate('user');
        return expenses;
    } catch (error) {
        throw error;
    }
};


// Deleting Expense
const removeExpense = async(expenseId) => {
    try {
        const data = await Expense.findByIdAndDelete(expenseId)
        if (data) {
            return data
        }
    } catch (error) {
        throw error
    }
}

export default  {addExpense , getExpenses ,removeExpense}