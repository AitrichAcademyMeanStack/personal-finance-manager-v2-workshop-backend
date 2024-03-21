import logger from "../middleware/logger.js";

import User from "../Models/UserModel.js"

import mongoose from "mongoose"; 


//createuser
const createUser = async (data) => {
    try {
        const user = await User.create(data)
        if (user) {
            return user
        }
    } catch (error) {
        throw error
    }
}

//getalluser
const getAllusers = async() => {
    try {
        const user = await User.find().sort({created: -1})
        if (user) {
            return user
        }
    
    } catch (error) {
        throw error
    }
}

 // Updateuser
 const updateUser = async (userId, userData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!updatedUser) {
            throw new Error("User not found");
        }
        logger.info("User updated successfully");
        return updatedUser;
    } catch (error) {
        throw error;
    }
};


//get user by id
const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
};

 // delete
 const deleteUser = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error("User not found");
        }
    } catch (error) {
        throw error;
    }
};

 // login
const loginUser = async (username, password) => {
    try {
       
        const user = await User.findOne({ username, password });
        return user;
    } catch (error) {
        throw error;
    }
};
 

export default {
    getAllusers,
    getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
//   changepassword,

};
