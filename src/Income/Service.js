
import IncomeCategory from "../Models/IncomeCategoryModel.js";
import Income from "../Models/IncomeModel.js"
import User from "../Models/UserModel.js";
// import moment from "moment";

// Add Income
const addIncome = async (userId,incomeData) => {
    try {
        const finduser = await User.findById(userId)
        if (finduser) {
          incomeData.user = {
            userId: finduser._id,
            lastName: finduser.lastname,
            password: finduser.password,
            userName: finduser.username,
            firstName: finduser.firstname,
            phone: finduser.phone,
            email: finduser.email,
          };

          // Finding category
          const category = await IncomeCategory.findOne({
            name: incomeData.category.name,
          });

          if (!category) {
            throw new Error("Category not found");
          }

          incomeData.category = {
            name: category.title,
            description: category.description,
          };
          const postincome = await Income.create(incomeData);
          if (postincome) {
            return postincome;
          }
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};





const getIncome = async () => {
    try {
        const income = await Income.find().sort({ created: -1 }).populate('user');
        return income;
    } catch (error) {
        throw error;
    }
};


// Deleting income
const removeIncome = async(incomeId) => {
    try {
        const data = await Income.findByIdAndDelete(incomeId)
        if (data) {
            return data
        }
    } catch (error) {
        throw error
    }
}

export default  {addIncome , getIncome ,removeIncome}