
import accountservice from './Service.js' 
import asyncerrorhandler from '../utils/asyncHandler.js'

//get all user
const getAllaccount=asyncerrorhandler(async (req,res)=>{
    const newaccount=await accountservice.getAllaccount()
    res.status(200).json(newaccount)

})





const updateAccount =asyncerrorhandler (async (req, res) => {
    const accountId = req.params.userId;
    const accountData = req.body;
    const updatedaccount = await accountservice.updatedaccount(accountId , accountData);
    if (updatedaccount) {
        res.status(200).json(updatedaccount);
    } else {
        res.status(404).json({ error: "Account not found" });
    }
});







export default {getAllaccount,updateAccount}
   

