
import userservice from './Service.js' 
import asyncerrorhandler from '../utils/asyncHandler.js'

//get all user
const getAllusers=asyncerrorhandler(async (req,res)=>{
    const newuser=await userservice.getAllusers()
    res.status(200).json(newuser)

})


// Add user
const createUser = asyncerrorhandler ( async(req , res) => {
    const User = req.body;
    const result = await userservice.createUser(User)
    res.status(201).json(result)

})



const updateUser =asyncerrorhandler (async (req, res) => {
    const userId = req.params.userId;
    const userData = req.body;
    const updatedUser = await userservice.updateUser(userId, userData);
    if (updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});


//get user by id

const getUserById = asyncerrorhandler(async (req, res) => {
    const userId = req.params.userId;
    const user = await userservice.getUserById(userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

//deleteuser

const deleteUser = asyncerrorhandler(async (req, res) => {
    const userId = req.params.userId;
    await userservice.deleteUser(userId);
    res.status(204).json({ message: "User deleted successfully" });
});




export default {getAllusers,getUserById,createUser,updateUser,deleteUser
   
}
