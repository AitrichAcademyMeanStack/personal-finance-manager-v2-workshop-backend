

import profileService from "./Service.js";
import asyncErrorHandler from "../utils/asyncHandler.js";

const addProfilePicture = asyncErrorHandler(async (req, res) => {
  const userId = req.params.userid;

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  await profileService.uploadProfilePicture(req.file, userId);
  res.status(201).json({ message: "Profile Picture uploaded successfully" });
});


const getprofilepicture = asyncErrorHandler(async(req,res)=>{
  const userId = req.params.userId
  
  const gettprofilepicture = await profileService.getProfilePicture(userId)
  res.status(200).json(gettprofilepicture)
})


export default { addProfilePicture,getprofilepicture };